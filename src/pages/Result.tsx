import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PageShell } from '../components/layout/PageShell';
import { ResultRadar } from '../components/result/ResultRadar';
import { Button, ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import type { QuizResultState, ScoreDimension } from '../types';
import { resolveCharacter } from '../utils/characterEngine';
import { dimensionLabels, scoreDimensions } from '../utils/scoreEngine';
import { getDailyPensionMessage, getScoreGrade, resolveScoreBadges } from '../utils/resultEngine';

const KAKAO_SDK_URL = 'https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js';
const heroImageModules = import.meta.glob('../assets/hero.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;
const heroImageSrc = heroImageModules['../assets/hero.png'] ?? '/hero.png';
const LOCAL_KAKAO_SHARE_URL = 'http://localhost:5173';
let kakaoSdkPromise: Promise<KakaoSdk> | null = null;

type KakaoShareDefaultPayload = {
  objectType: 'feed';
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons: Array<{
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }>;
};

type KakaoSdk = {
  init?: (key: string) => void;
  isInitialized: () => boolean;
  Share?: {
    sendDefault: (payload: KakaoShareDefaultPayload) => void;
  };
};

declare global {
  interface Window {
    Kakao?: KakaoSdk;
  }
}

function isQuizResultState(value: unknown): value is QuizResultState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<QuizResultState>;

  return (
    typeof candidate.pensionScore === 'number' &&
    Boolean(candidate.dimensionScores) &&
    Array.isArray(candidate.questionHistory)
  );
}

function getTopDimensions(resultState: QuizResultState) {
  return [...scoreDimensions]
    .sort((left, right) => resultState.dimensionScores[right] - resultState.dimensionScores[left])
    .slice(0, 2);
}

function getWhyResultText(topDimensions: ScoreDimension[]) {
  const labels = topDimensions.map((dimension) => dimensionLabels[dimension]).join(', ');

  return `이번 결과는 ${labels} 점수가 상대적으로 높게 나타난 답변 흐름을 바탕으로 결정됐어요.`;
}

function loadKakaoSdk(): Promise<KakaoSdk> {
  if (window.Kakao) {
    return Promise.resolve(window.Kakao);
  }

  if (kakaoSdkPromise) {
    return kakaoSdkPromise;
  }

  kakaoSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${KAKAO_SDK_URL}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (window.Kakao) {
          resolve(window.Kakao);
          return;
        }

        reject(new Error('Kakao SDK loaded without window.Kakao.'));
      });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Kakao SDK.')));
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = KAKAO_SDK_URL;
    script.onload = () => {
      if (window.Kakao) {
        resolve(window.Kakao);
        return;
      }

      reject(new Error('Kakao SDK loaded without window.Kakao.'));
    };
    script.onerror = () => reject(new Error('Failed to load Kakao SDK.'));
    document.head.appendChild(script);
  });

  return kakaoSdkPromise;
}

async function getInitializedKakaoSdk() {
  const kakaoJavascriptKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;

  if (!kakaoJavascriptKey) {
    return null;
  }

  try {
    const kakao = await loadKakaoSdk();

    if (!kakao.isInitialized()) {
      kakao.init?.(kakaoJavascriptKey);
    }

    return kakao.isInitialized() ? kakao : null;
  } catch {
    return null;
  }
}

function getAbsoluteAssetUrl(assetPath: string) {
  return new URL(assetPath, window.location.origin).toString();
}

export function Result() {
  const location = useLocation();
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [isSavingImage, setIsSavingImage] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [hasCharacterImageError, setHasCharacterImageError] = useState(false);
  const resultState = isQuizResultState(location.state) ? location.state : null;

  if (!resultState) {
    return (
      <PageShell className="flex min-h-[70vh] items-center justify-center">
        <Card className="max-w-xl p-8 text-center">
          <p className="text-sm font-bold text-brand-700">결과 없음</p>
          <h1 className="mt-3 text-3xl font-black text-slate-950">진단을 먼저 완료해 주세요</h1>
          <p className="mt-4 leading-7 text-slate-600">
            연금BTI 결과는 12개 질문을 완료한 뒤 생성됩니다.
          </p>
          <div className="mt-8">
            <ButtonLink to="/quiz">진단 시작하기</ButtonLink>
          </div>
        </Card>
      </PageShell>
    );
  }

  const character = resolveCharacter(resultState.dimensionScores);
  const earnedBadges = resolveScoreBadges(resultState.dimensionScores);
  const scoreGrade = getScoreGrade(resultState.pensionScore);
  const topDimensions = getTopDimensions(resultState);
  const dailyMessage = getDailyPensionMessage(
    character.pensionMessages,
    resultState.pensionScore + resultState.questionHistory.length + resultState.dimensionScores.growth,
  );
  const recommendedCards = character.recommendationCards.slice(0, 2);
  const recommendedFeatureNames = recommendedCards.map((card) => card.featureName);
  const shareTitle = `나는 ${character.name} 유형!`;
  const shareDescription = `연금관리성숙도 ${resultState.pensionScore}점\n\n추천\n\n${recommendedFeatureNames.join('\n\n')}`;
  const shareMessage = `${shareTitle}\n\n${shareDescription}\n\n너도 연금BTI 테스트 해봐!`;

  async function copyShareMessage() {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareMessage);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = shareMessage;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  async function handleSaveResultImage() {
    if (!resultCardRef.current || isSavingImage) {
      return;
    }

    setIsSavingImage(true);

    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: '#f8fbff',
        scale: Math.min(window.devicePixelRatio || 1, 2),
        useCORS: true,
      });
      const imageUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      link.href = imageUrl;
      link.download = 'pension-bti-result.png';
      link.click();
    } finally {
      setIsSavingImage(false);
    }
  }

  async function handleKakaoShare() {
    const kakao = await getInitializedKakaoSdk();

    if (kakao?.Share?.sendDefault) {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: shareDescription,
          imageUrl: getAbsoluteAssetUrl(heroImageSrc),
          link: {
            mobileWebUrl: LOCAL_KAKAO_SHARE_URL,
            webUrl: LOCAL_KAKAO_SHARE_URL,
          },
        },
        buttons: [
          {
            title: '나도 테스트하기',
            link: {
              mobileWebUrl: LOCAL_KAKAO_SHARE_URL,
              webUrl: LOCAL_KAKAO_SHARE_URL,
            },
          },
        ],
      });
      return;
    }

    await copyShareMessage();
    window.alert('카카오 공유 설정 전이라 결과 문구를 복사했어요.');
  }

  return (
    <PageShell className="py-3 sm:py-8">
      <div className="mx-auto max-w-xl lg:max-w-5xl">
        <section className="min-h-[calc(100svh-88px)] lg:flex lg:items-center lg:justify-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div
              ref={resultCardRef}
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-brand-50 to-sky-100 p-4 text-center shadow-soft sm:p-7"
            >
              <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-white/70 blur-2xl" />
              <div className="absolute -right-12 top-4 h-32 w-32 rounded-full bg-brand-200/60 blur-2xl" />
              <div className="absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-emerald-100/70 blur-2xl" />

              <div className="relative">
                <p className="mx-auto w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-black text-brand-800 shadow-card">
                  연금BTI 결과
                </p>
                {hasCharacterImageError ? (
                  <motion.div
                    animate={{ y: [0, -9, 0] }}
                    className="mx-auto mt-3 text-7xl leading-none drop-shadow-[0_22px_30px_rgba(15,35,74,0.24)] sm:mt-4 sm:text-8xl"
                    transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
                  >
                    {character.emoji}
                  </motion.div>
                ) : (
                  <motion.img
                    alt={character.name}
                    animate={{ y: [0, -9, 0] }}
                    className="mx-auto mt-3 h-auto w-[180px] object-contain drop-shadow-[0_22px_30px_rgba(15,35,74,0.24)] sm:mt-4 sm:w-[260px]"
                    onError={() => setHasCharacterImageError(true)}
                    src={character.image}
                    transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
                  />
                )}
                <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:mt-4 sm:text-4xl">
                  {character.name}
                </h1>
                <p className="mt-1 text-base font-extrabold text-brand-800">{character.title}</p>
                <p className="mx-auto mt-2 max-w-sm text-sm font-semibold leading-6 text-slate-600 sm:mt-3">
                  {character.description}
                </p>

                <div className="mx-auto mt-4 grid max-w-sm grid-cols-[1fr_auto] items-center gap-3 rounded-3xl bg-white/85 p-3 text-left shadow-card sm:mt-5">
                  <div>
                    <p className="text-xs font-black text-slate-500">Pension Management Score</p>
                    <p className="mt-1 text-sm font-bold text-brand-800">{scoreGrade}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-700 text-2xl font-black text-white shadow-card sm:h-20 sm:w-20 sm:text-3xl">
                    {resultState.pensionScore}
                  </div>
                </div>

                <div className="mx-auto mt-3 grid max-w-sm grid-cols-2 gap-2 sm:mt-4">
                  {recommendedFeatureNames.map((featureName) => (
                    <div
                      className="rounded-2xl border border-white/80 bg-white/80 px-3 py-2.5 text-sm font-black text-slate-800 shadow-card sm:py-3"
                      key={featureName}
                    >
                      {featureName}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-3">
              <Button
                className="rounded-2xl"
                disabled={isSavingImage}
                onClick={handleSaveResultImage}
                type="button"
              >
                {isSavingImage ? '저장 중' : '결과 이미지 저장'}
              </Button>
              <Button className="rounded-2xl bg-[#FEE500] text-slate-950 hover:bg-[#f3d900]" onClick={handleKakaoShare} type="button">
                카카오톡 공유
              </Button>
              <Button
                className="rounded-2xl"
                onClick={() => setIsDetailOpen((isOpen) => !isOpen)}
                type="button"
                variant="secondary"
              >
                {isDetailOpen ? '접기' : '자세히 보기'}
              </Button>
            </div>
          </motion.div>
        </section>

        <AnimatePresence initial={false}>
          {isDetailOpen ? (
            <motion.section
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              className="overflow-hidden"
              exit={{ height: 0, opacity: 0, y: -12 }}
              initial={{ height: 0, opacity: 0, y: -12 }}
              transition={{ duration: 0.36, ease: 'easeOut' }}
            >
              <div className="grid gap-4 pb-8 lg:grid-cols-2">
                <Card className="p-5 sm:p-7 lg:col-span-2">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-black text-slate-950">성향 레이더</h2>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        6개 성향 점수를 한눈에 볼 수 있어요.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-brand-50 px-4 py-3 text-right">
                      <p className="text-xs font-black text-brand-700">성숙도</p>
                      <p className="text-2xl font-black text-brand-800">{resultState.pensionScore}점</p>
                    </div>
                  </div>
                  <ResultRadar scores={resultState.dimensionScores} />
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">AI가 분석한 핵심 성향</h2>
                  <p className="mt-4 leading-7 text-slate-600">{character.coreAnalysis}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {character.mainTraits.map((trait) => (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-black text-brand-800" key={trait}>
                        {trait}
                      </span>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">왜 이 결과가 나왔나요?</h2>
                  <p className="mt-4 leading-7 text-slate-600">{getWhyResultText(topDimensions)}</p>
                  <div className="mt-5 grid gap-3">
                    {topDimensions.map((dimension) => (
                      <div className="rounded-2xl bg-slate-50 p-4" key={dimension}>
                        <div className="flex items-center justify-between text-sm font-black">
                          <span>{dimensionLabels[dimension]}</span>
                          <span className="text-brand-800">{resultState.dimensionScores[dimension]}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white">
                          <div
                            className="h-2 rounded-full bg-brand-700"
                            style={{ width: `${resultState.dimensionScores[dimension]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">나의 강점</h2>
                  <div className="mt-5 grid gap-3">
                    {character.strengths.map((strength) => (
                      <p className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700" key={strength}>
                        {strength}
                      </p>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">조금 더 좋아질 수 있는 점</h2>
                  <div className="mt-5 grid gap-3">
                    {character.improvementTips.map((tip) => (
                      <p className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700" key={tip}>
                        {tip}
                      </p>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">추천 연금 관리 습관</h2>
                  <div className="mt-5 grid gap-3">
                    {character.recommendedHabits.map((habit, index) => (
                      <div className="flex gap-3 rounded-2xl bg-slate-50 p-4" key={habit}>
                        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-black text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm font-semibold leading-6 text-slate-700">{habit}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7">
                  <h2 className="text-xl font-black text-slate-950">획득 배지</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {earnedBadges.map((badge) => (
                      <span
                        className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-black text-brand-800"
                        key={badge.id}
                        title={badge.description}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  {earnedBadges.length === 0 ? (
                    <p className="mt-5 text-sm leading-6 text-slate-500">
                      아직 획득한 배지는 없습니다. 다음 테스트에서는 강점 성향을 더 선명하게 확인해 보세요.
                    </p>
                  ) : null}
                </Card>

                <Card className="p-5 sm:p-7 lg:col-span-2">
                  <h2 className="text-xl font-black text-slate-950">나에게 잘 맞는 한국투자증권 기능</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {recommendedCards.map((card) => (
                      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5" key={card.featureName}>
                        <p className="text-base font-black text-brand-700">{card.featureName}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{card.explanation}</p>
                        <div className="mt-4 rounded-2xl bg-white p-3 text-sm font-semibold leading-6 text-slate-700">
                          {card.whyItMatches}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 sm:p-7 lg:col-span-2">
                  <h2 className="text-xl font-black text-slate-950">오늘의 연금 한마디</h2>
                  <p className="mt-5 rounded-3xl bg-brand-50 p-5 text-lg font-black leading-8 text-brand-900">
                    {dailyMessage}
                  </p>
                </Card>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </PageShell>
  );
}

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { PageShell } from '../components/layout/PageShell';
import { SectionHeader } from '../components/shared/SectionHeader';
import { StepFlow } from '../components/shared/StepFlow';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Metric } from '../components/ui/Metric';

export function Home() {
  const location = useLocation();
  const notice = typeof location.state === 'object' && location.state !== null && 'notice' in location.state
    ? String(location.state.notice)
    : null;

  return (
    <PageShell>
      {notice ? (
        <div className="mb-6 rounded-2xl border border-brand-100 bg-white px-5 py-4 text-sm font-bold text-brand-800 shadow-card">
          {notice}
        </div>
      ) : null}
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <StepFlow activeStep={0} />
          <div className="mt-10">
            <SectionHeader
              description="연금BTI는 연금 투자 성향, 절세 감각, 장기 유지력을 하나의 흐름으로 정리해 나에게 맞는 연금 캐릭터를 보여주는 서비스입니다."
              eyebrow="Premium Pension Personality"
              title="내 연금 성향을 가장 선명하게 이해하는 방법"
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/quiz">진단 시작하기</ButtonLink>
            <ButtonLink to="/quiz" variant="secondary">
              12문항 확인하기
            </ButtonLink>
          </div>
        </motion.div>

        <Card className="p-5 sm:p-6">
          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-brand-100">연금BTI 리포트</p>
                <p className="mt-2 text-2xl font-black">연금 관리 점수</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">12 Questions</span>
            </div>
            <div className="mt-8 grid gap-3">
              <div className="h-3 rounded-full bg-white/15">
                <div className="h-3 w-4/5 rounded-full bg-brand-300" />
              </div>
              <div className="h-3 rounded-full bg-white/15">
                <div className="h-3 w-2/3 rounded-full bg-emerald-300" />
              </div>
              <div className="h-3 rounded-full bg-white/15">
                <div className="h-3 w-3/4 rounded-full bg-violet-300" />
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Metric detail="질문 기반" label="진단" value="3분" />
            <Metric detail="성향 축" label="분석" value="4개" />
            <Metric detail="맞춤형" label="리포트" value="1개" />
          </div>
        </Card>
      </div>

      <Card className="mt-10 p-6 sm:p-8">
        <p className="text-sm font-bold text-brand-700">Submission</p>
        <h2 className="mt-3 text-2xl font-black text-slate-950">과제 제출용 프로젝트 소개</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          연금BTI는 일상 행동 질문을 기반으로 사용자의 장기 자산관리 성향을 분석하고, 그 결과를
          캐릭터·레이더 차트·연금 관리 성숙도·추천 기능으로 시각화한 웹앱입니다.
        </p>
      </Card>
    </PageShell>
  );
}

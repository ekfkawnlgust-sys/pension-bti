import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageShell } from '../components/layout/PageShell';
import { QuestionPreview } from '../components/quiz/QuestionPreview';
import { SectionHeader } from '../components/shared/SectionHeader';
import { StepFlow } from '../components/shared/StepFlow';
import { Button } from '../components/ui/Button';
import { questions } from '../data/questions';
import type { QuizAnswer } from '../types';
import { calculateQuizResult, validateQuestions } from '../utils/scoreEngine';

export function Quiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const currentQuestion = questions[currentIndex];
  const selectedOptionId = answers.find((answer) => answer.questionId === currentQuestion.id)?.optionId;
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const isQuestionSetValid = useMemo(() => validateQuestions(questions), []);

  function upsertAnswer(optionId: string) {
    const nextAnswers = [
      ...answers.filter((answer) => answer.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, optionId },
    ];

    setAnswers(nextAnswers);

    if (currentIndex === questions.length - 1) {
      const result = calculateQuizResult(questions, nextAnswers);
      navigate('/result', { state: result, replace: true });
      return;
    }

    window.setTimeout(() => {
      setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
    }, 180);
  }

  function goToPreviousQuestion() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl">
        <StepFlow activeStep={1} />
        <div className="mt-8">
          <SectionHeader
            description="총 12개의 질문에 답하면 꾸준함, 계획성, 성장성, 안정성, 자동화, 절세 점수를 바탕으로 연금 관리 점수를 계산합니다."
            eyebrow="Quiz"
            title="연금 성향 진단"
          />
        </div>
        <div className="mt-8 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-brand-700 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {!isQuestionSetValid ? (
          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-semibold text-red-700">
            질문 데이터는 정확히 12개 질문과 각 4개 답변으로 구성되어야 합니다.
          </div>
        ) : null}
        <div className="mt-8">
          <QuestionPreview
            current={currentIndex + 1}
            onSelect={upsertAnswer}
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            total={questions.length}
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Button disabled={currentIndex === 0} onClick={goToPreviousQuestion} type="button" variant="secondary">
            이전
          </Button>
          <p className="text-sm font-semibold text-slate-500">
            {answers.length}개 답변 완료
          </p>
        </div>
      </div>
    </PageShell>
  );
}

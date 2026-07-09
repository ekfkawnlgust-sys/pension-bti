import type {
  DimensionScores,
  QuestionHistoryItem,
  QuizAnswer,
  QuizQuestion,
  QuizResultState,
  ScoreDimension,
} from '../types';

export const scoreDimensions = [
  'consistency',
  'planning',
  'growth',
  'stability',
  'automation',
  'tax',
] as const satisfies readonly ScoreDimension[];

export const dimensionLabels: Record<ScoreDimension, string> = {
  consistency: '꾸준함',
  planning: '계획성',
  growth: '성장성',
  stability: '안정성',
  automation: '자동화',
  tax: '절세',
};

export const pensionScoreWeights: Record<ScoreDimension, number> = {
  consistency: 30,
  planning: 20,
  automation: 15,
  tax: 15,
  stability: 10,
  growth: 10,
};

export const initialScore: DimensionScores = {
  consistency: 0,
  planning: 0,
  growth: 0,
  stability: 0,
  automation: 0,
  tax: 0,
};

function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function getOption(question: QuizQuestion, optionId: string) {
  return question.options.find((option) => option.id === optionId);
}

function calculateMaxScores(questions: QuizQuestion[]): DimensionScores {
  return questions.reduce<DimensionScores>((totals, question) => {
    scoreDimensions.forEach((dimension) => {
      const questionMax = Math.max(
        ...question.options.map((option) => option.scores[dimension] ?? 0),
      );

      totals[dimension] += questionMax;
    });

    return totals;
  }, { ...initialScore });
}

function calculateRawScores(questions: QuizQuestion[], answers: QuizAnswer[]): DimensionScores {
  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer.optionId]));

  return questions.reduce<DimensionScores>((totals, question) => {
    const optionId = answerMap.get(question.id);
    const selectedOption = optionId ? getOption(question, optionId) : undefined;

    if (!selectedOption) {
      return totals;
    }

    scoreDimensions.forEach((dimension) => {
      totals[dimension] += selectedOption.scores[dimension] ?? 0;
    });

    return totals;
  }, { ...initialScore });
}

export function calculateDimensionScores(
  questions: QuizQuestion[],
  answers: QuizAnswer[],
): DimensionScores {
  const rawScores = calculateRawScores(questions, answers);
  const maxScores = calculateMaxScores(questions);

  return scoreDimensions.reduce<DimensionScores>((normalizedScores, dimension) => {
    const maxScore = maxScores[dimension];

    normalizedScores[dimension] = maxScore === 0 ? 0 : clampScore((rawScores[dimension] / maxScore) * 100);

    return normalizedScores;
  }, { ...initialScore });
}

export function calculatePensionScore(dimensionScores: DimensionScores): number {
  const totalWeight = scoreDimensions.reduce((total, dimension) => total + pensionScoreWeights[dimension], 0);
  const weightedScore = scoreDimensions.reduce(
    (total, dimension) => total + dimensionScores[dimension] * pensionScoreWeights[dimension],
    0,
  );

  return clampScore(weightedScore / totalWeight);
}

export function buildQuestionHistory(
  questions: QuizQuestion[],
  answers: QuizAnswer[],
): QuestionHistoryItem[] {
  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer.optionId]));

  return questions.flatMap((question) => {
    const optionId = answerMap.get(question.id);
    const selectedOption = optionId ? getOption(question, optionId) : undefined;

    if (!selectedOption) {
      return [];
    }

    return {
      questionId: question.id,
      questionOrder: question.order,
      questionTitle: question.title,
      selectedOptionId: selectedOption.id,
      selectedOptionLabel: selectedOption.label,
      category: question.category,
      scores: selectedOption.scores,
    };
  });
}

export function calculateQuizResult(
  questions: QuizQuestion[],
  answers: QuizAnswer[],
): QuizResultState {
  const dimensionScores = calculateDimensionScores(questions, answers);

  return {
    dimensionScores,
    pensionScore: calculatePensionScore(dimensionScores),
    questionHistory: buildQuestionHistory(questions, answers),
  };
}

export function validateQuestions(questions: QuizQuestion[]): boolean {
  return questions.length === 12 && questions.every((question) => question.options.length === 4);
}

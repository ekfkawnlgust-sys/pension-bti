export type ScoreDimension =
  | 'consistency'
  | 'planning'
  | 'growth'
  | 'stability'
  | 'automation'
  | 'tax';

export type QuestionCategory = 'lifestyle' | 'finance';

export type QuizOption = {
  id: string;
  label: string;
  scores: Partial<Record<ScoreDimension, number>>;
};

export type QuizQuestion = {
  id: string;
  order: number;
  title: string;
  category: QuestionCategory;
  options: QuizOption[];
};

export type Character = {
  id: 'turtle' | 'lion' | 'panda' | 'squirrel' | 'owl' | 'fox' | 'dolphin' | 'penguin';
  image: string;
  emoji: string;
  name: string;
  title: string;
  mainTraits: string[];
  keywordBadges: string[];
  coreAnalysis: string;
  typeDescription: string;
  strengths: string[];
  improvementTips: string[];
  recommendedHabits: string[];
  recommendationCards: CharacterRecommendationCard[];
  pensionMessages: string[];
  recommendations: string[];
  description: string;
  primaryDimension: ScoreDimension;
  color: string;
};

export type CharacterRecommendationCard = {
  featureName: string;
  explanation: string;
  whyItMatches: string;
};

export type Recommendation = {
  id: string;
  characterId: Character['id'];
  title: string;
  description: string;
  priority: 'core' | 'supporting' | 'advanced';
};

export type Badge = {
  id: string;
  label: string;
  description: string;
};

export type ScoreBadge = Badge;

export type ScoreGrade = 'Excellent' | 'Good' | 'Developing' | 'Starter';

export type DimensionScores = Record<ScoreDimension, number>;

export type QuizAnswer = {
  questionId: QuizQuestion['id'];
  optionId: QuizOption['id'];
};

export type QuestionHistoryItem = {
  questionId: string;
  questionOrder: number;
  questionTitle: string;
  selectedOptionId: string;
  selectedOptionLabel: string;
  category: QuestionCategory;
  scores: Partial<Record<ScoreDimension, number>>;
};

export type QuizResultState = {
  dimensionScores: DimensionScores;
  pensionScore: number;
  questionHistory: QuestionHistoryItem[];
};

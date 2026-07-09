import { motion } from 'framer-motion';

import type { QuizQuestion } from '../../types';
import { Card } from '../ui/Card';

type QuestionPreviewProps = {
  question: QuizQuestion;
  current: number;
  total: number;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
};

const optionMarks = ['A', 'B', 'C', 'D'];

export function QuestionPreview({
  question,
  current,
  total,
  selectedOptionId,
  onSelect,
}: QuestionPreviewProps) {
  const categoryLabel = question.category === 'lifestyle' ? '라이프스타일' : '금융/은퇴';

  return (
    <motion.div
      key={question.id}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Card className="p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-brand-700">
              질문 {current} / {total}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-slate-950">{question.title}</h2>
          </div>
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800">
            {categoryLabel}
          </span>
        </div>
        <div className="mt-6 grid gap-3">
          {question.options.map((option, index) => {
            const isSelected = option.id === selectedOptionId;

            return (
            <button
              className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition hover:border-brand-200 hover:bg-white hover:shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-100 ${
                isSelected ? 'border-brand-300 bg-brand-50' : 'border-slate-100 bg-slate-50'
              }`}
              key={option.id}
              onClick={() => onSelect(option.id)}
              type="button"
            >
              <span
                className={`flex h-9 min-w-9 items-center justify-center rounded-full text-sm font-black ${
                  isSelected ? 'bg-brand-700 text-white' : 'bg-white text-brand-800'
                }`}
              >
                {optionMarks[index]}
              </span>
              <span className="block text-base font-bold text-slate-900">{option.label}</span>
            </button>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
}

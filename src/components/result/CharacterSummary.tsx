import { motion } from 'framer-motion';
import { useState } from 'react';

import type { Character } from '../../types';
import { Card } from '../ui/Card';

type CharacterSummaryProps = {
  character: Character;
};

export function CharacterSummary({ character }: CharacterSummaryProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden">
        <div className="h-2" style={{ backgroundColor: character.color }} />
        <div className="p-6 sm:p-8">
          {hasImageError ? (
            <motion.div
              animate={{ y: [0, -8, 0] }}
              className="mx-auto text-7xl leading-none drop-shadow-[0_18px_28px_rgba(15,35,74,0.22)] sm:text-8xl"
              transition={{ duration: 3.4, ease: 'easeInOut', repeat: Infinity }}
            >
              {character.emoji}
            </motion.div>
          ) : (
            <motion.img
              alt={character.name}
              animate={{ y: [0, -8, 0] }}
              className="mx-auto h-auto w-[180px] object-contain drop-shadow-[0_18px_28px_rgba(15,35,74,0.22)] sm:w-[260px]"
              onError={() => setHasImageError(true)}
              src={character.image}
              transition={{ duration: 3.4, ease: 'easeInOut', repeat: Infinity }}
            />
          )}
          <p className="mt-6 text-sm font-bold text-brand-700">대표 캐릭터</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">{character.name}</h2>
          <p className="mt-2 text-lg font-semibold text-slate-700">{character.title}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {character.keywordBadges.map((badge) => (
              <span
                className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-5 leading-7 text-slate-600">{character.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

import { characters } from '../data/characters';
import type { Character, DimensionScores, ScoreDimension } from '../types';

const fallbackCharacterByDimension: Record<ScoreDimension, Character['id']> = {
  consistency: 'turtle',
  planning: 'owl',
  growth: 'lion',
  stability: 'turtle',
  automation: 'panda',
  tax: 'squirrel',
};

function getCharacter(id: Character['id']): Character {
  const character = characters.find((item) => item.id === id);

  if (!character) {
    throw new Error(`Character profile not found: ${id}`);
  }

  return character;
}

function areAllDimensionsBalanced(scores: DimensionScores) {
  return Object.values(scores).every((score) => score >= 50 && score <= 78);
}

function getHighestDimension(scores: DimensionScores): ScoreDimension {
  const dimensions = Object.keys(scores) as ScoreDimension[];

  return dimensions.reduce<ScoreDimension>((current, next) => {
    return scores[next] > scores[current] ? next : current;
  }, dimensions[0]);
}

export function resolveCharacter(scores: DimensionScores): Character {
  if (scores.growth >= 85 && scores.stability <= 45) {
    return getCharacter('penguin');
  }

  if (scores.tax >= 80) {
    return getCharacter('squirrel');
  }

  if (scores.automation >= 80 && scores.consistency < 75) {
    return getCharacter('panda');
  }

  if (scores.planning >= 80 && scores.consistency >= 60) {
    return getCharacter('owl');
  }

  if (scores.consistency >= 80 && scores.stability >= 60) {
    return getCharacter('turtle');
  }

  if (scores.growth >= 80) {
    return getCharacter('lion');
  }

  if (scores.growth >= 65 && scores.automation >= 65) {
    return getCharacter('fox');
  }

  if (areAllDimensionsBalanced(scores)) {
    return getCharacter('dolphin');
  }

  const highestDimension = getHighestDimension(scores);

  return getCharacter(fallbackCharacterByDimension[highestDimension]);
}

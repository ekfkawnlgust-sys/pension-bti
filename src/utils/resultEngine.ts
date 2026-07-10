import { badges } from '../data/badges';
import type { DimensionScores, ScoreBadge, ScoreGrade } from '../types';

export function getScoreGrade(pensionScore: number): ScoreGrade {
  if (pensionScore >= 90) {
    return '완성형';
  }

  if (pensionScore >= 75) {
    return '안정형';
  }

  if (pensionScore >= 60) {
    return '성장형';
  }

  return '입문형';
}

export function resolveScoreBadges(scores: DimensionScores): ScoreBadge[] {
  const values = Object.values(scores);
  const maxScore = Math.max(...values);
  const minScore = Math.min(...values);

  const earnedBadgeIds = [
    scores.consistency >= 85 ? 'consistency-king' : null,
    scores.planning >= 85 ? 'planning-master' : null,
    scores.growth >= 85 ? 'growth-challenger' : null,
    scores.stability >= 85 ? 'stability-keeper' : null,
    scores.automation >= 85 ? 'automation-pro' : null,
    scores.tax >= 85 ? 'tax-master' : null,
    maxScore - minScore <= 18 ? 'balance-king' : null,
    scores.consistency + scores.stability >= 160 ? 'long-term-investor' : null,
  ].filter(Boolean);

  return earnedBadgeIds
    .map((badgeId) => badges.find((badge) => badge.id === badgeId))
    .filter((badge): badge is ScoreBadge => Boolean(badge))
    .slice(0, 3);
}

export function getDailyPensionMessage(messages: string[], seed: number): string {
  if (messages.length === 0) {
    return '';
  }

  const safeSeed = Number.isFinite(seed) ? seed : 0;
  const index = Math.abs(Math.floor(safeSeed)) % messages.length;

  return messages[index];
}

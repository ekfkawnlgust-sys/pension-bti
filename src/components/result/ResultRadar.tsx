import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import type { DimensionScores } from '../../types';
import { dimensionLabels, scoreDimensions } from '../../utils/scoreEngine';

type ResultRadarProps = {
  scores: DimensionScores;
};

export function ResultRadar({ scores }: ResultRadarProps) {
  const data = scoreDimensions.map((dimension) => ({
    axis: dimensionLabels[dimension],
    value: scores[dimension],
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#d8e4f0" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: '#475467', fontSize: 12, fontWeight: 700 }} />
          <Tooltip
            contentStyle={{
              border: '1px solid #d8e4f0',
              borderRadius: 16,
              boxShadow: '0 10px 30px rgba(15, 35, 74, 0.08)',
            }}
          />
          <Radar dataKey="value" fill="#005BAC" fillOpacity={0.18} stroke="#005BAC" strokeWidth={3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

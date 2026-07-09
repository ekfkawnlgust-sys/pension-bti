import type { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    order: 1,
    title: '여행을 계획할 때 나는',
    category: 'lifestyle',
    options: [
      {
        id: 'q1-a',
        label: '모든 일정을 미리 예약한다',
        scores: { planning: 4, consistency: 3, stability: 2 },
      },
      {
        id: 'q1-b',
        label: '큰 일정만 정한다',
        scores: { planning: 3, stability: 2, growth: 1 },
      },
      {
        id: 'q1-c',
        label: '즉흥적으로 움직인다',
        scores: { growth: 2 },
      },
      {
        id: 'q1-d',
        label: '친구를 따라간다',
        scores: { stability: 1 },
      },
    ],
  },
  {
    id: 'q2',
    order: 2,
    title: '체크리스트를 만들면',
    category: 'lifestyle',
    options: [
      {
        id: 'q2-a',
        label: '거의 모두 완료한다',
        scores: { consistency: 4, planning: 3 },
      },
      {
        id: 'q2-b',
        label: '절반 정도 한다',
        scores: { consistency: 2, planning: 2 },
      },
      {
        id: 'q2-c',
        label: '생각날 때만 본다',
        scores: { planning: 1 },
      },
      {
        id: 'q2-d',
        label: '거의 만들지 않는다',
        scores: { growth: 1 },
      },
    ],
  },
  {
    id: 'q3',
    order: 3,
    title: '새로운 앱이 출시되면',
    category: 'lifestyle',
    options: [
      {
        id: 'q3-a',
        label: '바로 설치한다',
        scores: { growth: 3, automation: 3 },
      },
      {
        id: 'q3-b',
        label: '후기를 먼저 본다',
        scores: { planning: 2, stability: 2 },
      },
      {
        id: 'q3-c',
        label: '필요하면 설치한다',
        scores: { stability: 2, planning: 1 },
      },
      {
        id: 'q3-d',
        label: '관심 없다',
        scores: { stability: 1 },
      },
    ],
  },
  {
    id: 'q4',
    order: 4,
    title: '쇼핑할 때',
    category: 'lifestyle',
    options: [
      {
        id: 'q4-a',
        label: '할인과 쿠폰을 끝까지 찾는다',
        scores: { tax: 3, planning: 3, consistency: 2 },
      },
      {
        id: 'q4-b',
        label: '적당히 할인받는다',
        scores: { tax: 2, planning: 2 },
      },
      {
        id: 'q4-c',
        label: '마음에 들면 산다',
        scores: { growth: 1 },
      },
      {
        id: 'q4-d',
        label: '가격보다 취향',
        scores: { growth: 2 },
      },
    ],
  },
  {
    id: 'q5',
    order: 5,
    title: '휴대폰 알림이 오면',
    category: 'lifestyle',
    options: [
      {
        id: 'q5-a',
        label: '바로 처리한다',
        scores: { consistency: 4, automation: 2, planning: 1 },
      },
      {
        id: 'q5-b',
        label: '모아서 처리한다',
        scores: { planning: 3, consistency: 2 },
      },
      {
        id: 'q5-c',
        label: '필요한 것만 확인한다',
        scores: { planning: 1, stability: 1 },
      },
      {
        id: 'q5-d',
        label: '잘 보지 않는다',
        scores: { stability: 1 },
      },
    ],
  },
  {
    id: 'q6',
    order: 6,
    title: '반복되는 일은',
    category: 'lifestyle',
    options: [
      {
        id: 'q6-a',
        label: '자동으로 처리되면 좋겠다',
        scores: { automation: 4, consistency: 3 },
      },
      {
        id: 'q6-b',
        label: '직접 하는 것이 좋다',
        scores: { stability: 3, planning: 1 },
      },
      {
        id: 'q6-c',
        label: '상황마다 다르다',
        scores: { planning: 1, growth: 1 },
      },
      {
        id: 'q6-d',
        label: '귀찮아서 미룬다',
        scores: { growth: 1 },
      },
    ],
  },
  {
    id: 'q7',
    order: 7,
    title: '매달 돈이 남으면',
    category: 'lifestyle',
    options: [
      {
        id: 'q7-a',
        label: '저축',
        scores: { stability: 4, consistency: 3 },
      },
      {
        id: 'q7-b',
        label: '투자',
        scores: { growth: 4, consistency: 2 },
      },
      {
        id: 'q7-c',
        label: '취미',
        scores: { growth: 1 },
      },
      {
        id: 'q7-d',
        label: '쇼핑',
        scores: { growth: 1 },
      },
    ],
  },
  {
    id: 'q8',
    order: 8,
    title: '새로운 기능이 생기면',
    category: 'lifestyle',
    options: [
      {
        id: 'q8-a',
        label: '바로 사용한다',
        scores: { automation: 3, growth: 3 },
      },
      {
        id: 'q8-b',
        label: '후기를 본다',
        scores: { planning: 2, stability: 2 },
      },
      {
        id: 'q8-c',
        label: '필요하면 사용한다',
        scores: { planning: 1, stability: 2 },
      },
      {
        id: 'q8-d',
        label: '기존 방식 유지',
        scores: { stability: 3 },
      },
    ],
  },
  {
    id: 'q9',
    order: 9,
    title: '매달 일정 금액을 투자하는 것에 대해',
    category: 'finance',
    options: [
      {
        id: 'q9-a',
        label: '좋다',
        scores: { consistency: 4, growth: 3, planning: 2 },
      },
      {
        id: 'q9-b',
        label: '필요하면 한다',
        scores: { planning: 2, stability: 2 },
      },
      {
        id: 'q9-c',
        label: '상황을 보고 한다',
        scores: { stability: 2, planning: 1 },
      },
      {
        id: 'q9-d',
        label: '선호하지 않는다',
        scores: { stability: 3 },
      },
    ],
  },
  {
    id: 'q10',
    order: 10,
    title: '투자 상품이 하락하면',
    category: 'finance',
    options: [
      {
        id: 'q10-a',
        label: '추가 투자',
        scores: { growth: 4, consistency: 2 },
      },
      {
        id: 'q10-b',
        label: '기다린다',
        scores: { stability: 4, consistency: 3 },
      },
      {
        id: 'q10-c',
        label: '일부 정리',
        scores: { stability: 2, planning: 1 },
      },
      {
        id: 'q10-d',
        label: '전부 정리',
        scores: { stability: 1 },
      },
    ],
  },
  {
    id: 'q11',
    order: 11,
    title: '절세 혜택이 있다면',
    category: 'finance',
    options: [
      {
        id: 'q11-a',
        label: '반드시 활용한다',
        scores: { tax: 4, planning: 3, consistency: 2 },
      },
      {
        id: 'q11-b',
        label: '관심 있다',
        scores: { tax: 3, planning: 2 },
      },
      {
        id: 'q11-c',
        label: '상황에 따라',
        scores: { tax: 1, stability: 1 },
      },
      {
        id: 'q11-d',
        label: '잘 모르겠다',
        scores: { stability: 1 },
      },
    ],
  },
  {
    id: 'q12',
    order: 12,
    title: 'AI가 투자 관리를 도와준다면',
    category: 'finance',
    options: [
      {
        id: 'q12-a',
        label: '사용해보고 싶다',
        scores: { automation: 4, growth: 2 },
      },
      {
        id: 'q12-b',
        label: '조건을 보고 결정',
        scores: { planning: 2, stability: 2 },
      },
      {
        id: 'q12-c',
        label: '직접 관리하고 싶다',
        scores: { stability: 3, planning: 1 },
      },
      {
        id: 'q12-d',
        label: '아직 불안하다',
        scores: { stability: 3 },
      },
    ],
  },
];

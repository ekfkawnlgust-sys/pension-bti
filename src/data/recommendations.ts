import type { Recommendation } from '../types';

export const recommendations: Recommendation[] = [
  {
    id: 'rec-1',
    characterId: 'turtle',
    title: '자동 납입 루틴을 고정하세요',
    description: '꾸준함이 강점인 만큼 월 납입일과 금액을 먼저 고정하면 장기 유지력이 높아집니다.',
    priority: 'core',
  },
  {
    id: 'rec-2',
    characterId: 'owl',
    title: '연 2회 점검 일정을 예약하세요',
    description: '납입 한도, 수익률, 위험도를 정해진 날짜에 확인하면 계획형 강점을 결과로 연결할 수 있습니다.',
    priority: 'core',
  },
  {
    id: 'rec-3',
    characterId: 'lion',
    title: '장기 투자 비중을 별도로 관리하세요',
    description: '은퇴까지 남은 기간을 기준으로 성장 자산과 안정 자산의 비중을 분리해 점검합니다.',
    priority: 'core',
  },
  {
    id: 'rec-4',
    characterId: 'dolphin',
    title: '변동성 한도를 먼저 정하세요',
    description: '감내 가능한 하락 폭을 정해두면 시장 변동에도 연금 계획을 오래 유지하기 쉽습니다.',
    priority: 'core',
  },
  {
    id: 'rec-5',
    characterId: 'panda',
    title: '알림과 자동화 기능을 연결하세요',
    description: '자동 납입, 리밸런싱 알림, 한도 점검 알림을 활용하면 관리 부담을 줄일 수 있습니다.',
    priority: 'core',
  },
  {
    id: 'rec-6',
    characterId: 'squirrel',
    title: '세액공제 한도를 기준으로 납입하세요',
    description: '연말정산 전에 납입액과 공제 가능 금액을 확인해 절세 효율을 높입니다.',
    priority: 'core',
  },
];

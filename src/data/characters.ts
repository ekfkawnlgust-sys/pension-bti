import turtleImage from '../assets/characters/turtle.png';
import lionImage from '../assets/characters/lion.png';
import pandaImage from '../assets/characters/panda.png';
import squirrelImage from '../assets/characters/squirrel.png';
import owlImage from '../assets/characters/owl.png';
import foxImage from '../assets/characters/fox.png';
import dolphinImage from '../assets/characters/dolphin.png';
import penguinImage from '../assets/characters/penguin.png';
import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 'turtle',
    image: turtleImage,
    emoji: '🐢',
    name: '꾸준한 거북이',
    title: '연금 정원사',
    mainTraits: ['꾸준함', '장기투자', '안정'],
    recommendations: ['자동적립식 ETF', '투자상품 사전설정'],
    keywordBadges: ['루틴형', '장기형', '안정형'],
    coreAnalysis: '꾸준한 실행력과 안정 지향이 강해 연금처럼 오래 관리해야 하는 자산에 잘 맞는 성향입니다.',
    typeDescription:
      '짧은 변동보다 긴 시간을 믿고, 한 번 정한 계획을 차분히 이어가는 타입입니다. 큰 수익을 급하게 좇기보다 납입 루틴과 원칙을 지키는 데서 힘이 납니다.',
    strengths: [
      '매달 일정한 금액을 유지하는 데 강합니다.',
      '시장 변동에도 계획을 쉽게 흔들지 않습니다.',
      '장기 목표를 현실적인 속도로 쌓아갈 수 있습니다.',
    ],
    improvementTips: [
      '너무 보수적으로만 머물지 않도록 성장 자산 비중을 정기적으로 점검해 보세요.',
      '연 1~2회는 상품 성과와 수수료를 확인해 루틴의 질을 높이는 것이 좋습니다.',
    ],
    recommendedHabits: [
      '월급일 다음 날 자동 납입을 설정하기',
      '분기마다 연금 계좌 수익률 확인하기',
      '시장 하락기에는 납입 유지 여부부터 점검하기',
    ],
    recommendationCards: [
      {
        featureName: '자동적립식 ETF',
        explanation: '정해진 주기에 ETF를 자동으로 매수해 장기 적립을 이어갈 수 있는 방식입니다.',
        whyItMatches: '꾸준히 쌓는 힘이 강한 성향이라 자동 적립과 장기 분산 투자의 조합이 잘 맞습니다.',
      },
      {
        featureName: '투자상품 사전설정',
        explanation: '미리 정한 기준에 따라 투자 상품과 비중을 설정해 두고 반복 관리를 줄입니다.',
        whyItMatches: '안정적인 원칙을 선호하므로 사전 설정으로 감정적 결정을 줄일 수 있습니다.',
      },
    ],
    pensionMessages: [
      '연금은 빠른 속도보다 멈추지 않는 방향이 더 중요합니다.',
      '오늘의 작은 적립이 미래의 선택지를 넓힙니다.',
      '꾸준함은 장기 투자에서 가장 조용하지만 강한 전략입니다.',
      '흔들리는 날에도 루틴을 지키면 결과는 천천히 단단해집니다.',
      '연금 정원은 매일 조금씩 돌볼 때 가장 잘 자랍니다.',
    ],
    description: '꾸준한 납입과 안정적인 관리로 장기 연금 자산을 차분히 키우는 성향입니다.',
    primaryDimension: 'consistency',
    color: '#005BAC',
  },
  {
    id: 'lion',
    image: lionImage,
    emoji: '🦁',
    name: '성장 사자',
    title: '성장 탐험가',
    mainTraits: ['성장지향', '추진력', '도전'],
    recommendations: ['자동적립식 ETF', '로보어드바이저'],
    keywordBadges: ['성장형', '추진형', '도전형'],
    coreAnalysis: '미래 수익 기회를 적극적으로 탐색하고 실행하는 힘이 강한 연금 성장형 성향입니다.',
    typeDescription:
      '장기 투자에서 성장 가능성을 중요하게 보고 새로운 선택지도 빠르게 검토합니다. 다만 추진력이 강한 만큼 변동성을 관리하는 장치가 함께 필요합니다.',
    strengths: [
      '장기 수익 기회를 빠르게 포착합니다.',
      '투자를 미루지 않고 실행하는 힘이 있습니다.',
      '새로운 상품과 전략을 학습하는 속도가 빠릅니다.',
    ],
    improvementTips: [
      '하락장에서 충동적으로 비중을 늘리지 않도록 사전 기준을 정해두세요.',
      '성장 자산과 안정 자산의 비중을 함께 관리하면 지속 가능성이 높아집니다.',
    ],
    recommendedHabits: [
      '투자 전 기대수익과 최대 하락 가능성 함께 적기',
      '월 1회 포트폴리오 비중 확인하기',
      '새 상품은 소액으로 먼저 테스트하기',
    ],
    recommendationCards: [
      {
        featureName: '자동적립식 ETF',
        explanation: '장기적으로 다양한 자산에 나누어 투자하며 적립 효과를 기대할 수 있습니다.',
        whyItMatches: '성장 기회를 추구하면서도 매수 시점을 분산해 변동성을 낮추는 데 도움이 됩니다.',
      },
      {
        featureName: '로보어드바이저',
        explanation: '투자 성향과 시장 상황을 바탕으로 포트폴리오 관리를 자동화하는 기능입니다.',
        whyItMatches: '적극적인 투자 성향에 리스크 관리와 리밸런싱 규칙을 더해줍니다.',
      },
    ],
    pensionMessages: [
      '성장은 용기에서 시작하지만, 오래 가는 성장은 규칙에서 완성됩니다.',
      '좋은 기회일수록 기준을 세우고 들어가면 더 단단해집니다.',
      '연금 투자에서 시간은 가장 강한 성장 동료입니다.',
      '도전은 좋고, 기록은 그 도전을 더 똑똑하게 만듭니다.',
      '오늘의 실행력이 미래 자산의 출발점입니다.',
    ],
    description: '성장 기회와 장기 수익 가능성에 민감하게 반응하는 적극적인 연금 투자 성향입니다.',
    primaryDimension: 'growth',
    color: '#0E9F6E',
  },
  {
    id: 'panda',
    image: pandaImage,
    emoji: '🐼',
    name: '느긋한 판다',
    title: '자동화 마법사',
    mainTraits: ['편리함', '자동화', '여유'],
    recommendations: ['디폴트옵션', '로보어드바이저'],
    keywordBadges: ['편리형', '자동형', '여유형'],
    coreAnalysis: '복잡한 관리를 직접 붙잡기보다 좋은 시스템을 세팅해 편하게 유지할 때 성과가 좋아지는 성향입니다.',
    typeDescription:
      '반복 관리를 줄이고 자동화된 흐름 안에서 연금 자산을 관리하는 방식이 잘 맞습니다. 처음 설정만 제대로 해두면 부담 없이 오래 이어갈 수 있습니다.',
    strengths: [
      '자동 납입과 자동 관리 기능을 받아들이기 쉽습니다.',
      '복잡한 의사결정을 줄여 스트레스를 낮출 수 있습니다.',
      '관리 부담이 낮을수록 장기 유지력이 좋아집니다.',
    ],
    improvementTips: [
      '자동화에 맡기더라도 최소 분기 1회는 설정 상태를 확인하세요.',
      '처음 설정한 상품이 계속 적합한지 은퇴 시점 변화에 맞춰 점검해야 합니다.',
    ],
    recommendedHabits: [
      '자동 납입과 리포트 알림 켜두기',
      '분기별로 디폴트옵션 상태 확인하기',
      '관리 화면에서 변경 내역만 간단히 기록하기',
    ],
    recommendationCards: [
      {
        featureName: '디폴트옵션',
        explanation: '사전에 정한 운용 방법에 따라 퇴직연금 적립금이 관리되도록 돕는 제도입니다.',
        whyItMatches: '편리함과 자동화를 선호하는 성향이라 방치 위험을 줄이는 데 잘 맞습니다.',
      },
      {
        featureName: '로보어드바이저',
        explanation: '투자 성향에 맞춰 포트폴리오 제안과 관리를 자동화할 수 있습니다.',
        whyItMatches: '직접 관리 부담은 줄이고, 필요한 투자 판단은 시스템의 도움을 받을 수 있습니다.',
      },
    ],
    pensionMessages: [
      '좋은 자동화는 미래의 나에게 보내는 친절한 선물입니다.',
      '연금 관리는 매일 붙잡지 않아도, 잘 세팅하면 계속 움직입니다.',
      '편한 관리가 오래 가는 관리입니다.',
      '자동화는 게으름이 아니라 지속성을 설계하는 방법입니다.',
      '오늘의 설정 하나가 내일의 고민을 줄입니다.',
    ],
    description: '자동화와 편의 기능을 활용해 연금 관리를 부담 없이 이어가는 성향입니다.',
    primaryDimension: 'automation',
    color: '#0891B2',
  },
  {
    id: 'squirrel',
    image: squirrelImage,
    emoji: '🐿️',
    name: '절세 다람쥐',
    title: '절세 수집가',
    mainTraits: ['절세', '효율', '꼼꼼함'],
    recommendations: ['ISA', '연금저축'],
    keywordBadges: ['절세형', '효율형', '꼼꼼형'],
    coreAnalysis: '혜택과 한도를 꼼꼼히 확인하며 세후 수익률을 높이는 데 강점이 있는 성향입니다.',
    typeDescription:
      '작은 혜택도 놓치지 않고 모아 실질적인 성과로 만드는 타입입니다. 연금저축, ISA처럼 세제 혜택 구조가 있는 계좌를 잘 활용할수록 강점이 살아납니다.',
    strengths: [
      '세액공제와 한도 관리를 꼼꼼히 챙깁니다.',
      '같은 수익률에서도 세후 효율을 높이는 선택에 강합니다.',
      '연말정산과 납입 전략을 연결해 생각할 수 있습니다.',
    ],
    improvementTips: [
      '절세만 보고 상품을 고르기보다 투자 기간과 위험도도 함께 확인하세요.',
      '계좌별 납입 한도와 중도 인출 조건을 정기적으로 업데이트해 두면 좋습니다.',
    ],
    recommendedHabits: [
      '연말 전 세액공제 납입액 확인하기',
      'ISA와 연금저축의 목적 구분하기',
      '세제 혜택 변경 사항을 반기마다 확인하기',
    ],
    recommendationCards: [
      {
        featureName: 'ISA',
        explanation: '다양한 금융상품을 한 계좌에서 운용하며 일정 요건에 따라 세제 혜택을 기대할 수 있습니다.',
        whyItMatches: '세후 효율을 중시하는 성향이라 절세 계좌 활용의 효과를 체감하기 좋습니다.',
      },
      {
        featureName: '연금저축',
        explanation: '노후 준비와 세액공제 혜택을 함께 고려할 수 있는 대표적인 개인연금 계좌입니다.',
        whyItMatches: '납입 한도와 공제 효과를 꼼꼼히 챙기는 강점이 직접적으로 연결됩니다.',
      },
    ],
    pensionMessages: [
      '절세는 수익률을 조용히 밀어 올리는 또 하나의 전략입니다.',
      '놓치지 않은 한도가 미래의 여유가 됩니다.',
      '세후 수익률까지 보는 사람이 진짜 효율을 압니다.',
      '작은 혜택도 오래 모이면 큰 차이가 됩니다.',
      '오늘 확인한 한도가 연말의 아쉬움을 줄입니다.',
    ],
    description: '세제 혜택과 납입 한도를 전략적으로 활용해 연금 효율을 높이는 성향입니다.',
    primaryDimension: 'tax',
    color: '#7C3AED',
  },
  {
    id: 'owl',
    image: owlImage,
    emoji: '🦉',
    name: '계획 부엉이',
    title: '계획 설계사',
    mainTraits: ['계획성', '분석', '원칙'],
    recommendations: ['투자상품 사전설정', '디폴트옵션'],
    keywordBadges: ['분석형', '원칙형', '설계형'],
    coreAnalysis: '목표, 기준, 점검 주기를 세우고 그 안에서 연금 관리를 체계화하는 데 강점이 있습니다.',
    typeDescription:
      '선택 전에 정보를 확인하고 기준을 세우는 타입입니다. 장기 연금 관리에서 계획형 성향은 납입, 상품, 리밸런싱을 흔들림 없이 이어가게 해줍니다.',
    strengths: [
      '목표를 숫자와 일정으로 구체화하는 데 강합니다.',
      '상품 선택 전에 조건을 비교하고 분석합니다.',
      '원칙을 세우면 꾸준히 지키는 힘이 있습니다.',
    ],
    improvementTips: [
      '분석이 길어져 실행이 늦어지지 않도록 결정 기한을 정해보세요.',
      '시장 환경이 바뀔 때는 기존 원칙도 업데이트할 수 있어야 합니다.',
    ],
    recommendedHabits: [
      '연금 목표 금액과 은퇴 시점 적어두기',
      '반기마다 상품 비중 점검하기',
      '투자 기준표를 만들어 변경 이유 기록하기',
    ],
    recommendationCards: [
      {
        featureName: '투자상품 사전설정',
        explanation: '선호 상품과 운용 기준을 미리 정해 반복적인 선택 부담을 줄입니다.',
        whyItMatches: '계획과 원칙이 강한 성향이라 사전 기준을 세웠을 때 관리 품질이 높아집니다.',
      },
      {
        featureName: '디폴트옵션',
        explanation: '퇴직연금 운용이 멈추지 않도록 사전에 정한 방식으로 관리되게 돕습니다.',
        whyItMatches: '분석 후 정한 원칙을 시스템화해 장기적으로 유지하기 좋습니다.',
      },
    ],
    pensionMessages: [
      '좋은 계획은 미래의 불안을 오늘의 행동으로 바꿉니다.',
      '기준이 있는 투자는 흔들려도 길을 잃지 않습니다.',
      '연금 설계는 한 번의 선택보다 반복 점검에서 완성됩니다.',
      '숫자로 적은 목표는 실행 가능한 약속이 됩니다.',
      '오늘 세운 원칙이 내일의 결정을 가볍게 합니다.',
    ],
    description: '계획과 분석을 바탕으로 연금 전략을 설계하고 관리하는 성향입니다.',
    primaryDimension: 'planning',
    color: '#1D4ED8',
  },
  {
    id: 'fox',
    image: foxImage,
    emoji: '🦊',
    name: '호기심 여우',
    title: '기회 탐험가',
    mainTraits: ['탐색', '학습', '새로운 시도'],
    recommendations: ['로보어드바이저', 'ISA'],
    keywordBadges: ['탐색형', '학습형', '실험형'],
    coreAnalysis: '새로운 금융 기능과 투자 기회를 살피며 자신에게 맞는 방식을 찾아가는 학습형 성향입니다.',
    typeDescription:
      '한 가지 방식에만 머물기보다 여러 선택지를 비교하고 직접 경험하며 배웁니다. 호기심이 강점이지만 연금에서는 실험의 범위를 정해두는 것이 중요합니다.',
    strengths: [
      '새로운 기능과 상품을 빠르게 학습합니다.',
      '여러 대안을 비교하며 자신에게 맞는 방식을 찾습니다.',
      '자동화와 성장 전략을 함께 활용할 수 있습니다.',
    ],
    improvementTips: [
      '새로운 시도는 전체 연금 자산의 일부 비중 안에서 먼저 테스트하세요.',
      '자주 바꾸기보다 실험 기간을 정해 결과를 확인하는 습관이 필요합니다.',
    ],
    recommendedHabits: [
      '새 기능은 목적과 기대 효과를 적고 사용하기',
      '소액 테스트 후 3개월 단위로 평가하기',
      '관심 상품을 ISA와 연금 목적에 맞게 구분하기',
    ],
    recommendationCards: [
      {
        featureName: '로보어드바이저',
        explanation: '포트폴리오 제안과 자동 관리를 통해 새로운 투자 방식을 경험할 수 있습니다.',
        whyItMatches: '학습과 탐색을 좋아하는 성향에 데이터 기반 관리 경험을 더해줍니다.',
      },
      {
        featureName: 'ISA',
        explanation: '다양한 상품을 한 계좌에서 운용하며 투자 경험과 절세 효과를 함께 고려할 수 있습니다.',
        whyItMatches: '여러 상품을 탐색하면서도 계좌 목적을 분명히 가져가기 좋습니다.',
      },
    ],
    pensionMessages: [
      '호기심은 좋은 출발점이고, 기록은 좋은 나침반입니다.',
      '새로운 시도는 작게 시작할수록 오래 배울 수 있습니다.',
      '기회를 찾는 눈에 기준을 더하면 연금 전략이 선명해집니다.',
      '배우는 투자자는 시간이 지날수록 더 좋은 질문을 합니다.',
      '오늘의 작은 실험이 내일의 확신이 될 수 있습니다.',
    ],
    description: '새로운 기능과 투자 기회를 배우며 자신만의 연금 전략을 찾아가는 성향입니다.',
    primaryDimension: 'growth',
    color: '#EA580C',
  },
  {
    id: 'dolphin',
    image: dolphinImage,
    emoji: '🐬',
    name: '균형 돌고래',
    title: '균형 조율사',
    mainTraits: ['균형', '분산', '유연함'],
    recommendations: ['자동적립식 ETF', '로보어드바이저'],
    keywordBadges: ['균형형', '분산형', '유연형'],
    coreAnalysis: '특정 성향에 치우치지 않고 성장, 안정, 계획, 자동화를 고르게 활용할 수 있는 균형형입니다.',
    typeDescription:
      '상황에 따라 유연하게 판단하면서도 전체 균형을 크게 잃지 않는 타입입니다. 연금 관리에서는 분산 투자와 정기 점검을 함께 가져가면 강점이 살아납니다.',
    strengths: [
      '한쪽으로 과도하게 치우치지 않는 균형 감각이 있습니다.',
      '성장과 안정 사이에서 현실적인 선택을 할 수 있습니다.',
      '상황 변화에 맞춰 전략을 조정하는 유연함이 있습니다.',
    ],
    improvementTips: [
      '균형을 유지하려면 목표 비중을 숫자로 정해두는 것이 좋습니다.',
      '유연함이 잦은 변경으로 이어지지 않도록 점검 주기를 고정하세요.',
    ],
    recommendedHabits: [
      '자산 비중 목표를 정하고 분기마다 비교하기',
      '자동 적립과 리밸런싱 알림 함께 사용하기',
      '성장, 안정, 절세 항목을 한 화면에서 점검하기',
    ],
    recommendationCards: [
      {
        featureName: '자동적립식 ETF',
        explanation: '정해진 주기로 분산 투자하며 장기 적립 습관을 만들 수 있습니다.',
        whyItMatches: '균형과 분산을 중시하는 성향에 장기 적립 구조가 잘 어울립니다.',
      },
      {
        featureName: '로보어드바이저',
        explanation: '시장 상황과 성향에 맞춰 포트폴리오 조정을 도울 수 있습니다.',
        whyItMatches: '균형 유지를 자동화해 과도한 쏠림을 줄이는 데 도움이 됩니다.',
      },
    ],
    pensionMessages: [
      '균형은 흔들리지 않는 것이 아니라 다시 맞추는 힘입니다.',
      '분산은 미래의 불확실성을 부드럽게 만드는 방법입니다.',
      '좋은 연금 관리는 성장과 안정의 대화를 계속 이어갑니다.',
      '유연한 사람은 변화 속에서도 방향을 잃지 않습니다.',
      '오늘의 균형 점검이 내일의 편안함을 만듭니다.',
    ],
    description: '여러 성향을 고르게 활용해 연금 전략의 균형을 맞추는 성향입니다.',
    primaryDimension: 'stability',
    color: '#0284C7',
  },
  {
    id: 'penguin',
    image: penguinImage,
    emoji: '🐧',
    name: '미래 펭귄',
    title: '미래 개척가',
    mainTraits: ['실행력', '기회포착', '변화대응'],
    recommendations: ['자동적립식 ETF', '투자상품 사전설정'],
    keywordBadges: ['실행형', '미래형', '기회형'],
    coreAnalysis: '성장 점수가 매우 높고 안정 점수가 낮아 미래 기회를 빠르게 향해 움직이는 개척형 성향입니다.',
    typeDescription:
      '새로운 기회를 발견하면 빠르게 실행하는 힘이 큽니다. 연금에서는 이 실행력을 장기 전략 안에 묶어두면 성장성과 지속성을 함께 가져갈 수 있습니다.',
    strengths: [
      '미래 변화와 투자 기회에 민감하게 반응합니다.',
      '좋다고 판단한 일은 빠르게 실행합니다.',
      '장기 성장 가능성에 대한 관심이 높습니다.',
    ],
    improvementTips: [
      '안정 점수가 낮을 수 있으므로 손실 한도와 비상 계획을 먼저 정하세요.',
      '기회 포착 후에도 전체 연금 목적과 맞는지 한 번 더 확인하는 단계가 필요합니다.',
    ],
    recommendedHabits: [
      '투자 전 손실 허용 범위 적기',
      '성장 상품은 목표 비중 안에서만 늘리기',
      '새로운 기회는 사전 설정한 기준표로 검토하기',
    ],
    recommendationCards: [
      {
        featureName: '자동적립식 ETF',
        explanation: '장기 성장 자산에 분산 적립하며 매수 시점을 나누는 방식입니다.',
        whyItMatches: '성장 기회를 추구하면서도 자동 적립으로 실행을 꾸준한 전략에 연결할 수 있습니다.',
      },
      {
        featureName: '투자상품 사전설정',
        explanation: '투자 기준과 상품 구성을 미리 정해 빠른 의사결정의 흔들림을 줄입니다.',
        whyItMatches: '기회 포착력이 강한 만큼 사전 기준이 과도한 변동성을 잡아줍니다.',
      },
    ],
    pensionMessages: [
      '미래를 향한 실행력에 기준을 더하면 더 멀리 갈 수 있습니다.',
      '기회는 빠르게 오지만 연금은 오래 가야 합니다.',
      '오늘의 도전이 장기 계획 안에 있을 때 가장 강해집니다.',
      '변화를 읽는 눈은 미래 자산의 중요한 감각입니다.',
      '빠른 실행 뒤에는 차분한 점검이 필요합니다.',
    ],
    description: '미래 성장 기회를 빠르게 포착하고 실행하는 적극적인 연금 개척형 성향입니다.',
    primaryDimension: 'growth',
    color: '#0F766E',
  },
];

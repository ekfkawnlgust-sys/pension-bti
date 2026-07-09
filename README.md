# 연금BTI

## Purpose

연금BTI는 일상 행동과 금융 성향 질문을 통해 사용자의 장기 자산관리 스타일을 분석하고, 연금 관리 성숙도와 캐릭터 결과를 시각적으로 보여주는 프론트엔드 웹앱입니다.

## Features

- 12문항 연금 성향 테스트
- 6개 성향 점수 계산: 꾸준함, 계획성, 성장성, 안정성, 자동화, 절세
- 가중치 기반 연금 관리 성숙도 계산
- 8개 캐릭터 결과 시스템
- 점수 등급, 레이더 차트, 획득 배지 표시
- 캐릭터별 강점, 개선 팁, 추천 습관 제공
- 한국투자증권 기능 추천 카드 제공
- 결과 이미지 저장 기능
- 카카오톡 공유 안전 placeholder 및 클립보드 fallback

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- React Router
- Recharts
- Framer Motion
- html2canvas

## How to Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Submission Summary

이 프로젝트는 백엔드와 외부 API 없이 프론트엔드만으로 동작합니다. 사용자가 테스트를 완료하면 React Router state로 결과 데이터를 전달하고, 실제 점수에 따라 캐릭터, 배지, 추천 기능, 레이더 차트, 공유 문구를 생성합니다. 결과 페이지에서는 메인 결과 카드만 `pension-bti-result.png` 파일로 저장할 수 있으며, 카카오 SDK가 준비되지 않은 환경에서는 공유 문구를 클립보드에 복사합니다.

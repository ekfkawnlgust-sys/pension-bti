import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7ff',
          100: '#d7ecff',
          200: '#b8ddff',
          300: '#88c8ff',
          400: '#52a7f7',
          500: '#2b86df',
          600: '#1269bd',
          700: '#005BAC',
          800: '#08467e',
          900: '#0c3b68',
          950: '#082541',
        },
        ink: '#111827',
        muted: '#667085',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 35, 74, 0.10)',
        card: '0 10px 30px rgba(15, 35, 74, 0.08)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

import { lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './components/layout/AppLayout';
import { RouteFallback } from './components/shared/RouteFallback';
import { NotFound } from './pages/NotFound';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Quiz = lazy(() => import('./pages/Quiz').then((module) => ({ default: module.Quiz })));
const Result = lazy(() => import('./pages/Result').then((module) => ({ default: module.Result })));

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: 'quiz',
        element: withSuspense(<Quiz />),
      },
      {
        path: 'result',
        element: withSuspense(<Result />),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

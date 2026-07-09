import { Outlet, useLocation } from 'react-router-dom';

import { ButtonLink } from '../ui/Button';

const navItems = [
  { label: '홈', to: '/' },
  { label: '진단', to: '/quiz' },
  { label: '결과', to: '/result' },
];

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#edf7ff_0,#f6f9fc_34%,#ffffff_100%)]">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <ButtonLink className="px-0 text-lg font-black text-brand-700 shadow-none" to="/" variant="ghost">
            연금BTI
          </ButtonLink>
          <nav aria-label="주요 메뉴" className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <ButtonLink
                  className={`min-h-9 rounded-full px-4 py-1.5 text-sm shadow-none ${
                    isActive ? 'bg-white text-brand-800' : 'bg-transparent text-slate-500'
                  }`}
                  key={item.to}
                  to={item.to}
                  variant="ghost"
                >
                  {item.label}
                </ButtonLink>
              );
            })}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = '' }: PageShellProps) {
  return <section className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 ${className}`}>{children}</section>;
}

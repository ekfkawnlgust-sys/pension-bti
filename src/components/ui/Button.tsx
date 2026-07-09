import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-700 text-white shadow-card hover:bg-brand-800 focus-visible:ring-brand-300',
  secondary:
    'border border-brand-100 bg-white text-brand-800 shadow-card hover:border-brand-200 hover:bg-brand-50 focus-visible:ring-brand-200',
  ghost: 'text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-200',
};

const baseClasses =
  'inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50';

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, to, variant = 'primary', className = '' }: ButtonLinkProps) {
  return (
    <Link className={`${baseClasses} ${variantClasses[variant]} ${className}`} to={to}>
      {children}
    </Link>
  );
}

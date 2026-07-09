type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

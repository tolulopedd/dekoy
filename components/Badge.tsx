import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'outline';
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const classes =
    variant === 'default'
      ? 'bg-gradient-to-r from-gold/20 to-silver/35 text-accent border-gold/30'
      : 'bg-transparent text-slate border-slate/30';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${classes}`}
    >
      {children}
    </span>
  );
}

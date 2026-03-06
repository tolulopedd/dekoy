import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className
  };

  switch (name) {
    case 'building':
      return (
        <svg {...commonProps} {...props}>
          <path d="M4 20h16" />
          <path d="M7 20V6l5-3 5 3v14" />
          <path d="M10 10h.01" />
          <path d="M14 10h.01" />
          <path d="M10 14h.01" />
          <path d="M14 14h.01" />
        </svg>
      );
    case 'wrench':
      return (
        <svg {...commonProps} {...props}>
          <path d="M14 7a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 0-2-7l-2 2" />
        </svg>
      );
    case 'signal':
      return (
        <svg {...commonProps} {...props}>
          <path d="M4 18h.01" />
          <path d="M8 14h.01" />
          <path d="M12 10h.01" />
          <path d="M16 6h.01" />
          <path d="M20 2h.01" />
          <path d="M4 20v-2" />
          <path d="M8 20v-6" />
          <path d="M12 20v-10" />
          <path d="M16 20V6" />
          <path d="M20 20V2" />
        </svg>
      );
    case 'key':
      return (
        <svg {...commonProps} {...props}>
          <circle cx="8" cy="12" r="3" />
          <path d="M11 12h9" />
          <path d="M17 12v3" />
          <path d="M20 12v2" />
        </svg>
      );
    case 'chip':
      return (
        <svg {...commonProps} {...props}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M1 9h3" />
          <path d="M1 15h3" />
          <path d="M20 9h3" />
          <path d="M20 15h3" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg {...commonProps} {...props}>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 4.5h6v3H9z" />
          <path d="M9 11h6" />
          <path d="M9 15h6" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...commonProps} {...props}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...commonProps} {...props}>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case 'check':
      return (
        <svg {...commonProps} {...props}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      );
    default:
      return null;
  }
}

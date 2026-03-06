import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#031839',
        navyDeep: '#00122C',
        slate: '#4A5A74',
        mist: '#F5F7FB',
        accent: '#8A6418',
        accentDark: '#6C4D12',
        gold: '#D4B15A',
        silver: '#C7CED8'
      },
      boxShadow: {
        soft: '0 14px 32px -20px rgba(3, 24, 57, 0.38)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 12% 18%, rgba(212, 177, 90, 0.2), transparent 42%), radial-gradient(circle at 84% 0%, rgba(199, 206, 216, 0.24), transparent 35%), linear-gradient(135deg, rgba(0, 18, 44, 0.06), rgba(138, 100, 24, 0.08))'
      }
    }
  },
  plugins: []
};

export default config;

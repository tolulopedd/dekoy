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
        ink: '#002B5C',
        navyDeep: '#001B3D',
        slate: '#002B5C',
        mist: '#F2F4F6',
        accent: '#F05A00',
        accentDark: '#001B3D',
        gold: '#F05A00',
        silver: '#F2F4F6'
      },
      boxShadow: {
        soft: '0 14px 32px -20px rgba(0, 27, 61, 0.28)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 12% 18%, rgba(240, 90, 0, 0.14), transparent 42%), radial-gradient(circle at 84% 0%, rgba(242, 244, 246, 0.92), transparent 35%), linear-gradient(135deg, rgba(0, 27, 61, 0.08), rgba(240, 90, 0, 0.05))'
      }
    }
  },
  plugins: []
};

export default config;

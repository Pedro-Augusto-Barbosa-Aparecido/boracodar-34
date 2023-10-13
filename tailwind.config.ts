import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        product: {
          'purple-light': '#A881E6',
          purple: '#7450AC',
          'purple-dark': '#523480',
        },
        base: {
          gray: {
            100: '#FBF9FE',
            200: '#AFABB6',
            300: '#252529',
            400: '#17171A',
            500: '#111112',
            600: '#0C0C0D',
          },
        },
        feedback: {
          'success-light': '#4E995E',
          success: '#2F723D',
        },
        auxiliary: {
          pink: '#DB5BBF',
          orange: '#E07B67',
          yellow: '#BB9F3A',
          green: '#8CAD51',
          blue: '#7B94CB',
          'pink-dark': '#251622',
          'orange-dark': '#261A17',
          'yellow-dark': '#211E12',
          'green-dark': '#1C2015',
          'blue-dark': '#1A1D23',
        },
      },
      fontSize: {
        title: '1.5rem',
        subtitle: '0.875rem',
        button: '0.875rem',
        tag: '0.75rem',
        body: '0.75rem',
        select: '0.625rem',
      },
      letterSpacing: {
        tag: '0.36px',
        input: '0.42px',
        'select-option': '0.3px',
      },
      lineHeight: {
        title: '100%',
        subtitle: '130%',
        button: '130%',
        tag: '130%',
        body: '130%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

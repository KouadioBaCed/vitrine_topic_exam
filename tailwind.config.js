/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3FA055',
          50: '#EAF6EC',
          100: '#D2EDD7',
          200: '#A6DBAF',
          300: '#7AC988',
          400: '#5DBA6E',
          500: '#3FA055',
          600: '#2F7B40',
          700: '#235D30',
          800: '#173F20',
          900: '#0B2110',
        },
        // Override Tailwind's default `blue` palette so existing
        // `bg-blue-*`, `text-blue-*` classes inherit the FinMark greens.
        blue: {
          50: '#EAF6EC',
          100: '#D2EDD7',
          200: '#A6DBAF',
          300: '#7AC988',
          400: '#5DBA6E',
          500: '#3FA055',
          600: '#3FA055',
          700: '#2F7B40',
          800: '#235D30',
          900: '#173F20',
        },
        // Light/mid green accent (used wherever cyan was used).
        cyan: {
          50: '#F2FBE6',
          100: '#E5F6CC',
          200: '#CFEC9C',
          300: '#B6E16C',
          400: '#8CC63F',
          500: '#6DBE45',
          600: '#5BA53A',
          700: '#447D2B',
        },
        // Highlight / CTA — replaces orange usage.
        orange: {
          50: '#FAFCE8',
          100: '#F4F8C9',
          200: '#E8F08F',
          300: '#D6E55E',
          400: '#C9DD55',
          500: '#B7D334',
          600: '#9FB82E',
          700: '#7E9525',
        },
        highlight: '#B7D334',
        accent: '#8CC63F',
      },
    },
  },
  plugins: [],
};

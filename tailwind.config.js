/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        '01': '#E2D4F0',
        '02': '#D0B7E6',
        '03': '#A06ECE',
        '04': '#7126B5',
        '05': '#4B1979',
      },
      primary2: {
        '01': '#FFF8ED',
        '02': '#FFF0DC',
        '03': '#FFE9CA',
        '04': '#D4C2A8',
        '05': '#AA9B87',
      },
      neutral: {
        '01': '#FFFFFF',
        '02': '#D0D0D0',
        '03': '#8A8A8A',
        '04': '#3C3C3C',
        '05': '#151515',
      },
      alert: {
        danger: '#FA2C5A',
        warning: '#F9CC00',
        success: '#73CA5C',
      },
    },
    boxShadow: {
      low: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      high: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    },
    fontSize: {
      'body-10': ['10px', '14px'],
      'body-12': ['12px', '18px'],
      'body-14': ['14px', '20px'],
      'title-16': ['16px', '24px'],
      'title-18': ['18px', '26px'],
      'heading-20': ['20px', '30px'],
      'heading-24': ['24px', '36px'],
    },
  },
  plugins: [],
};

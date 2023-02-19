module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '460px',
      },
      height: {
        '128': '400px',
      },
      colors: {
        ais: {
          black: '#1F1E1E',
          'blue-gray': '#E1E8ED',
          'light-blue': '#11BBFD',
          'dark-blue': '#4565B8',
          'light-gray': '#f5f5f5',
          'dark-gray': '#444444',
          'indigo': '#24314D',
          'hover-indigo': '#374b75',
          white: '#fafafa',
          navy: '#202042',
          gray: '#B8B8B8',
        },
      },
      scale: {
        85: '0.85',
        300: '3',
        400: '4',
      },
      margin: {
        73: '18.75rem',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      cairo: ['Cairo', 'sans-serif'],
      hind: ['Hind Siliguri'],
      lucidity: ['Lucidity']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'red': '#d00000',
      'yellow': '#ffba08',
      'green': '#2fc22d',
      blue: {
        'dark': '#1C3144',
        'king': '#1C2EC1',
        'baby': '#75FEFD',
      },
      gray: {
        'dark': '#444444',
        'light': '#A2AEBB',
      },
      'white': '#FCFFFF',
      'black': '#171A1B',
    },
    extend: {
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

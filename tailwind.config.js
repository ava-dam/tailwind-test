/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    colors: {
      'black': '#1A1A1A',
      'white': "#FFFFFF",
      'lotion': '#FAFAFA',
      'orange': '#FF6700',
      'dark-orange': '#984004',
      'blue-header': '#002953',
      'blue-tracker': '#2680EB',
      'blue-field': 'rgb(242, 248, 254)',
      'blue-caret': '#72ACF2',
      'grey-text': '#666666',
      'grey-field': '#999999',
      'red-error': '#B40000',
      'green-light': '#E4F8E4',
      'green-medium': '#289F71',
      'green-dark': '#139132',
      'green-bright': '#00B500',
      'yellow': '#FFF5DA'
    },

    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'full': '82px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px'
      }
    }
  },
  plugins: [],
}


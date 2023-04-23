/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./public/index.html"

  ],
  theme: {
    extend: {
      backgroundColor:{
        'main-100':'#e7ecec',
        'main-200':'#dde4e4',
        'main-300':'#ced9d9',
        'main-400':'#c0d8d8',
        'main-500':'#0e8080',
      },
      colors:{
        'main-100':'#e7ecec',
        'main-200':'#dde4e4',
        'main-300':'#ced9d9',
        'main-400':'#c0d8d8',
        'main-500':'#0e8080',
      },
      keyframes: {
        'slide-left': {
          '0%': {
            '-webkit-transform': "translateX(500px);",
            transform: 'translateX(500px);'
          },
          '100% ': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': "translateX(500px);",
            transform: 'translateX(500px);'
          },
          '100% ': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        }
      },
      'slide-right': {
        "0%": {
          "-webkit-transform": "translateX(-500px)",
          transform: "translateX(-500px)"
        },
        "100%": {
          "-webkit-transform": "translateX(0)",
          transform: "translateX(0)"
        }
      },
      
      animation:{
        'slide-right': 'slide-right 0.5s linear both;',
        'slide-left': 'slide-left 0.5s linear both;',
        'slide-left2': 'slide-left2 0.5s linear both;',
      }

    },
  },
  plugins: [],
}

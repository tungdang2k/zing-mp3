const { BiBorderRadius } = require('react-icons/bi');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./public/index.html"

  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
        'overlay-30':'rgba(0,0,0,0.3)'
      },
      colors: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
      },
     
      keyframes: {
        'slide-right': {
          'from': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          'to': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          'from': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          'to': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          'from': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          'to': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center':{
          'from':{
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);'
          },
          'to':{
            '-webkit-transform': ' rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
        'rotate-center-pause':{
          'from':{
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);',
            'border-radius':'9999px;',
          },
          'to':{
            '-webkit-transform': ' rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 8s linear infinite;',
        'rotate-center-pause': 'rotate-center-pause .5s linear 1 both;',
      },
      flex:{
        '4':'4 4 0% '
      }

    },
    screens: {
      '1600': '1600px'
    },
  },
  plugins: [
    

  ],
}

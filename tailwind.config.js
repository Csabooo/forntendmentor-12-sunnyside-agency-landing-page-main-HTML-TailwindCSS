/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        letterSpacing: {
          tightest: '-.075em',
          tighter: '-.05em',
          tight: '-.025em',
          normal: '0',
          wide: '.025em',
          wider: '.05em',
          widest: '.1em',
          widest: '.25em',
          widestwidest: "0.65rem"
        },

        scale: {
          '300': '3',
        },

        colors: {
          /*   ### Primary */
          "soft-red": "hsl(7, 99%, 70%)",
          "yellow": "hsl(51, 100%, 49%)",
          "dark-desaturated-cyan(graphic-design-text)": "hsl(167, 40%, 24%)",
          "dark-blue": "hsl(198, 62%, 26%)",
          "dark-moderate-cyan(footer)": "hsl(168, 34%, 41%)",
  
          /* ###Neutral */
          "very-dark-desaturated-blue": "hsl(212, 27%, 19% )",
          "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
          "dark-grayish-blue": "hsl(232, 10%, 55%)",
          "grayish-blue": "hsl(210, 4%, 67%)",
          "white": "hsl(0, 0%, 100%)"
  
        },
        fontSize:{
          "18":"18px"
        },

        lineHeight:{
          "20" :"3.5rem"
        }

      },
      fontFamily:{
        sans:"Barlow, sans-serif",
        serif:"Fraunces, serif"
      },
      plugins: [],
    }
  }
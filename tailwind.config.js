/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    fontFamily:{
     gothvetica: ['GOTHVETICA'],
     exo2: ['EXO2'],
     bigjohn: ['BIG-JOHN'],
     slimjoe: ['SLIM-JOE'],
    },
    animation:{
      'height': 'height .5s',
      'width': 'width .5s'
    },
    keyframes:{
      height:{
        '0%' :{height:'0px'},
      },
      width:{
        '0%' :{width:'0px'},
      }
    },
    screens:{
      mb425:'425px',
      mb5:'500px',
      mb6:'600px',
      mb7:'700px',
      mb72:'720px',
      mb8:'800px',
      mb9:'900px',
      mb10:'1000px',
      mb115:'1150px',
      mb12:'1200px'
    }
    },
  },
  plugins: [],
};

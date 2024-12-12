/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        html: '#e34c26',
        css: '#264de4',
        javascript: '#f0db4f',
        react: '#61dafb',
        nodejs: '#3c873a',
        python: '#306998',
        java: '#007396',
        cpp: '#00599C',
        csharp: '#239120',
        github: '#181717',
        mongodb: '#47A248',
        linux: '#FCC624',
        express: '#000000',
        django: '#092E20',
        sql: '#306998',
        docker: '#2496ED',
        nginx: '#009639',
        azure: '#0078D4',
        android: '#3DDC84',
      },
      textAlign: {
        justify: 'justify',
      },
    },
  },
  plugins: [],
};

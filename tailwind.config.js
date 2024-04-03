/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      spacing: {
        '4.5' : '1.125rem',
        '8.5' : '2.1875rem',
        '11.5' : '2.625rem',
        '15' : '3.75rem',
        '18' : '4.5rem',
        '38' : '9.375rem'
      },
      backgroundColor: {
        'indigo-1000' : 'rgb(22 17 53)',
        'indigo-950' : 'rgb(41 40 87)',
        'warning-500' : 'rgb(68 50 90)'
      }
    },
  },
  plugins: [],
};

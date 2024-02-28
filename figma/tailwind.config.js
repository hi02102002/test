/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         boxShadow: {
            'btn-primary': '0px 4px 10px 0px rgba(170, 149, 133, 0.25)',
         },
      },
   },
   plugins: [],
};

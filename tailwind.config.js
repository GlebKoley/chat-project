/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,js,jsx}'],
   theme: {
      extend: {
         colors: {
            colorShadow: '#201f1e1f',
         },
         // Adds a new breakpoint in addition to the default breakpoints
         boxShadow: {
            headerShadow: 'inset 0px -1px 0px 0px rgba(32, 31, 30, 0.12)',
            chatListShadow: 'inset -1px 0px 0px 0px rgba(32, 31, 30, 0.12)',
         },
      },
   },
};

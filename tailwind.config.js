/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,js,jsx}'],
   theme: {
      extend: {
         colors: {
            colorShadow: '#201f1e1f',
            colorChats: '#605E5C',
            colorTextMessage: '#201F1E',
            borderColor: 'rgba(32, 31, 30, 0.12)',
            bgColorActiveChat: '#407EC914',
            bgColorHoverChat: '#201f1e0a',
            bgColorMyMessage: 'rgba(64, 126, 201, 0.16)',
            bgColorMessageTime: 'rgba(64, 126, 201, 0.08)',
            bgColorAnswerUser: '#F3F3F3',
            whiteTheme: '#ffffff',
            darkTheme: '#202124',
         },
         boxShadow: {
            headerShadow: 'inset 0px -1px 0px 0px rgba(32, 31, 30, 0.12)',
            chatListShadow: 'inset -1px 0px 0px 0px rgba(32, 31, 30, 0.12)',
         },
      },
   },
};

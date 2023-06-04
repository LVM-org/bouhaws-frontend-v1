/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'bouhaws-dark': '#111111',
        'bouhaws-semi-dark': '#202128',
        'bouhaws-blue-main': '#336DFF',
        'bouhaws-light': '#D9D9D9',
        'bouhaws-blue-dark': '#265EEC',
        'bouhaws-green': '#27BA9E',
        'bouhaws-light-green': '#AEF4E9',
        'bouhaws-purple': '#9747FF',
        'bouhaws-gray': '#5A5B5B',
        'bouhaws-light-gray': '#9E9E9E',
        'bouhaws-light-gray-2': '#6F6F74',
      },

      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
}

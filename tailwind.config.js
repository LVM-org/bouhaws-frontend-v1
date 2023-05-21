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
        'bouhaws-blue-main': '#336DFF',
        'bouhaws-blue-dark': '#265EEC',
        'bouhaws-green': '#27BA9E',
        'bouhaws-purple': '#9747FF',
        'bouhaws-gray': '#5A5B5B',
      },
    },
  },
}

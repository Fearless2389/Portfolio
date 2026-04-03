/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'neon-cyan': 'var(--neon-cyan)',
        'neon-blue': 'var(--neon-blue)',
      },
      fontFamily: {
        system: ['Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        noir: {
          50:  '#f0f0ff',
          100: '#e0e0ff',
          200: '#c4b5fd',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#2e1065',
          950: '#0a0a0f',
        },
        surface: {
          DEFAULT: '#12121a',
          light:   '#1a1a2e',
          border:  '#2a2a3e',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          glow:    '#a78bfa',
          cyan:    '#06b6d4',
          green:   '#10b981',
          red:     '#ef4444',
          amber:   '#f59e0b',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-cyan':   '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-green':  '0 0 20px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}

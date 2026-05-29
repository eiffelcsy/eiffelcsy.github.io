import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        'bg-2':  'var(--bg-2)',
        fg:      'var(--fg)',
        'fg-2':  'var(--fg-2)',
        'fg-3':  'var(--fg-3)',
        accent:  'var(--accent)',
      },
      fontFamily: {
        mono:    'var(--font-mono)',
        serif:   'var(--font-serif)',
        display: 'var(--font-display)',
        label:   'var(--font-label)',
        acad:    'var(--font-acad)',
      },
      maxWidth: {
        col: 'var(--col-w)',
      },
    },
  },
  plugins: [],
} satisfies Config

export type Aesthetic = 'mono-serif' | 'terminal' | 'academic'
export type Theme = 'light' | 'dark'

export interface Tweaks {
  aesthetic: Aesthetic
  theme: Theme
  accent: string
}

const DEFAULTS: Tweaks = {
  aesthetic: 'mono-serif',
  theme: 'light',
  accent: '#b8472a',
}

const ACCENT_OPTIONS = ['#b8472a', '#3a6b4f', '#2a4d7a', '#6b4a8a']

export function useTweaks() {
  const tweaks = useState<Tweaks>('tweaks', () => ({ ...DEFAULTS }))

  function setTweak<K extends keyof Tweaks>(key: K, value: Tweaks[K]) {
    tweaks.value[key] = value
  }

  if (import.meta.client) {
    watchEffect(() => {
      const root = document.documentElement
      root.dataset.aesthetic = tweaks.value.aesthetic
      root.dataset.theme = tweaks.value.theme
      root.style.setProperty('--accent', tweaks.value.accent)
    })
  }

  return { tweaks, setTweak, ACCENT_OPTIONS }
}

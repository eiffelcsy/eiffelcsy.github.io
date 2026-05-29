<script setup lang="ts">
import type { Aesthetic } from '~/composables/useTweaks'

const { tweaks, setTweak, ACCENT_OPTIONS } = useTweaks()

const isOpen = ref(false)

const aestheticOptions: { value: Aesthetic; label: string }[] = [
  { value: 'mono-serif', label: 'mono + serif' },
  { value: 'terminal', label: 'terminal' },
  { value: 'academic', label: 'academic' },
]

const themeOptions = [
  { value: 'light' as const, label: 'light' },
  { value: 'dark' as const, label: 'dark' },
]
</script>

<template>
  <div class="tweaks-panel">
    <div v-if="isOpen" class="tweaks-drawer">
      <div class="tweaks-drawer__title">tweaks</div>

      <div>
        <div class="tweaks-section__title">aesthetic</div>
        <div class="tweaks-row">
          <div class="tweaks-options">
            <button
              v-for="opt in aestheticOptions"
              :key="opt.value"
              class="tweaks-option"
              :class="{ 'is-active': tweaks.aesthetic === opt.value }"
              @click="setTweak('aesthetic', opt.value)"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="tweaks-section__title">theme</div>
        <div class="tweaks-row">
          <div class="tweaks-options">
            <button
              v-for="opt in themeOptions"
              :key="opt.value"
              class="tweaks-option"
              :class="{ 'is-active': tweaks.theme === opt.value }"
              @click="setTweak('theme', opt.value)"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="tweaks-section__title">accent</div>
        <div class="tweaks-swatches">
          <button
            v-for="color in ACCENT_OPTIONS"
            :key="color"
            class="tweaks-swatch"
            :class="{ 'is-active': tweaks.accent === color }"
            :style="{ backgroundColor: color }"
            :title="color"
            @click="setTweak('accent', color)"
          />
        </div>
      </div>
    </div>

    <button
      class="tweaks-toggle"
      :aria-label="isOpen ? 'Close tweaks' : 'Open tweaks'"
      @click="isOpen = !isOpen"
    >
      ✦
    </button>
  </div>
</template>

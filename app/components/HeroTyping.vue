<script setup lang="ts">
const PHRASES = [
  'building machines that imagine',
  'predictive world models for embodied agents',
  'cross-modal scene understanding',
  'the embodiment problem, restated',
]

const TYPE_MS = 78
const HOLD_MS = 2800
const ERASE_MS = 42

const text = ref('')
const phraseIndex = ref(0)
const phase = ref<'type' | 'hold' | 'erase'>('type')

let timer: ReturnType<typeof setTimeout> | null = null

function tick() {
  const target = PHRASES[phraseIndex.value]

  if (phase.value === 'type') {
    if (text.value.length < target.length) {
      text.value = target.slice(0, text.value.length + 1)
      timer = setTimeout(tick, TYPE_MS)
    } else {
      phase.value = 'hold'
      timer = setTimeout(tick, HOLD_MS)
    }
  } else if (phase.value === 'hold') {
    phase.value = 'erase'
    timer = setTimeout(tick, HOLD_MS)
  } else if (phase.value === 'erase') {
    if (text.value.length > 0) {
      text.value = text.value.slice(0, -1)
      timer = setTimeout(tick, ERASE_MS)
    } else {
      phraseIndex.value = (phraseIndex.value + 1) % PHRASES.length
      phase.value = 'type'
      timer = setTimeout(tick, TYPE_MS)
    }
  }
}

onMounted(() => { timer = setTimeout(tick, TYPE_MS) })
onUnmounted(() => { if (timer) clearTimeout(timer) })
</script>

<template>
  <span class="typing">{{ text }}<span class="caret" aria-hidden="true" /></span>
</template>

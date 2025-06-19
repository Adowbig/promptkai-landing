<template>
  <UButton
    class="dark:font-semibold font-bold"
    :class="$props.class"
    :label="`ดาวน์โหลด ${appName ? 'พร้อมขาย' : ''}`"
    :icon="$props.icon"
    target="_blank"
    :size="size"
    @click="triggerConfetti($event)"
  />
</template>

<script setup lang="ts">
import type { button } from '#build/ui'

const appConfig = useAppConfig()
defineProps({
  appName: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as () => typeof button.defaultVariants.size,
    default: 'md',
  },
  icon: {
    type: String,
    default: 'solar:download-linear',
  },
  class: {
    type: String,
    default: '',
  },
})

const triggerConfetti = (event: Event) => {
  const rect = (event.target as HTMLElement).getBoundingClientRect()
  const x = (rect.left + rect.width / 2) / window.innerWidth
  const y = (rect.top + rect.height / 2) / window.innerHeight

  useConfetti({
    colors: [
      getComputedStyle(document.documentElement).getPropertyValue(`--color-${appConfig.ui.colors.primary}-600`),
      getComputedStyle(document.documentElement).getPropertyValue(`--color-${appConfig.ui.colors.primary}-300`),
    ],
    particleCount: 100,
    spread: 360,
    startVelocity: 20,
    ticks: 100,
    origin: { x, y },
  })
}
</script>

<template>
  <UButton
    class="dark:font-semibold font-bold"
    :class="$props.class"
    :label="`ดาวน์โหลด ${appName ? 'พร้อมขาย' : ''}`"
    :icon="$props.icon"
    target="_blank"
    :size="size"
  />
</template>

<script setup lang="ts">
import type { button } from '#build/ui'

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
</script>

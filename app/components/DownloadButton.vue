<template>
  <UButton
    class="dark:font-semibold font-bold"
    :label="`ดาวน์โหลด ${appName ? 'พร้อมขาย' : ''}`"
    icon="solar:download-minimalistic-bold"
    target="_blank"
    :size="size"
  />
</template>

<script setup lang="ts">
import { button } from '#build/ui'

defineProps({
  appName: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as () => 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    default: button.defaultVariants.size,
    validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  icon: {
    type: String,
    default: 'solar:download-minimalistic-linear',
  },
})
</script>

<template>
  <Motion
    :initial="{
      scale: 1.1,
      opacity: 0,
      filter: 'blur(10px)',
    }"
    :while-in-view="{
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    }"
    :in-view-options="{ once: true, margin: '0px 0px -20% 0px', amount: $props.amount }"
    :transition="{
      duration: $props.duration,
      delay: $props.delay,
      ease: 'easeOut',
      type: 'tween',
    }"
  >
    <slot />
  </Motion>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  duration?: number
  delay?: number
  amount?: number | 'all' | 'some'
}>(), {
  duration: 0.6,
  delay: 0.1,
  amount: 'some',
})
</script>

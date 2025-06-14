<template>
  <!-- credit: https://github.com/unjs/undocs/blob/main/app/components/LandingBackground.vue -->
  <ClientOnly>
    <div
      class="bg"
      :class="props.class"
      aria-hidden="true"
    >
      <div
        class="opacity-30 dark:opacity-50 size-full aspect-[1.7]"
        :style="{
          'clip-path': `polygon(${poly})`,
        }"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const points = useState(() => new Array(16).fill(0).map(() => [Math.random(), Math.random()]))

const poly = computed(() => points.value.map(([x = 0, y = 0]) => `${x * 100}% ${y * 100}%`).join(', '))

function jumpVal(val: number) {
  return Math.random() > 0.5 ? val + (Math.random() - 0.5) / 2 : Math.random()
}

let timeout: string | number | NodeJS.Timeout | undefined
function jumpPoints() {
  for (let i = 0; i < points.value.length; i++) {
    const point = points.value[i]
    if (point && point[0] !== undefined && point[1] !== undefined) {
      points.value[i] = [jumpVal(point[0]), jumpVal(point[1])]
    }
  }
  timeout = setTimeout(jumpPoints, 2000 + Math.random() * 1000)
}

onMounted(() => {
  jumpPoints()
  onUnmounted(() => clearTimeout(timeout))
})

const props = defineProps<{
  class?: string
}>()
</script>

<style scoped>
.bg {
  position: absolute;
  z-index: -20;
  inset: 0;
  transform: translate3d(0, 0, 0);
  filter: blur(80px);
}

.bg > div {
  clip-path: circle(75%);
  transition: clip-path 5s ease;
  background-image: radial-gradient(
    circle at center,
    color-mix(in srgb, var(--ui-primary), transparent),
    color-mix(in srgb, var(--ui-bg), transparent)
  );
}
</style>

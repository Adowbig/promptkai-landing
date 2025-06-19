<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip
        text="เปลี่ยนโหมดสี"
        disable-closing-trigger
      >
        <UButton
          color="neutral"
          variant="outline"
          :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
          @click="startViewTransition"
        />
      </UTooltip>

      <template #fallback>
        <USkeleton
          class="size-8"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})

const isAppearanceTransition = typeof document !== 'undefined'
  // @ts-expect-error startViewTransition is not defined in Vue's types
  && document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const startViewTransition = (event: MouseEvent) => {
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 20;
}
.dark::view-transition-old(root) {
  z-index: 20;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>

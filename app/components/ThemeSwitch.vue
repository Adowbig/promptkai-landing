<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip
        text="เปลี่ยนโหมดสี"
        :popper="{ strategy: 'absolute' }"
      >
        <UButton
          square
          :padded="false"
          size="lg"
          color="neutral"
          variant="soft"
          :icon="iconName"
          class="group"
          @click="switchColorMode"
        />
      </UTooltip>

      <template #fallback>
        <USkeleton
          class="size-9"
          :ui="{ rounded: 'rounded-full' }"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system']
type ColorMode = (typeof ColorModeList)[number]

const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  colorMode.preference = ColorModeList[nextIndex] as ColorMode
}

const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, string> = {
    system: 'solar:monitor-linear',
    light: 'solar:sun-line-duotone',
    dark: 'solar:moon-line-duotone',
  }
  const iconName = colorMode.preference as ColorMode
  return `${iconNameMap[iconName]}`
})
</script>

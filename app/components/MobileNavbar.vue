<template>
  <UDrawer
    :close="{ onClick: () => emit('close', false) }"
    :ui="{
      header: 'flex items-center',
      footer: 'flex flex-row items-center space-x-1',
    }"
    title="เมนู"
    inset
    direction="top"
  >
    <template #header>
      <NuxtImg
        provider="cloudinary"
        src="promptKai_logo-noBG_v7yekk"
        alt="logo"
        class="mr-2"
        width="30"
        height="30"
      />
      <span class="font-bold text-lg">พร้อมขาย</span>
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        class="w-full"
        color="primary"
        :ui="{
          link: 'py-4',
        }"
        orientation="vertical"
      />
    </template>
    <template #footer>
      <DownloadButton />
      <LazyThemeSwitch />
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const emit = defineEmits<{ close: [boolean] }>()
defineProps<{
  items: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="top-0 z-20 sticky">
    <nav class="bg-white dark:bg-neutral-950 py-2 border-neutral-200 dark:border-neutral-700 border-b">
      <UContainer class="justify-between justify-items-center grid grid-cols-2 lg:grid-cols-3">
        <section class="flex items-center place-content-start w-full">
          <NuxtImg
            src="promptKai_logo-noBG.png"
            alt="PromptKai Logo"
            width="40"
            height="40"
            class="mr-2"
          />
          <span class="font-bold text-lg">พร้อมขาย</span>
        </section>
        <section class="hidden lg:flex items-center place-content-center">
          <UNavigationMenu
            :items="items"
            class="w-full"
            color="primary"
          />
        </section>
        <section class="flex items-center place-content-end gap-2 w-full">
          <DownloadButton size="lg" />
          <LazyThemeSwitch />
          <UButton
            icon="solar:hamburger-menu-linear"
            variant="soft"
            color="neutral"
            size="lg"
            class="lg:hidden"
            @click="openNavbar"
          />
        </section>
      </UContainer>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazyMobileNavbar } from '#components'

const overlay = useOverlay()

const navbarSlideover = overlay.create(LazyMobileNavbar)

async function openNavbar() {
  await navbarSlideover.open()
}

const items = ref<NavigationMenuItem[]>([
  {
    label: 'คู่มือการใช้งาน',
    children: [
      {
        label: 'แอพพลิเคชั่น',
        description: 'คู่มือการใช้งานแอพพลิเคชั่น',
        icon: 'solar:smartphone-line-duotone',
      },
      {
        label: 'เว็บไซต์',
        description: 'คู่มือการใช้งานเว็บไซต์ระบบหลังบ้าน',
        icon: 'solar:laptop-minimalistic-line-duotone',
      },
    ],
  },
  {
    label: 'บทความ',
  },
  {
    label: 'เกี่ยวกับ',
    children: [
      {
        label: 'เกี่ยวกับบริการ',
        description: 'ข้อมูลเกี่ยวกับผลิตภัณฑ์',
        icon: 'solar:info-circle-outline',
      },
      {
        label: 'เกี่ยวกับเรา',
        description: 'ข้อมูลเกี่ยวกับเรา',
        icon: 'solar:users-group-rounded-linear',
      },
    ],
  },
  {
    label: 'ติดต่อเรา',
  },
])
</script>

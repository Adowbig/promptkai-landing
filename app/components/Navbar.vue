<template>
  <nav class="top-0 z-20 sticky bg-default/80 backdrop-blur-md border-neutral-200 dark:border-neutral-700 border-b h-(--ui-header-height)">
    <UContainer>
      <section class="flex items-center">
        <section class="flex-1">
          <div class="flex items-center">
            <NuxtImg
              provider="cloudinary"
              src="promptKai_logo-noBG_v7yekk"
              alt="logo"
              class="mr-2"
              width="30"
              height="30"
            />
            <span class="font-bold text-lg">พร้อมขาย</span>
          </div>
        </section>
        <section class="hidden lg:flex items-center place-content-center">
          <UNavigationMenu
            :items="items"
            class="w-full"
            color="primary"
          />
        </section>
        <section class="flex-1">
          <div class="flex justify-end items-center space-x-3">
            <DownloadButton />
            <LazyThemeSwitch />
            <UButton
              icon="solar:hamburger-menu-linear"
              variant="soft"
              color="neutral"
              class="lg:hidden"
              @click="openNavbar"
            />
          </div>
        </section>
      </section>
    </UContainer>
  </nav>
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

<template>
  <nav
    class="top-0 z-10 sticky flex items-center bg-default/80 drop-shadow-sm backdrop-blur-xl border-default border-b h-(--ui-header-height)"
  >
    <UContainer>
      <section class="flex items-center">
        <section class="flex md:flex-1 items-center shrink">
          <NuxtLink
            to="/"
            class="flex items-center"
          >
            <NuxtImg
              provider="cloudinary"
              src="promptKai_logo-noBG_v7yekk"
              alt="logo"
              class="mr-2"
              width="30"
              height="30"
            />
            <span class="font-bold text-highlighted text-xl">พร้อมขาย</span>
          </NuxtLink>
        </section>
        <section class="hidden md:flex place-content-center lg:grow">
          <UNavigationMenu
            as="nav"
            :items="items"
            :ui="{
              root: 'w-full justify-center',
            }"
            color="primary"
            variant="link"
            highlight
          />
        </section>
        <section class="flex md:flex-1 justify-end items-center space-x-1 grow">
          <DownloadButton class="hidden md:flex" />
          <LazyThemeSwitch class="hidden md:flex" />
          <UButton
            icon="solar:hamburger-menu-linear"
            variant="outline"
            color="neutral"
            class="md:hidden"
            @click="openNavbar()"
          />
        </section>
      </section>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazyMobileNavbar } from '#components'

const overlay = useOverlay()

const items: NavigationMenuItem[] = [
  {
    label: 'คู่มือการใช้งาน',
    icon: 'solar:book-2-outline',
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
    icon: 'solar:pen-new-square-outline',
  },
  {
    label: 'ติดต่อเรา',
    icon: 'solar:chat-line-outline',
  },
]

const navbarSlideover = overlay.create(LazyMobileNavbar, { props: { items: items } })

const openNavbar = () => {
  navbarSlideover.open()

  return
}
</script>

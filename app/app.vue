<template>
  <VueLenis
    root
    :options="lenisOptions"
  />
  <UApp
    :tooltip="{ delayDuration: 0 }"
  >
    <Navbar />
    <main
      class="min-h-[calc(100dvh-var(--ui-header-height))] overflow-hidden"
    >
      <NuxtPage />
    </main>
    <Footer />
  </UApp>
</template>

<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
import type { LenisOptions } from 'lenis'

const lenisOptions: LenisOptions = {
  duration: 1,
  touchMultiplier: 2,
  syncTouch: true,
  wheelMultiplier: 1.2,
}

useHead({
  htmlAttrs: {
    lang: 'th',
  },
  titleTemplate(title) {
    return title ? `${title} - พร้อมขาย` : 'พร้อมขาย - POS ยุคใหม่ ทำงานบนมือถือ'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  titleTemplate(title) {
    return title ? `${title} - พร้อมขาย` : 'พร้อมขาย - POS ยุคใหม่ ทำงานบนมือถือ'
  },
  description:
    'เปลี่ยนร้านค้าของคุณให้เป็นสมาร์ทสโตร์ยุคใหม่ ด้วย พร้อมขาย แอพ POS บนมือถือที่จะปลดล็อคข้อจำกัดของเครื่อง POS แบบเดิมๆ จัดการทุกธุรกรรมได้อย่างง่ายดาย รวดเร็ว และแม่นยำ บนอุปกรณ์ที่คุณคุ้นเคย พร้อมฟีเจอร์ครบครันที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด ช่วยยกระดับประสิทธิภาพการดำเนินงานร้านค้าของคุณ',
  charset: 'utf-8',
  themeColor: '#9d76c1',
  ogTitle: 'พร้อมขาย - แอพ POS บนมือถือ',
  ogDescription:
    'เปลี่ยนร้านค้าของคุณให้เป็นสมาร์ทสโตร์ยุคใหม่ ด้วย พร้อมขาย แอพ POS บนมือถือที่จะปลดล็อคข้อจำกัดของเครื่อง POS แบบเดิมๆ จัดการทุกธุรกรรมได้อย่างง่ายดาย รวดเร็ว และแม่นยำ บนอุปกรณ์ที่คุณคุ้นเคย พร้อมฟีเจอร์ครบครันที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด ช่วยยกระดับประสิทธิภาพการดำเนินงานร้านค้าของคุณ',
  ogImage: '/promptKai_logo-noBG.png',
})
</script>

<style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.3s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .page-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }

  .page-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
  .page-enter-from {
    transform: translateX(40px);
    opacity: 0;
  }
}
</style>

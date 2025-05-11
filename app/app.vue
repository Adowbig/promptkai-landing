<template>
  <UApp
    :tooltip="{ delayDuration: 0 }"
  >
    <Navbar />
    <NuxtPage />
    <Footer />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} - พร้อมขาย` : 'พร้อมขาย - POS ยุคใหม่ ทำงานบนมือถือ'
  },
})
</script>

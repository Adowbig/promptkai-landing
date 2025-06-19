<template>
  <section class="relative border-primary-300 border-y dark:border-primary-600 overflow-hidden">
    <LazyAnimatedBackground />
    <UContainer>
      <div class="flex lg:flex-row flex-col lg:justify-between items-center pt-16 lg:pt-0 text-center lg:text-start">
        <div class="mb-8 lg:mb-0">
          <h1 class="mb-2 font-extrabold text-highlighted text-3xl md:text-5xl">
            ดาวน์โหลด <span class="text-primary">พร้อมขาย</span> เลย
          </h1>
          <p class="text-muted dark:text-toned md:text-lg">
            ดาวน์โหลดแอพพลิเคชัน <span class="text-primary">พร้อมขาย</span> เพื่อเริ่มต้นใช้งานระบบ POS บนมือถือ
          </p>
          <DownloadButton
            size="xl"
            class="my-5"
            app-name
          />
        </div>
        <NuxtImg
          provider="cloudinary"
          class="w-2xs md:w-sm"
          src="phoneMockup_fmiixn"
        />
      </div>
    </UContainer>
  </section>
</template>

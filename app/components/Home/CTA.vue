<template>
  <section class="relative border-primary-300 border-y dark:border-primary-600 overflow-hidden">
    <div class="top-12 -left-10 -z-10 absolute bg-primary opacity-50 blur-[200px] rounded-full size-[500px]" />
    <div class="top-14 -right-10 -z-10 absolute bg-primary opacity-50 blur-[200px] rounded-full size-[500px]" />
    <UContainer>
      <div class="flex justify-between items-center">
        <div>
          <h1 class="mb-2 font-bold text-highlighted text-5xl">
            ดาวน์โหลด <span class="text-primary">พร้อมขาย</span> เลย
          </h1>
          <p class="text-muted dark:text-toned text-lg">
            ดาวน์โหลดแอพพลิเคชัน <span class="text-primary">พร้อมขาย</span> เพื่อเริ่มต้นใช้งานระบบ POS บนมือถือ
          </p>
          <DownloadButton
            size="xl"
            class="my-5"
          />
        </div>
        <NuxtImg
          class="w-64 h-auto"
          src="/phoneMockup.png"
        />
      </div>
    </UContainer>
  </section>
</template>

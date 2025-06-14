<template>
  <footer class="bg-default px-4 py-5 border-neutral-200 dark:border-neutral-700 border-t w-full">
    <UContainer>
      <div class="sm:mx-auto max-w-lg text-center">
        <div class="flex justify-center items-center space-x-3 mb-4">
          <NuxtImg
            src="promptKai_logo-noBG_v7yekk"
            provider="cloudinary"
            alt="logo"
            width="50"
            height="50"
          />
          <p class="font-bold text-lg">
            <span class="text-primary">พร้อมขาย</span>: POS สำหรับยุคใหม่ ทำงานบนมือถือ
          </p>
        </div>
        <p class="text-muted text-sm leading-relaxed">
          ระบบ <span class="text-primary">พร้อมขาย</span> ถูกออกแบบมาเพื่อช่วยให้การจัดการร้านค้าของคุณเป็นเรื่องง่ายและสะดวกสบาย
          ไม่ว่าคุณจะเป็นเจ้าของร้านเล็กหรือใหญ่ ระบบนี้สามารถปรับใช้ได้ตามความต้องการของคุณ
          พร้อมฟีเจอร์ที่ครบครันและใช้งานง่าย
        </p>
      </div>
      <div class="sm:flex justify-between items-center mt-8">
        <div class="mt-4 sm:mt-0 text-muted">
          &copy; 2025 พร้อมขาย สงวนลิขสิทธิ์.
        </div>
        <div class="mt-6 sm:mt-0">
          <ul class="flex items-center space-x-4">
            <li class="flex justify-center items-center w-10 h-10">
              <UButton
                icon="simple-icons:facebook"
                variant="ghost"
                size="lg"
                to="https://www.facebook.com/PromptKai"
                target="_blank"
              />
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

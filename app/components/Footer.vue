<template>
  <footer class="bg-white dark:bg-neutral-950 px-4 py-5 border-neutral-200 dark:border-neutral-700 border-t w-full">
    <UContainer>
      <div class="sm:mx-auto max-w-lg sm:text-center">
        <NuxtImg
          src="promptKai_logo-noBG_v7yekk"
          provider="cloudinary"
          alt="logo"
          width="50"
          height="50"
          class="mx-auto"
        />
        <p class="mt-2 font-bold">
          <span class="text-primary">พร้อมขาย</span>: POS สำหรับยุคใหม่ ทำงานบนมือถือ
        </p>
        <p class="mt-5 text-muted text-sm leading-relaxed">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div class="sm:flex justify-between items-center mt-8">
        <div class="mt-4 sm:mt-0 text-neutral-500">
          &copy; 2025 พร้อมขาย สงวนลิขสิทธิ์.
        </div>
        <div class="mt-6 sm:mt-0">
          <ul class="flex items-center space-x-4">
            <li class="flex justify-center items-center w-10 h-10">
              <UButton
                icon="simple-icons:facebook"
                variant="ghost"
                size="lg"
                class="text-blue-500 hover:text-primary transition-colors duration-200"
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

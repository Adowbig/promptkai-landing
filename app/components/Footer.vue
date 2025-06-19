<template>
  <footer class="bg-default py-5 border-neutral-200 dark:border-neutral-700 border-t w-full">
    <UContainer class="flex flex-col items-center">
      <div class="flex items-center">
        <NuxtImg
          src="promptKai_logo-noBG_v7yekk"
          provider="cloudinary"
          alt="logo"
          width="40"
          height="40"
        />
        <p class="ml-2 font-bold text-highlighted text-lg">
          พร้อมขาย
        </p>
      </div>
      <USeparator class="my-4" />
      <div>
        <ul class="flex items-center space-x-2">
          <li>
            <UButton
              icon="simple-icons:facebook"
              variant="ghost"
              size="lg"
            />
          </li>
        </ul>
      </div>
      <div class="flex flex-row justify-between items-center text-sm">
        <div class="mt-4 sm:mt-0 text-muted">
          &copy; <NuxtTime
            :datetime="new Date()"
            year="numeric"
          /> พร้อมขาย สงวนลิขสิทธิ์
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<template>
  <section class="relative py-10 md:py-24">
    <LazyAnimatedBackground />
    <UContainer class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-6 text-center">
        <NuxtImg
          provider="cloudinary"
          src="promptKai_logo-noBG_v7yekk"
          alt="logo"
          class="h-32"
        />
        <div>
          <h1 class="mb-4 font-bold text-primary text-5xl lg:text-7xl before:content-['“'] after:content-['”']">
            พร้อมขาย
          </h1>
          <h1 class="mb-6 font-bold text-highlighted text-3xl lg:text-5xl text-balance">
            POS ยุคใหม่ ทำงานบนมือถือ
          </h1>
          <p class="text-toned lg:text-lg text-balance">
            เปลี่ยนร้านค้าของคุณให้เป็นสมาร์ทสโตร์ยุคใหม่ ด้วย <span class="font-bold text-primary">พร้อมขาย</span> แอพ POS บนมือถือที่จะปลดล็อคข้อจำกัดของเครื่อง POS แบบเดิมๆ จัดการทุกธุรกรรมได้อย่างง่ายดาย รวดเร็ว และแม่นยำ บนอุปกรณ์ที่คุณคุ้นเคย พร้อมฟีเจอร์ครบครันที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด ช่วยยกระดับประสิทธิภาพการดำเนินงานร้านค้าของคุณ
          </p>
        </div>
        <div class="flex justify-center gap-2 mt-4">
          <DownloadButton
            class="shadow"
            size="xl"
            app-name
          />
          <UButton
            class="shadow"
            label="คู่มือการใช้งาน"
            variant="subtle"
            size="xl"
          />
        </div>
        <div class="flex flex-col items-center gap-4 mt-12">
          <p class="text-muted dark:text-toned lg:text-left text-center:">
            สร้างโดยเทคโนโลยี Open Source ชั้นนำ
          </p>
          <ul class="flex flex-wrap justify-center items-center gap-4">
            <template
              v-for="framework in frameworks"
              :key="framework.name"
            >
              <UTooltip
                :text="framework.name"
                :ui="{ text: 'text-sm', content: 'dark:bg-neutral-950' }"
              >
                <li
                  class="text-highlighted hover:text-primary transition-colors duration-200"
                >
                  <UIcon
                    :name="framework.icon"
                    size="24"
                  />
                </li>
              </UTooltip>
            </template>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const frameworks = [
  {
    name: 'Frappe Framework',
    icon: 'simple-icons:frappe',
  },
  {
    name: 'Flutter',
    icon: 'simple-icons:flutter',
  },
]
</script>

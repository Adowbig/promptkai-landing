<template>
  <section class="relative py-32 overflow-hidden">
    <div class="flex flex-col items-center mx-auto max-w-5xl">
      <div class="z-10 flex flex-col items-center gap-6 text-center">
        <NuxtImg
          provider="cloudinary"
          src="promptKai_logo-noBG_v7yekk"
          alt="logo"
          class="h-32"
        />
        <div>
          <h1 class="mb-6 font-bold text-2xl lg:text-5xl">
            <span class="text-primary">พร้อมขาย</span>: POS สำหรับยุคใหม่ ทำงานบนมือถือ
          </h1>
          <p class="text-dimmed dark:text-muted lg:text-xl text-pretty">
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
        <div class="flex flex-col items-center gap-4 mt-20">
          <p class="text-muted dark:text-toned lg:text-left text-center:">
            สร้างโดยเทคโนโลยี Open Source ชั้นนำ
          </p>
          <ul class="flex flex-wrap justify-center items-center gap-8">
            <template
              v-for="framework in frameworks"
              :key="framework.name"
            >
              <UTooltip :text="framework.name">
                <li
                  class="hover:text-primary transition-colors duration-200"
                >
                  <UIcon
                    :name="framework.icon"
                    size="32"
                  />
                </li>
              </UTooltip>
            </template>
          </ul>
        </div>
      </div>
    </div>
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

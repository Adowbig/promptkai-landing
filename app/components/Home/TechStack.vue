<template>
  <UContainer class="pt-24">
    <section class="font-heading text-center">
      <h1 class="inline-block mb-2 font-bold text-highlighted text-3xl md:text-5xl text-center">
        <UIcon
          name="solar:sledgehammer-bold"
          class="inline-block mr-2 size-8 md:size-12 text-primary"
        />
        สร้างโดยเทคโนโลยี Open Source ชั้นนำ
      </h1>
      <p class="mb-8 text-muted dark:text-toned md:text-lg">
        ระบบ <span class="text-primary">พร้อมขาย</span> ถูกพัฒนาขึ้นโดยใช้เทคโนโลยี Open Source ชั้นนำ
        ที่ได้รับการยอมรับในวงกว้าง ช่วยให้คุณมั่นใจได้ในความเสถียรและความปลอดภัยของระบบ
      </p>
    </section>

    <section class="gap-2 lg:gap-0 grid grid-cols-1 lg:grid-cols-3">
      <template
        v-for="tech in techStack"
        :key="tech.name"
      >
        <!-- Simple tech stack card; It's content will be generated from Nuxt Content; Layout need to be improved -->
        <UCard :ui="{ root: ' overflow-hidden lg:rounded-none lg:first:rounded-l-lg last:sm:rounded-b-lg lg:last:rounded-r-lg h-full', body: 'relative z-10' }">
          <div>
            <UIcon
              :name="tech.icon"
              class="mb-2 size-6"
            />
            <h2 class="font-bold text-highlighted text-xl">
              {{ tech.name }}
            </h2>
            <p class="text-muted text-sm md:text-base">
              {{ tech.description }}
            </p>
          </div>
        </UCard>
      </template>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const techStack = [
  {
    name: 'Frappe Framework',
    icon: 'simple-icons:frappe',
    description:
      'Frappe Framework เป็นเฟรมเวิร์กสำหรับการพัฒนาแอพพลิเคชันเว็บที่มีความยืดหยุ่นสูง',
  },
  {
    name: 'Python',
    icon: 'logos:python',
    description:
      'Python เป็นภาษาการเขียนโปรแกรมที่มีความยืดหยุ่นสูง ใช้งานง่าย และมีไลบรารี่มากมายที่ช่วยในการพัฒนาแอพพลิเคชัน',
  },
  {
    name: 'Flutter',
    icon: 'logos:flutter',
    description:
      'Flutter เป็นเฟรมเวิร์กสำหรับการพัฒนาแอพพลิเคชันมือถือและเว็บที่มีประสิทธิภาพสูง ช่วยให้คุณสามารถสร้างแอพพลิเคชันที่สวยงามและตอบสนองได้อย่างรวดเร็ว',
  },

]
</script>

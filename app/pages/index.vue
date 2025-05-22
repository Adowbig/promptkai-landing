<template>
  <UContainer>
    <HomeHero />
    <section class="mb-20">
      <HomeFeaturesList />
    </section>
    <section class="relative bg-background w-full h-[500px] overflow-hidden">
      <h1 class="drop-shadow dark:drop-shadow-none font-bold text-4xl text-center decoration-2 decoration-primary underline underline-offset-4">
        ความคิดเห็นจากผู้ใช้จริง
      </h1>
      <div class="flex justify-center mt-[64px] px-12">
        <HomeTestimonialSlider :testimonials="testimonials" />
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const testimonials = [
  {
    img: 'https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp',
    quote:
      'แอพพลิเคชันใช้งานง่าย สะดวกมาก สำหรับการทำงานในร้านค้า ไม่ต้องใช้เครื่อง POS ใหญ่ๆ อีกต่อไป',
    name: 'กรกมล ศรีอ่อน',
    role: 'ผู้ช่วยนักพัฒนาระบบ',
  },
  {
    img: 'https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp',
    quote:
      'ระบบเว็บไซต์หลังบ้านใช้ง่ายมาก มีฟีเจอร์ที่ครบครัน ช่วยให้การทำงานในร้านค้าสะดวกขึ้น',
    name: 'พรี่บิ๊ก',
    role: 'เจ้าของกลุ่ม \'ชมรมคนชอบ Vue & Nuxt\'',
  },
]
</script>

<template>
  <section class="py-32">
    <UContainer>
      <h1 class="font-bold text-highlighted text-5xl text-right">
        ความคิดเห็นจาก<span class="text-primary">ผู้ใช้จริง</span>
      </h1>
      <p class="mt-2 text-muted dark:text-toned text-lg text-right">
        ผู้ใช้จริงของ <span class="text-primary">พร้อมขาย</span> ได้แชร์ประสบการณ์การใช้งาน
        และความพึงพอใจในการใช้งานระบบของเรา
      </p>
      <section class="flex flex-wrap gap-4 space-y-4 mt-8">
        <template
          v-for="testimonial in testimonials"
          :key="testimonial.name"
        >
          <UCard
            variant="soft"
            :ui="{ root: 'flex-1/2 sm:flex-1/3 lg:flex-1/6 m-0', body: 'p-3 sm:p-3' }"
          >
            <div class="flex flex-row justify-start items-center space-x-3 mb-4">
              <UAvatar
                :src="testimonial.img"
                alt="User Avatar"
                size="lg"
              />
              <div>
                <h2 class="font-bold md:text-lg">
                  {{ testimonial.name }}
                </h2>
                <p class="text-muted text-sm">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
            <p class="text-default text-sm md:text-base text-balance">
              {{ testimonial.quote }}
            </p>
          </UCard>
        </template>
      </section>
    </UContainer>
  </section>
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
  {
    img: 'https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp',
    quote:
      'แอพพลิเคชันนี้ช่วยให้การจัดการสต๊อกสินค้าเป็นเรื่องง่ายและรวดเร็วมากขึ้น',
    name: 'BigzaaGamer',
    role: 'เจ้าของร้านขายของชำ',
  },
  {
    img: 'https://res.cloudinary.com/dqx4sss9s/image/upload/v1724321379/me-rmutsv-square_hhiarv.webp',
    quote:
      'ระบบนี้ช่วยให้การขายออนไลน์เป็นเรื่องง่ายและสะดวกมากขึ้น สามารถขายได้ทุกที่ทุกเวลา',
    name: 'bKoZii',
    role: 'เจ้าของร้านขายของออนไลน์',
  },
]
</script>

<template>
  <section class="pt-24">
    <UContainer>
      <h1 class="font-heading font-bold text-highlighted text-3xl md:text-5xl text-center md:text-right">
        <UIcon
          name="solar:chat-round-like-bold"
          class="inline-block size-8 md:size-12 text-primary align-bottom"
        />
        ความคิดเห็นจาก<span class="text-primary">ผู้ใช้จริง</span>
      </h1>
      <p class="mt-2 text-muted dark:text-toned md:text-lg text-center md:text-right text-balance">
        ผู้ใช้จริงของ <span class="text-primary">พร้อมขาย</span> ได้แชร์ประสบการณ์การใช้งาน
        และความพึงพอใจในการใช้งานระบบของเรา
      </p>
      <section class="mt-8">
        <div
          class="relative flex flex-col justify-center items-center w-full overflow-hidden"
        >
          <div
            class="left-0 z-2 absolute inset-y-0 bg-gradient-to-r from-default w-1/3 pointer-events-none"
          />
          <div
            class="right-0 z-2 absolute inset-y-0 bg-gradient-to-l from-default w-1/3 pointer-events-none"
          />

          <HomeMarquee
            pause-on-hover
            class="[--duration:30s] [--gap:0.5rem]"
          >
            <template
              v-for="testimonial in testimonials"
              :key="testimonial.name"
            >
              <UCard
                variant="soft"
                :ui="{ root: 'w-[300px] h-fit', body: 'p-3 sm:p-3', footer: 'flex flex-row items-center justify-start space-x-2 p-3 sm:p-3' }"
              >
                <template #footer>
                  <UAvatar
                    :src="testimonial.img"
                    alt="User Avatar"
                    size="lg"
                    :ui="{ root: 'rounded-lg' }"
                  />
                  <div>
                    <h2 class="font-bold">
                      {{ testimonial.name }}
                    </h2>
                    <p class="text-muted text-sm">
                      {{ testimonial.role }}
                    </p>
                  </div>
                </template>
                <p class="text-default text-sm md:text-base before:content-['“'] after:content-['”']">
                  {{ testimonial.quote }}
                </p>
              </UCard>
            </template>
          </HomeMarquee>
        </div>
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

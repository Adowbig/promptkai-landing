<template>
  <UContainer class="pt-24">
    <UIcon
      name="solar:hand-stars-bold"
      class="inline-block float-start mr-2 size-8 md:size-12 text-primary"
    />
    <h1 class="mb-2 font-bold text-highlighted text-3xl md:text-5xl">
      คุณสมบัติของระบบ <span class="text-primary">พร้อมขาย</span>
    </h1>
    <p class="mb-8 text-muted dark:text-toned md:text-lg">
      ระบบ <span class="text-primary">พร้อมขาย</span> มีคุณสมบัติที่หลากหลาย
      ช่วยให้การจัดการร้านค้าของคุณเป็นเรื่องง่ายและสะดวกสบาย
    </p>
    <section class="flex flex-row flex-wrap gap-4">
      <template
        v-for="feature in features"
        :key="feature.title"
      >
        <UCard
          variant="soft"
          :ui="{ root: 'shadow place-content-center flex-1/2 md:flex-1/3 lg:flex-1/4' }"
        >
          <div class="flex items-center">
            <UIcon
              :name="feature.icon"
              size="32"
              class="mr-4 text-primary"
            />
            <div class="flex-1">
              <h2 class="font-bold text-xl">
                {{ feature.title }}
              </h2>
              <p class="text-muted text-sm md:text-base">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </UCard>
      </template>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'การจัดการสต๊อก',
    description:
      'ระบบจัดการสต๊อกสินค้าอย่างมีประสิทธิภาพ ช่วยให้คุณสามารถติดตามสถานะสินค้าได้ตลอดเวลา',
    icon: 'solar:box-bold',
  },
  {
    title: 'การขายออนไลน์',
    description:
      'ระบบขายออนไลน์ที่เชื่อมต่อกับเว็บไซต์ของคุณ ช่วยให้คุณสามารถขายสินค้าได้ทุกที่ทุกเวลา',
    icon: 'solar:global-bold',
  },
  {
    title: 'การวิเคราะห์ข้อมูล',
    description:
      'ระบบวิเคราะห์ข้อมูลที่ช่วยให้คุณสามารถดูรายงานการขายและสต๊อกสินค้าได้อย่างละเอียด',
    icon: 'solar:chart-bold-duotone',
  },
  {
    title: 'แอพพลิเคชันมือถือ',
    description:
      'แอพพลิเคชันมือถือที่ช่วยให้คุณสามารถจัดการร้านค้าได้ทุกที่ทุกเวลา ใช้งานได้ทั้ง iOS และ Android',
    icon: 'solar:smartphone-2-bold',
  },
  {
    title: 'การจัดการลูกค้า',
    description:
      'ระบบจัดการลูกค้าที่ช่วยให้คุณสามารถติดตามข้อมูลลูกค้าได้อย่างมีประสิทธิภาพ',
    icon: 'solar:users-group-rounded-bold',
  },
  {
    title: 'การจัดการพนักงาน',
    description:
      'ระบบจัดการพนักงานที่ช่วยให้คุณสามารถติดตามข้อมูลพนักงานได้อย่างมีประสิทธิภาพ',
    icon: 'clarity:employee-group-solid',
  },
]
</script>

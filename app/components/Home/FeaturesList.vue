<template>
  <div>
    <h1 class="drop-shadow dark:drop-shadow-none mb-10 font-bold text-4xl text-center decoration-2 decoration-primary underline underline-offset-4">
      คุณสมบัติของระบบ <span class="text-primary">พร้อมขาย</span>
    </h1>
    <section class="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <template
        v-for="feature in features"
        :key="feature.title"
      >
        <UCard
          variant="soft"
          :ui="{ root: ' shadow place-content-center' }"
        >
          <div class="flex items-center">
            <UIcon
              :name="feature.icon"
              size="32"
              class="mr-4 text-primary"
            />
            <div>
              <h2 class="font-bold text-xl">
                {{ feature.title }}
              </h2>
              <p class="text-muted sm:text-sm text-base">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </UCard>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'การจัดการสต๊อก',
    description:
      'ระบบจัดการสต๊อกสินค้าอย่างมีประสิทธิภาพ ช่วยให้คุณสามารถติดตามสถานะสินค้าได้ตลอดเวลา',
    icon: 'solar:box-outline',
  },
  {
    title: 'การขายออนไลน์',
    description:
      'ระบบขายออนไลน์ที่เชื่อมต่อกับเว็บไซต์ของคุณ ช่วยให้คุณสามารถขายสินค้าได้ทุกที่ทุกเวลา',
    icon: 'solar:global-linear',
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
    icon: 'solar:smartphone-2-linear',
  },
  {
    title: 'การจัดการลูกค้า',
    description:
      'ระบบจัดการลูกค้าที่ช่วยให้คุณสามารถติดตามข้อมูลลูกค้าได้อย่างมีประสิทธิภาพ',
    icon: 'solar:user-linear',
  },
  {
    title: 'การจัดการพนักงาน',
    description:
      'ระบบจัดการพนักงานที่ช่วยให้คุณสามารถติดตามข้อมูลพนักงานได้อย่างมีประสิทธิภาพ',
    icon: 'clarity:employee-group-line',
  },
]
</script>

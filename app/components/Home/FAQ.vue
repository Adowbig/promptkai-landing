<template>
  <UContainer class="py-24">
    <h1 class="font-heading font-bold text-highlighted text-3xl md:text-5xl text-center md:text-start">
      <UIcon
        name="solar:question-circle-bold"
        class="inline-block size-8 md:size-12 text-primary align-bottom"
      />
      คำถามที่พบบ่อย
    </h1>
    <p class="mt-2 text-muted dark:text-toned md:text-lg text-center md:text-start text-balance">
      หากคุณมีคำถามเกี่ยวกับการใช้งาน <span class="text-primary">พร้อมขาย</span> หรือ
      ต้องการข้อมูลเพิ่มเติม คุณสามารถดูคำถามที่พบบ่อยได้ที่นี่
    </p>
    <!-- Simple Accordion for Demonstration; Will be replaced with Nuxt Content -->
    <UAccordion
      :items="items"
      :ui="{
        root: 'mt-8 space-y-2',
        item: 'border last:border-b bg-default rounded-lg data-[state=open]:border-primary data-[state=open]:bg-muted data-[state=closed]:hover:border-accented',
        label: 'text-lg font-bold',
        trigger: 'p-3',
        body: 'text-default text-sm md:text-base px-3',
        content: 'data-[state=open]:animate-[accordion-down_200ms_ease-in-out] data-[state=closed]:animate-[accordion-up_200ms_ease-in-out]',
      }"
    />
  </UContainer>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'พร้อมขายคืออะไร?',
    content: 'พร้อมขายเป็นแอพพลิเคชันที่ช่วยให้ร้านค้าสามารถจัดการการขายได้อย่างมีประสิทธิภาพ โดยไม่ต้องใช้เครื่อง POS ใหญ่ๆ',
  },
  {
    label: 'ฉันสามารถใช้งานพร้อมขายได้ฟรีหรือไม่?',
    content: 'ใช่! พร้อมขายมีแผนบริการฟรีที่คุณสามารถเริ่มใช้งานได้ทันที แต่หากต้องการฟีเจอร์เพิ่มเติม คุณสามารถอัปเกรดเป็นแผนบริการพรีเมียมได้',
  },
  {
    label: 'ฉันจะเริ่มต้นใช้งานพร้อมขายได้อย่างไร?',
    content: 'คุณสามารถดาวน์โหลดแอพพลิเคชันจาก App Store หรือ Google Play และลงทะเบียนบัญชีผู้ใช้เพื่อเริ่มต้นใช้งาน',
  },
  {
    label: 'มีการสนับสนุนลูกค้าหรือไม่?',
    content: 'ใช่! เรามีทีมสนับสนุนลูกค้าที่พร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง',
  },
])
</script>

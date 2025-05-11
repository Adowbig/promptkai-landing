<template>
  <USlideover
    :close="{ onClick: () => emit('close', false) }"
    title="เมนู"
  >
    <template #body>
      <UNavigationMenu
        :items="items"
        class="w-full"
        color="primary"
        orientation="vertical"
      />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const emit = defineEmits<{ close: [boolean] }>()

const items = ref<NavigationMenuItem[]>([
  {
    label: 'คู่มือการใช้งาน',
    children: [
      {
        label: 'แอพพลิเคชั่น',
        description: 'คู่มือการใช้งานแอพพลิเคชั่น',
        icon: 'solar:smartphone-line-duotone',
      },
      {
        label: 'เว็บไซต์',
        description: 'คู่มือการใช้งานเว็บไซต์ระบบหลังบ้าน',
        icon: 'solar:laptop-minimalistic-line-duotone',
      },
    ],
  },
  {
    label: 'บทความ',
  },
  {
    label: 'เกี่ยวกับ',
    children: [
      {
        label: 'เกี่ยวกับบริการ',
        description: 'ข้อมูลเกี่ยวกับผลิตภัณฑ์',
        icon: 'solar:info-circle-outline',
      },
      {
        label: 'เกี่ยวกับเรา',
        description: 'ข้อมูลเกี่ยวกับเรา',
        icon: 'solar:users-group-rounded-linear',
      },
    ],
  },
  {
    label: 'ติดต่อเรา',
  },
])
</script>

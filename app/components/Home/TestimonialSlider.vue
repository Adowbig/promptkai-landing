<template>
  <div class="mx-auto w-full max-w-3xl text-center">
    <!-- Testimonial image -->
    <div class="relative h-32">
      <div
        class="top-0 left-1/2 before:-z-10 absolute before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-500/25 before:via-25% before:via-primary-500/5 before:to-75% before:to-primary-500/0 before:rounded-full size-[480px] -translate-x-1/2 pointer-events-none"
      >
        <div
          class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]"
        >
          <transition-group name="testimonial-image">
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="active === index"
              :key="`image-${index}`"
              class="-z-10 absolute inset-0 flex flex-col h-full"
            >
              <NuxtImg
                class="top-11 left-1/2 relative rounded-full -translate-x-1/2"
                :src="testimonial.img"
                width="60"
                height="60"
                :alt="testimonial.name"
              />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <!-- Text -->
    <div class="mb-8 transition-all duration-150 ease-in-out delay-300">
      <div
        ref="testimonialsRef"
        class="relative flex flex-col"
      >
        <transition-group name="testimonial-text">
          <div
            v-for="(testimonial, index) in testimonials"
            v-show="active === index"
            :key="`text-${index}`"
            class="w-full"
          >
            <div
              class="text-shadow font-bold text-highlighted text-2xl text-balance before:content-['\201C'] after:content-['\201D']"
            >
              {{ testimonial.quote }}
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="flex justify-between items-center gap-4 mt-4 pt-12 md:pt-0 w-full">
      <button
        class="group/button flex justify-center items-center bg-gray-100 dark:bg-neutral-800 rounded-full size-7"
        @click="handlePrev"
      >
        <Icon
          name="solar:arrow-left-linear"
          class="size-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"
        />
      </button>

      <!-- Name and Org -->
      <div class="flex flex-col items-center gap-1">
        <span class="italic">{{ testimonials.at(active)?.name }}</span>
        <span class="text-muted text-sm italic">{{ testimonials.at(active)?.role }}</span>
      </div>

      <button
        class="group/button flex justify-center items-center bg-gray-100 dark:bg-neutral-800 rounded-full size-7"
        @click="handleNext"
      >
        <Icon
          name="solar:arrow-right-linear"
          class="size-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

const props = withDefaults(
  defineProps<{
    testimonials?: Testimonial[]
    autoRotate?: boolean
    duration?: number
  }>(),
  {
    autoRotate: true,
    duration: 5,
    testimonials: () => [],
  },
)

const active = ref<number>(0)
const autorotate = ref(props.autoRotate)
const testimonialsRef = ref<HTMLElement | null>(null)
let intervalId: number | null = null

function heightFix() {
  if (testimonialsRef.value && testimonialsRef.value.parentElement) {
    testimonialsRef.value.parentElement.style.height = `${testimonialsRef.value.clientHeight}px`
  }
}

function setActiveIndex(index: number) {
  active.value = index
  autorotate.value = false
  resetAutorotate()
}

function startAutorotate() {
  intervalId = window.setInterval(() => {
    active.value = active.value + 1 === props.testimonials.length ? 0 : active.value + 1
    heightFix()
  }, props.duration * 1000)
}

function resetAutorotate() {
  if (intervalId) {
    clearInterval(intervalId)
  }
  if (autorotate.value) {
    startAutorotate()
  }
}

function handleNext() {
  setActiveIndex((active.value + 1) % props.testimonials.length)
}

function handlePrev() {
  setActiveIndex((active.value - 1 + props.testimonials.length) % props.testimonials.length)
}

onMounted(() => {
  heightFix()
  if (autorotate.value) {
    startAutorotate()
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style>
/* Testimonial image transitions */
.testimonial-image-enter-active {
  transition: all 700ms cubic-bezier(0.68, -0.3, 0.32, 1);
}
.testimonial-image-leave-active {
  transition: all 700ms cubic-bezier(0.68, -0.3, 0.32, 1);
}
.testimonial-image-enter-from {
  opacity: 0;
  transform: rotate(-60deg);
}
.testimonial-image-enter-to {
  opacity: 1;
  transform: rotate(0deg);
}
.testimonial-image-leave-from {
  opacity: 1;
  transform: rotate(0deg);
}
.testimonial-image-leave-to {
  opacity: 0;
  transform: rotate(60deg);
}

/* Testimonial text transitions */
.testimonial-text-enter-active {
  transition: all 500ms ease-in-out 200ms;
}
.testimonial-text-leave-active {
  transition: all 300ms ease-out 300ms;
  position: absolute;
}
.testimonial-text-enter-from {
  opacity: 0;
  transform: translateX(-1rem);
}
.testimonial-text-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.testimonial-text-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.testimonial-text-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>

<template>
  <section class="relative py-10 md:py-16">
    <LazyAnimatedBackground />
    <UContainer class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-6 text-center">
        <MotionBlurScale>
          <NuxtImg
            provider="cloudinary"
            src="promptKai_logo-noBG_v7yekk"
            alt="logo"
            class="h-24 md:h-32"
          />
        </MotionBlurScale>
        <div>
          <MotionBlurScale :delay="0.2">
            <h1 class="mb-4 font-heading font-bold text-primary text-5xl lg:text-7xl before:content-['“'] after:content-['”']">
              พร้อมขาย
            </h1>
          </MotionBlurScale>
          <MotionBlurScale :delay="0.4">
            <h1 class="mb-6 font-heading font-bold text-highlighted text-3xl lg:text-5xl text-balance">
              POS ยุคใหม่ ทำงานบนมือถือ
            </h1>
          </MotionBlurScale>

          <MotionBlurScale :delay="0.7">
            <p class="w-full md:max-w-5xl text-toned lg:text-lg text-balance">
              เปลี่ยนร้านค้าของคุณให้เป็นสมาร์ทสโตร์ยุคใหม่ ด้วย <span class="font-bold text-primary">พร้อมขาย</span> แอพ POS บนมือถือที่จะปลดล็อคข้อจำกัดของเครื่อง POS แบบเดิมๆ จัดการทุกธุรกรรมได้อย่างง่ายดาย รวดเร็ว และแม่นยำ บนอุปกรณ์ที่คุณคุ้นเคย พร้อมฟีเจอร์ครบครันที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างก้าวกระโดด ช่วยยกระดับประสิทธิภาพการดำเนินงานร้านค้าของคุณ
            </p>
          </MotionBlurScale>
        </div>
        <MotionBlurScale :delay="0.9">
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
        </MotionBlurScale>
      </div>
    </UContainer>
  </section>
</template>

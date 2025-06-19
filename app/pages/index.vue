<template>
  <div>
    <HomeHero />
    <MotionSlideBlur
      direction="left"
      once
    >
      <HomeFeaturesList />
    </MotionSlideBlur>
    <MotionSlideBlur
      direction="right"
      once
    >
      <HomeTestimonial />
    </MotionSlideBlur>
    <MotionSlideBlur
      direction="left"
      once
    >
      <HomeFAQ />
    </MotionSlideBlur>
    <HomeCTA />
  </div>
</template>

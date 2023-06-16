<script setup lang="ts">
import { TestimonialSliderStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: TestimonialSliderStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <Swiper
    v-editable="props.blok"
    class="max-w-4xl"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperA11y]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
      pauseOnMouseEnter: true
    }"
  >
    <SwiperSlide
      v-for="tm of props.blok.testimonials"
      v-editable="tm"
      :key="tm.name"
      class="h-auto flex-col px-12 py-4"
      style="height: auto !important; display: flex !important"
    >
      <div class="w-full text-center text-5xl font-semibold text-charcoal-400">“</div>
      <p class="text-center text-2xl italic leading-10 text-charcoal-600">{{ tm.text }}</p>
      <div class="mt-4 text-right text-charcoal-400">- {{ tm.name }}</div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { HomeFeaturesPanelStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HomeFeaturesPanelStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="flex flex-col gap-x-8 gap-y-8 sm:gap-y-20 md:grid md:grid-cols-2 lg:items-start">
    <div class="px-6 lg:pr-2 lg:pt-4">
      <div class="prose prose-charcoal mx-auto max-w-xl overflow-hidden lg:prose-xl prose-li:-my-2 lg:mx-0">
        <h2>{{ props.blok.heading }}</h2>
        <div v-html="renderRichText(props.blok.content)"></div>
      </div>
    </div>
    <div class="mx-auto max-w-full sm:mx-0 md:block" style="min-width: 1em">
      <Swiper
        v-editable="props.blok"
        class="aspect-video max-w-xl overflow-hidden bg-gray-900 shadow-md ring-1 ring-white/10 md:aspect-square md:rounded-2xl"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperA11y]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 8000,
          pauseOnMouseEnter: true
        }"
      >
        <SwiperSlide v-for="image in props.blok.images" :key="image.filename" class="relative h-full w-full">
          <NuxtPicture
            width="592"
            height="592"
            loading="lazy"
            :modifiers="{ smart: true }"
            :src="image.filename"
            :imgAttrs="{ class: 'max-h-full absolute inset-0 object-cover' }"
          ></NuxtPicture>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

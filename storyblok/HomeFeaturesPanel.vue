<script setup lang="ts">
import { HomeFeaturesPanelStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HomeFeaturesPanelStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
    <div class="px-6 md:px-0 lg:pr-4 lg:pt-4">
      <div class="prose prose-charcoal mx-auto max-w-2xl lg:prose-xl lg:mx-0 lg:max-w-lg">
        <h2>{{ props.blok.heading }}</h2>
        <div v-html="renderRichText(props.blok.content)"></div>
      </div>
    </div>
    <div class="mx-auto w-full sm:mx-0 sm:max-w-none">
      <Swiper
        v-editable="props.blok"
        class="aspect-square overflow-hidden bg-gray-900 ring-1 ring-white/10"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperA11y]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 8000,
          pauseOnMouseEnter: true
        }"
      >
        <SwiperSlide
          v-for="image in props.blok.images"
          :key="image.filename"
          class="h-auto flex-col"
          style="height: auto !important; display: flex !important"
        >
          <NuxtPicture
            width="592"
            height="592"
            loading="lazy"
            :modifiers="{ smart: true }"
            :src="image.filename"
            :imgAttrs="{ class: 'w-full h-full object-cover' }"
          ></NuxtPicture>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

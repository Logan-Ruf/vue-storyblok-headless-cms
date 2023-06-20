<script setup lang="ts">
import { HomeFeaturesPanelStoryblok } from "~/types/component-types-sb"
import { useElementBounding, breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import { TabsVerticleFloaterStoryblok } from "~/types/component-types-sb"
const breakpoints = useBreakpoints(breakpointsTailwind)
const md = breakpoints.isGreaterOrEqual("md")

interface PropTypes {
  blok: HomeFeaturesPanelStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="flex flex-col gap-x-8 gap-y-16 sm:gap-y-20 md:grid md:grid-cols-2 lg:items-start">
    <div class="px-6 md:px-0 lg:pr-4 lg:pt-4">
      <div class="prose prose-charcoal mx-auto max-w-xl overflow-hidden lg:prose-xl prose-li:-my-2 lg:mx-0">
        <h2>{{ props.blok.heading }}</h2>
        <div v-html="renderRichText(props.blok.content)"></div>
      </div>
    </div>
    <div class="mx-auto sm:mx-0 md:block" v-if="md">
      <Swiper
        v-editable="props.blok"
        class="aspect-square overflow-hidden rounded-2xl bg-gray-900 shadow-md ring-1 ring-white/10"
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
          class="relative h-auto"
          style="height: auto !important; display: flex !important"
        >
          <NuxtPicture
            width="592"
            height="592"
            loading="lazy"
            :modifiers="{ smart: true }"
            :src="image.filename"
            :imgAttrs="{ class: 'absolute inset-0 object-cover' }"
          ></NuxtPicture>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue"
import { AssetStoryblok, MultilinkStoryblok } from "~/types/component-types-sb"

interface Props {
  img: AssetStoryblok
  link: MultilinkStoryblok
}
const props = defineProps<Props>()
const slots = useSlots()
</script>
<template>
  <article
    class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-80 hover:shadow-xl motion-safe:transition-shadow motion-safe:duration-300 sm:pt-48 lg:pt-80"
  >
    <NuxtPicture
      :imgAttrs="{
        class:
          'absolute inset-0 -z-10 h-full w-full object-cover origin-center motion-safe:transition-all group-hover:scale-110 motion-safe:duration-1000 ease-in-out brightness-90 group-hover:brightness-100'
      }"
      :src="props.img.filename"
      :alt="props.img.alt"
      loading="lazy"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 group-hover:opacity-90 motion-safe:transition-opacity motion-safe:duration-1000"
    />

    <span
      v-if="slots.category"
      class="absolute left-5 top-6 -z-10 rounded-sm bg-charcoal-50 px-2 text-xs font-medium leading-5 text-charcoal-800"
    >
      <slot name="category" />
    </span>

    <div
      v-if="slots.preheading"
      class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-charcoal-300"
    >
      <slot name="preheading" />
    </div>

    <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
      <nuxt-link :href="props.link.url">
        <span class="absolute inset-0" />
        <slot name="heading" />
      </nuxt-link>
    </h3>

    <div
      v-if="slots.subheading"
      class="text flex flex-wrap items-center gap-y-1 overflow-hidden pt-1.5 text-charcoal-100"
    >
      <slot name="subheading" />
    </div>
  </article>
</template>

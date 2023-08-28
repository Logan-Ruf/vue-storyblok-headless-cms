<script setup lang="ts">
import { HeaderBannerStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HeaderBannerStoryblok
}

const show = ref(true)
const props = defineProps<PropTypes>()
</script>

<template>
  <div
    v-if="show"
    v-editable="props.blok"
    class="relative flex items-center gap-x-6 overflow-hidden bg-charcoal-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
  >
    <NuxtLink :to="props.blok.link?.url" class="relative z-20 leading-6 text-white">
      <div v-html="renderRichText(props.blok.text)" />
    </NuxtLink>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" @click="show = false">
        <span class="sr-only">Dismiss</span>
        <Icon name="octicon:x-24" class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
    <svg
      viewBox="0 0 1024 1024"
      class="absolute -top-[32rem] left-1/2 z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      aria-hidden="true"
    >
      <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1219)" fill-opacity="1" />
      <defs>
        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1219">
          <stop stop-color="#2e2e2f" />
          <stop offset="1" stop-color="#171718" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { HeaderBannerStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HeaderBannerStoryblok
}

const show = ref(true)
const props = defineProps<PropTypes>()
</script>

<template>
  <div v-if="show" class="flex items-center gap-x-6 bg-sand-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <a href="#" class="leading-6 text-white">
      <div v-html="renderRichText(props.blok.text)" />
    </a>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" @click="show = false">
        <span class="sr-only">Dismiss</span>
        <Icon name="octicon:x-24" class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderBannerStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HeaderBannerStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div class="flex items-center gap-x-6 bg-sand-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <p class="text-sm leading-6 text-white">
      <a href="#" v-html="renderRichText(props.blok.text)"></a>
    </p>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span class="sr-only">Dismiss</span>
        <Icon name="octicon:x-24" class="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

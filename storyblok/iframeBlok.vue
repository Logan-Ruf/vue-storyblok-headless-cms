<script setup lang="ts">
import { IframeBlokStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: IframeBlokStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <iframe
    v-editable="props.blok"
    class="h-full min-h-[50rem] w-full"
    :src="props.blok.url?.url"
    frameborder="0"
    loading="lazy"
    allowfullscreen
  ></iframe>
</template>

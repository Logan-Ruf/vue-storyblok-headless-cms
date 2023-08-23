<script setup lang="ts">
import { ChipButtonStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: ChipButtonStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <NuxtLink
    v-editable="props.blok"
    :to="props.blok.link?.url"
    class="box-border inline-block rounded-full border-2 border-white px-4 py-1.5 font-semibold text-white duration-75 hover:bg-white/20 motion-safe:transition-colors"
  >
    {{ props.blok.text }}
  </NuxtLink>
</template>

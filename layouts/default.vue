<script setup lang="ts">
import { ref, provide } from "vue"
import { useElementSize } from "@vueuse/core"

const story = await useAsyncStoryblok("layouts/default", {
  version: "draft"
})

const headerWrapper = ref<HTMLElement | null>(null)
const { height } = useElementSize(headerWrapper)
provide("headerHeight", height)
</script>

<template>
  <div>
    <div ref="headerWrapper" class="top absolute z-30 w-full">
      <StoryblokComponent v-for="blok in story?.content?.header" :key="blok._uid" :blok="blok" />
    </div>
    <slot />
    <StoryblokComponent v-for="blok in story?.content?.footer" :key="blok._uid" :blok="blok" />
  </div>
</template>

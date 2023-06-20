<script setup lang="ts">
const story = await useAsyncStoryblok("layouts/default", {
  version: "draft"
})
</script>

<template>
  <div>
    <div>
      <StoryblokComponent v-for="blok in story?.content?.header" :key="blok._uid" :blok="blok" />
    </div>
    <slot />
    <StoryblokComponent v-for="blok in story?.content?.footer" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup lang="ts">
import HeroComponent from "~/components/HeroComponent.vue"
import { HeroStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HeroStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <HeroComponent v-editable="props.blok" :image="props.blok?.image">
    <template #title>{{ props.blok.title }}</template>
    <template #big-text>{{ props.blok.bigText }}</template>
    <template v-if="props.blok.smallText" #small-text>{{ props.blok.smallText }}</template>
    <template #ctas>
      <StoryblokComponent v-for="childBlok in props.blok.ctas" :key="childBlok._uid" :blok="childBlok" />
    </template>
  </HeroComponent>
</template>

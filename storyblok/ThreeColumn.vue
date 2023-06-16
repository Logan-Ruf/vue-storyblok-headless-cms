<script setup lang="ts">
import ThreeColumnComponent from "~/components/ThreeColumnComponent.vue"
import { ThreeColumnStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: ThreeColumnStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div>
    <ThreeColumnComponent v-editable="props.blok">
      <template #title>{{ props.blok.title }}</template>
      <template #description>{{ props.blok.description }}</template>
      <StoryblokComponent v-for="child_block in props.blok.content" :key="child_block._uid" :blok="child_block" />
    </ThreeColumnComponent>
  </div>
</template>

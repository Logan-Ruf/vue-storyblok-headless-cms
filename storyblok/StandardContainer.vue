<script setup lang="ts">
import { StandardContainerStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: StandardContainerStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="px-6 py-24 sm:py-32 lg:px-8">
    <StoryblokComponent v-for="child_block in blok.body" :key="child_block._uid" :blok="child_block" />
  </div>
</template>

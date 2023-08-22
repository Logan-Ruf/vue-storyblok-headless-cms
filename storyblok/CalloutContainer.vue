<script setup lang="ts">
import { CalloutContainerStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: CalloutContainerStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div
    v-editable="props.blok"
    class="flex flex-col items-center justify-center gap-y-12 divide-charcoal-400 lg:flex-row lg:divide-x"
  >
    <StoryblokComponent v-for="child_block in blok.items" :key="child_block._uid" :blok="child_block" />
  </div>
</template>

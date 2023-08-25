<script setup lang="ts">
import { ContactCTAStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: ContactCTAStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div
    v-editable="props.blok"
    class="flex flex-col flex-nowrap justify-center gap-y-6 divide-none divide-charcoal bg-charcoal-800 p-8 sm:flex-row sm:divide-x"
  >
    <StoryblokComponent v-for="child_block in blok.body" :key="child_block._uid" :blok="child_block" />
  </div>
</template>

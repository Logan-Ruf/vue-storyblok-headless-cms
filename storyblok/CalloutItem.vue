<script setup lang="ts">
import { CalloutItemStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: CalloutItemStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="flex max-w-xl flex-col items-center gap-6 px-8">
    <Icon :name="props.blok.icon" class="h-16 w-16 text-charcoal-500"></Icon>
    <h3 class="text-4xl font-bold">{{ props.blok.heading }}</h3>
    <div class="prose text-center md:prose-lg prose-a:text-blue-600" v-html="renderRichText(props.blok.content)"></div>
  </div>
</template>

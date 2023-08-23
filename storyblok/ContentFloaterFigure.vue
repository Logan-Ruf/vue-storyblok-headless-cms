<script setup lang="ts">
import { ContentFloaterFigureStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: ContentFloaterFigureStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="flex flex-col-reverse text-center text-5xl font-bold text-sand-800">
    <dt class="text-lg font-semibold">
      {{ props.blok.text }}
    </dt>
    <dd>{{ props.blok.value }}</dd>
  </div>
</template>

<script setup lang="ts">
import { ImageCardStoryblok } from "~/types/component-types-sb"
import ImageCardComponent from "~/components/ImageCardComponent.vue"
interface PropTypes {
  blok: ImageCardStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <ImageCardComponent v-editable="props.blok" :img="props.blok.image" :link="props.blok.link">
    <template #category v-if="props.blok.category">
      {{ props.blok.category }}
    </template>
    <template #preheading v-if="props.blok.preheading">
      {{ props.blok.preheading }}
    </template>
    <template #heading v-if="props.blok.heading">
      {{ props.blok.heading }}
    </template>
    <template #subheading v-if="props.blok.subheading">
      {{ props.blok.subheading }}
    </template>
  </ImageCardComponent>
</template>

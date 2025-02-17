<script setup lang="ts">
import { CustomContentStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: CustomContentStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok">
    <div v-html="props.blok.html"></div> 
  </div>
</template>

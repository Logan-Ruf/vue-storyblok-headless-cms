<script setup lang="ts">
import { computed } from "vue"

interface PropTypes {
  blok: Object
}

const props = defineProps<PropTypes>()

const shared_styles = {
  button: "group rounded-md text-sm font-semibold leading-6 "
}
const button_styles = computed(() => {
  if (props.blok.dark) {
    return shared_styles.button + "text-black"
  } else {
    return shared_styles.button + "text-white"
  }
})
</script>

<template>
  <NuxtLink v-editable="props.blok" :href="props.blok.link.url" :class="button_styles">
    {{ props.blok.text }}
    <span aria-hidden="true" class="pr-1.5 transition-all group-hover:pl-1.5 group-hover:pr-0">→</span>
  </NuxtLink>
</template>

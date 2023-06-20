<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <NuxtPicture
      v-for="image in props.blok?.images"
      :key="image.id"
      :imgAttrs="{ class: 'h-auto max-w-full' }"
      :src="image?.filename"
      :alt="image?.alt"
      loading="lazy"
    >
    </NuxtPicture>
  </div>
</template>

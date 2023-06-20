<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="mb-12">
    <h2 class="mx-auto pb-20 text-center text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Gallery</h2>
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-2 md:grid-cols-3">
      <NuxtPicture
        v-for="image in props.blok?.images"
        :key="image.id"
        width="420"
        height="280"
        :imgAttrs="{ class: 'h-auto max-w-full' }"
        :src="image?.filename"
        :alt="image?.alt"
        loading="lazy"
      >
      </NuxtPicture>
    </div>
  </div>
</template>

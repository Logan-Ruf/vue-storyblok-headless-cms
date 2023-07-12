<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="mx-auto pt-10">
    <h1 class="text-center text-4xl font-bold tracking-tight text-charcoal-900 sm:mt-10 sm:text-6xl">
      {{ props.blok.title }}
    </h1>
    <h2 v-if="props.blok.subtitle1" class="mt-6 text-center text-2xl leading-8 text-charcoal-700">
      {{ props.blok?.subtitle1 }}
    </h2>
    <h2 v-if="props.blok.subtitle2" class="mt-3 text-center text-2xl leading-8 text-charcoal-700">
      {{ props.blok?.subtitle2 }}
    </h2>
  </div>
</template>

<script setup lang="ts">
interface PropTypes {
  blok: Object
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="flex flex-col-reverse text-center text-5xl font-bold text-sand-800">
    <dt class="text-lg font-semibold">
      {{ props.blok.text }}
    </dt>
    <dl>{{ props.blok.value }}</dl>
  </div>
</template>

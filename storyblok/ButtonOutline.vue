<script setup lang="ts">
interface PropTypes {
  blok: Object
}

const props = defineProps<PropTypes>()
</script>

<template>
  <NuxtLink
    v-editable="props.blok"
    :href="props.blok.link.url"
    class="rounded-md border border-sand-1000 px-3.5 py-2.5 text-sm font-semibold text-sand-1000 shadow-sm hover:border-sand-800 hover:bg-sand-100"
    >{{ props.blok.text }}
  </NuxtLink>
</template>

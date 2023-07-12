<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()

const styles = {
  image: props.blok.imageLeft ? " order-first" : " order-last",
  text: props.blok.imageLeft ? " order-last pt-10" : " order-first pb-10"
}
</script>

<template>
  <div v-editable="props.blok" class="mx-auto grid h-full max-w-7xl grid-cols-1 gap-x-8 pt-20 md:grid-cols-2 md:px-6">
    <NuxtPicture
      :class="'py-6 sm:py-0' + styles.image"
      :src="props.blok.image.filename"
      :imgAttrs="{ class: 'object-cover', alt: props.blok.image.alt }"
    >
    </NuxtPicture>
    <p
      :class="
        'order-first whitespace-pre-wrap px-2 text-center text-lg leading-8 text-charcoal-700 md:p-0 md:text-justify' +
        styles.text
      "
    >
      {{ props.blok.text }}
    </p>
  </div>
</template>

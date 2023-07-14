<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok">
    <iframe
      class="left-0 top-0 mx-auto aspect-video h-full w-full pt-10 md:w-[60rem] lg:w-[80rem]"
      :src="props.blok.youtubeLink.url + '?modestbranding=1'"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

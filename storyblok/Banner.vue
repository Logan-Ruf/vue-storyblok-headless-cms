<script setup lang="ts">
interface PropTypes {
  blok: blok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="relative flex h-56 overflow-hidden bg-charcoal-900 lg:h-72">
    <div class="relative z-10 mx-auto pt-20 text-center sm:pt-16 lg:m-auto lg:pt-10">
      <h2 v-if="props.blok?.bannerTitle" class="text-4xl font-bold tracking-tight text-white">
        {{ props.blok?.bannerTitle }}
      </h2>
      <div v-if="props.blok?.bannerText">
        <h3 class="mt-4 text-2xl tracking-tight text-white">{{ props.blok?.bannerText }}</h3>
        <div class="mt-2 justify-center border-t-2 border-white"></div>
      </div>
    </div>
    <svg
      class="absolute -top-2 w-screen -translate-y-1/2 transform"
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="512" cy="512" r="512" fill="url(#0e5cb4c7-10e5-4dc5-b523-ba382132f3fb)" fill-opacity="1" />
      <defs>
        <radialGradient id="0e5cb4c7-10e5-4dc5-b523-ba382132f3fb">
          <stop stop-color="#080809" />
          <stop offset="1" stop-color="#171718" />
        </radialGradient>
      </defs>
    </svg>
    <NuxtPicture
      :src="props.blok?.image.filename"
      :imgAttrs="{
        class: 'opacity-25 absolute inset-0 w-full object-cover h-full',
        alt: props.blok?.image.alt
      }"
    ></NuxtPicture>
  </div>
</template>

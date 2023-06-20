<script setup lang="ts">
interface PropTypes {
  image: Object
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div class="relative bg-white">
    <div
      class="px-6 pb-20 pt-10 sm:pb-28 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-x-8 lg:px-8 lg:pb-20 lg:pr-10 lg:pt-20"
    >
      <div class="mx-auto max-w-2xl lg:col-span-2 lg:mx-0">
        <h1 class="mt-24 text-4xl font-bold tracking-tight text-charcoal-900 sm:mt-10 sm:text-6xl">
          <slot name="title"></slot>
        </h1>
        <p class="mt-6 whitespace-pre-wrap text-lg leading-8 text-charcoal-700">
          <slot name="big-text"></slot>
        </p>
        <div
          class="g:max-w-2xl hidden lg:row-start-3 lg:mt-10 lg:block lg:border-t-2 lg:border-charcoal-600/50 lg:pt-10"
        ></div>
      </div>
      <div class="relative -mx-6 h-full pb-6 pt-6 lg:col-span-3 lg:row-span-2">
        <NuxtPicture
          :imgAttrs="{
            class: 'aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
          }"
          :src="props.image.filename"
          :alt="props.image.alt"
        />
      </div>
      <div class="mx-auto max-w-2xl lg:col-span-2 lg:mx-0">
        <p class="whitespace-pre-wrap text-base leading-7 text-charcoal-600">
          <slot name="small-text"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

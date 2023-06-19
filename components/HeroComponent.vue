<script setup lang="ts">
interface PropTypes {
  image: Object
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div class="px-6 pb-20 pt-10 sm:pb-28 lg:col-span-5 lg:px-0 lg:pb-56 lg:pr-10 lg:pt-48 xl:col-span-6">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h1 class="mt-24 text-4xl font-bold tracking-tight text-charcoal-900 sm:mt-10 sm:text-6xl">
            <slot name="title"></slot>
          </h1>
          <p class="mt-6 whitespace-pre-wrap text-lg leading-8 text-charcoal-700">
            <slot name="big-text"></slot>
          </p>
          <div
            class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-2xl lg:border-t-2 lg:border-charcoal-600/50 lg:pt-10"
          ></div>
          <p class="whitespace-pre-wrap text-base leading-7 text-charcoal-600">
            <slot name="small-text"></slot>
          </p>
        </div>
      </div>
      <div class="relative lg:col-span-7 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <NuxtPicture
          :imgAttrs="{
            class: 'aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
          }"
          :src="props.image.filename"
          :alt="props.image.alt"
        />
      </div>
    </div>
  </div>
</template>

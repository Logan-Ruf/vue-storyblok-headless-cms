<script setup lang="ts">
import { ref } from "vue"
import { useElementBounding } from "@vueuse/core"
import TopoMap from "@/components/svg/TopoMap.vue"

const wrapper = ref(null)
const { y, height } = useElementBounding(wrapper)

const slots = useSlots()
</script>

<template>
  <div
    ref="wrapper"
    class="sm:pb-18 mx-auto my-0 max-w-7xl pb-24 sm:my-12 sm:px-6 lg:px-8"
    :style="`perspective: 100px; perspective-origin: center ${y + height / 2}px;`"
  >
    <article
      class="z-3d relative isolate z-10 overflow-hidden bg-sand-300 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-16"
    >
      <div class="isolate overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl lg:mx-0">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl">
              <slot name="title"></slot>
            </h1>
            <p class="mt-6 whitespace-pre-wrap text-lg leading-8 text-charcoal-600">
              <slot name="big-text"></slot>
            </p>
          </div>
          <div
            class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-5 gap-y-12 lg:mx-0 lg:mt-8 lg:max-w-none lg:grid-cols-12"
          >
            <div v-if="!!slots['content-floater-figures']" class="relative lg:order-last lg:col-span-5">
              <dl class="flex flex-row items-stretch justify-evenly border-l border-sand-700 py-6 pl-3">
                <slot name="content-floater-figures"></slot>
              </dl>
            </div>
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p class="whitespace-pre-wrap">
                <slot name="small-text"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[84rem] w-[84rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="1" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stop-color="#F9F4ED" />
            <stop offset="1" stop-color="#B8AEA2" />
          </radialGradient>
        </defs>
      </svg>
      <TopoMap class="absolute -right-1/4 bottom-0 top-0 -z-20 h-full opacity-75 lg:right-0" />
    </article>
  </div>
</template>

<style scoped>
.z-3d {
  transform: translateZ(6px) scale(0.97);
}
@media (max-width: 639px) {
  .z-3d {
    transform: translateZ(0) scale(1);
  }
}
</style>

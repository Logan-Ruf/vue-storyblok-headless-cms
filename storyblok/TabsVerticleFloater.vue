<script setup lang="ts">
import { ref } from "vue"
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/vue"
import { useElementBounding, breakpointsTailwind, useBreakpoints } from "@vueuse/core"
import { TabsVerticleFloaterStoryblok } from "~/types/component-types-sb"

// Handle 3D parallax effect
const tab_wrapper = ref(null)
const { y: tab_y, height: tab_height } = useElementBounding(tab_wrapper)
const panel_background = ref(null)
const { y: panel_y, height: panel_height } = useElementBounding(panel_background)

// Change tab accessibility buttons based on screen size
const breakpoints = useBreakpoints(breakpointsTailwind)
const small = breakpoints.isSmallerOrEqual("md")

interface PropTypes {
  blok: TabsVerticleFloaterStoryblok
}

const props = defineProps<PropTypes>()

// Create component templates for each development
const panels = props.blok.tabs.map((tab) => {
  return {
    props: {
      tab: {
        type: Object,
        required: true
      }
    },
    template: `
      <article class="z-10 z-10 flex flex-col gap-4 py-6 pl-12 pr-6" v-editable="tab">
      <slot :tab="tab"></slot>
      </article>
      `
  }
})
</script>

<template>
  <article v-editable="props.blok" class="bg-white py-24 sm:py-32 md:px-6 lg:px-8">
    <div class="mx-auto mb-28 max-w-2xl px-4 text-center md:px-0">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ props.blok.title }}</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">{{ props.blok.subtitle }}</p>
    </div>
    <TabGroup :vertical="!small" class="relative mx-auto max-w-7xl grid-cols-11 sm:rounded-lg md:grid" as="div">
      <div
        ref="tab_wrapper"
        class="z-10 col-span-4 my-auto flex h-full items-center justify-center"
        :style="`perspective: 10px; perspective-origin: center ${tab_y + tab_height / 2}px`"
      >
        <TabList
          class="tab-3d relative mt-4 flex h-fit flex-row overflow-y-scroll rounded-xl bg-charcoal-50 p-2 shadow-lg md:flex-grow md:flex-col md:gap-2 md:overflow-hidden md:px-2 md:py-6 lg:px-4"
        >
          <Tab v-for="tab in props.blok.tabs" :key="tab._uuid" v-slot="{ selected }" as="template">
            <button
              :class="[
                'mx-1 flex items-center gap-4 rounded-lg px-1 py-2.5 transition-all md:p-3',
                selected ? 'bg-white/75 shadow-md' : 'text-charcoal hover:bg-white/30 hover:text-charcoal-700'
              ]"
            >
              <nuxt-img
                :src="tab.logo.filename"
                :alt="tab.logo.alt"
                class="hidden h-20 w-20 shrink-0 rounded-xl border-2 border-white shadow-md md:block lg:h-24 lg:w-24"
                width="288"
                height="288"
                loading="lazy"
              />
              <span class="font-semibold md:text-xl">{{ tab.title }}</span>
            </button>
          </Tab>
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/4 -z-10 hidden h-[84rem] w-[84rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] md:block"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#community-tabs-bg)" fill-opacity=".75" />
            <defs>
              <radialGradient id="community-tabs-bg">
                <stop stop-color="#949495" />
                <stop offset="1" stop-color="#D9DADB" />
              </radialGradient>
            </defs>
          </svg>
        </TabList>
      </div>

      <TabPanels v-slot="{ selectedIndex }" class="relative col-span-7 mt-4 grid grid-cols-1 grid-rows-1 md:static">
        <div
          ref="panel_background"
          class="absolute inset-0 col-start-3 col-end-11 md:-inset-2 md:left-4 md:top-1"
          :style="`perspective: 10px; perspective-origin: center ${panel_y + panel_height / 2}px`"
        >
          <span class="panel-3d absolute inset-0 overflow-hidden bg-sand-200/80">
            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 top-1/4 -z-10 h-[84rem] w-[84rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#community-panel-bg)" fill-opacity=".8" />
              <defs>
                <radialGradient id="community-panel-bg">
                  <stop stop-color="#F9F4ED" />
                  <stop offset="1" stop-color="#B8AEA2" />
                </radialGradient>
              </defs>
            </svg>
          </span>
        </div>

        <Transition as="div" mode="out-in" name="slide-fade">
          <component :is="panels[selectedIndex]" :tab="props.blok.tabs[selectedIndex]">
            <template v-slot="{ tab }">
              <NuxtPicture
                class="duration-500"
                :imgAttrs="{
                  class: 'aspect-[3/2] w-full rounded-2xl object-cover shadow-md transition-all duration-500'
                }"
                :src="tab.image.filename"
                :alt="tab.image.alt"
                loading="lazy"
              />
              <h1
                class="mr-18 mt-2 text-2xl font-semibold leading-8 text-charcoal-900 transition-all delay-150 duration-500"
              >
                {{ tab.title }}
              </h1>
              <p class="mr-20 text-base leading-7 text-gray-600 transition-all delay-250 duration-500">
                {{ tab.content }}
              </p>
              <div class="delay-400 duration-500">
                <a
                  :href="tab.link.url"
                  class="delay-350 rounded-md bg-sand-1000 px-3.5 py-2.5 text-sm font-semibold text-charcoal-50 shadow-sm hover:bg-sand-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >Read more</a
                >
              </div>
            </template>
          </component>
        </Transition>
      </TabPanels>
    </TabGroup>
  </article>
</template>

<style>
/*We don't actually use this, but vue uses it to calculate the duration of the transition */
.slide-fade-leave-active {
  transition-duration: 0.85s;
}

.slide-fade-enter-from > * {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to > * {
  opacity: 0;
}

@media (min-width: 768px) {
  .panel-3d {
    transform: translateZ(-1px) scaleY(1.3) scaleX(1.2);
  }

  .tab-3d {
    transform: translateZ(1.2px) scale(0.94);
  }
}
</style>

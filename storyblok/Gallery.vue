<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
import { ref } from "vue"
import { GalleryStoryblok } from "~/types/component-types-sb"
interface PropTypes {
  blok: GalleryStoryblok
}

const props = defineProps<PropTypes>()

const selectedTab = ref(0)
const selectedTabHeading = ref(0)

function changeTab(index) {
  selectedTab.value = index
  selectedTabHeading.value = props.blok.panels[index].heading
}

const getSelectedTabHeading = computed(() =>
  selectedTabHeading.value ? selectedTabHeading.value : props.blok.panels[0].heading
)
</script>

<template>
  <div v-editable="props.blok" class="mb-10">
    <div class="relative flex h-56 overflow-hidden bg-charcoal-900 lg:h-72">
      <div class="relative z-10 mx-auto pt-20 text-center sm:pt-16 lg:m-auto lg:pt-10">
        <h2 class="text-4xl font-bold tracking-tight text-white">Gallery</h2>
        <div>
          <h3 class="mt-4 text-2xl tracking-tight text-white">{{ getSelectedTabHeading }}</h3>
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
        :src="props.blok?.headingImage.filename"
        :imgAttrs="{
          class: 'opacity-25 absolute inset-0 w-full object-cover h-full',
          alt: props.blok?.headingImage.alt
        }"
      ></NuxtPicture>
    </div>
    <div class="flex sm:hidden">
      <Menu as="div" class="relative mx-auto inline-block py-10 text-left">
        <div>
          <MenuButton
            class="flex rounded-lg bg-charcoal-100/50 px-6 py-3 font-semibold text-charcoal-700 hover:bg-charcoal-100"
          >
            Select a Gallery
            <Icon
              name="lucide:chevron-down"
              class="m-auto ml-2 h-5 w-5 text-charcoal-600 motion-safe:transition-colors motion-safe:duration-500"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="p-4">
              <MenuItem v-for="(tab, index) in props.blok.panels" v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-3xl p-4 text-sm font-semibold text-charcoal-700'
                  ]"
                  @click="changeTab(index)"
                >
                  {{ tab.heading }}
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <div class="mx-auto flex flex-col items-center px-3 sm:mt-16 lg:px-8">
      <TabGroup :selectedIndex="selectedTab" @change="changeTab">
        <TabList
          class="mb-4 hidden max-w-full space-x-1 overflow-y-scroll rounded-xl bg-charcoal-100/50 p-1 sm:flex md:mb-2 lg:overflow-hidden"
        >
          <Tab v-for="tab in props.blok.panels" :key="tab._uid" v-slot="{ selected }" as="template">
            <button
              :class="[
                'rounded-lg px-6 py-3',
                selected ? 'bg-white text-charcoal-900' : 'text-charcoal-700 hover:bg-charcoal-100'
              ]"
            >
              {{ tab.heading }}
              <div
                :class="['border-t-2 border-charcoal-600/50 transition-all duration-300', selected ? 'w-full' : 'w-0']"
              ></div></button
          ></Tab>
        </TabList>
        <TabPanels>
          <TabPanel v-for="child_block in blok.panels" class="mx-auto w-screen max-w-6xl overflow-hidden md:w-full">
            <StoryblokComponent :key="child_block._uid" :blok="child_block" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

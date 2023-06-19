<script setup lang="ts">
import { HomeFeaturesStoryblok } from "~/types/component-types-sb"
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue"

interface PropTypes {
  blok: HomeFeaturesStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">{{ props.blok.title }}</h2>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
        >
          <div v-for="stat in blok.stats" :key="stat._uid" v-editable="stat" class="flex flex-col bg-sand-200 p-8">
            <dt class="text-sm font-semibold leading-6 text-sand-700">{{ stat.name }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-sand-1000">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="mx-auto mt-16 flex max-w-7xl flex-col items-center px-6 lg:px-8">
      <TabGroup>
        <TabList class="mb-2 flex space-x-1 rounded-xl bg-charcoal-100/50 p-1">
          <Tab v-for="tab in props.blok.panels" :key="tab._uid" as="template" v-slot="{ selected }">
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
          <TabPanel v-for="child_block in blok.panels">
            <StoryblokComponent :key="child_block._uid" :blok="child_block" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue"
import { HomeFeaturesStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HomeFeaturesStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div v-editable="props.blok" class="bg-white py-24 sm:py-20">
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
    <div class="mx-auto mt-16 flex flex-col items-center px-3 lg:px-8">
      <TabGroup>
        <TabList
          class="mb-4 flex max-w-full space-x-1 overflow-y-scroll rounded-xl bg-charcoal-100/50 p-1 md:mb-2 lg:overflow-hidden"
        >
          <Tab
            v-for="tab in props.blok.panels"
            :key="tab._uid"
            v-slot="{ selected }"
            as="template"
            @click="$event.target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })"
          >
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

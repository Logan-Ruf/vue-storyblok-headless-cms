<script setup lang="ts">
import { ContactCTAItemStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: ContactCTAItemStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <section
    v-editable="props.blok"
    class="flex max-w-3xl flex-grow flex-wrap items-end justify-between gap-6 px-6 text-white"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-row items-center gap-x-4">
        <span
          class="inline-flex h-10 w-10 rotate-45 transform rounded-t-full rounded-bl-full bg-gradient-to-br from-charcoal-50 to-charcoal-100"
        >
          <Icon :name="props.blok.icon" class="m-auto h-5 w-5 -rotate-45 text-charcoal-800" />
        </span>
        <h1 class="text-2xl font-semibold">{{ props.blok.title }}</h1>
      </div>
      <div class="text-lg" v-html="renderRichText(props.blok.content)"></div>
    </div>
    <div class="flex gap-4">
      <StoryblokComponent v-for="child_block in props.blok.buttons" :key="child_block._uid" :blok="child_block" />
    </div>
  </section>
</template>

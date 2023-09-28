<script setup lang="ts">
interface PropTypes {
  model: Object
  slug: String
}

const props = defineProps<PropTypes>()
</script>

<template>
  <div
    class="cursor-pointer border border-charcoal-100 shadow-none shadow-charcoal-500/25 transition-shadow duration-300 hover:shadow-md hover:shadow-charcoal-500/25"
    @click="navigateTo('/' + props.slug)"
  >
    <div class="relative">
      <div v-if="props.model.matterPortLink?.url">
        <span
          class="absolute right-5 top-6 z-10 rounded-sm bg-charcoal-50 px-2 text-xs font-medium leading-5 text-charcoal-800"
        >
          3D Walkthrough
        </span>
      </div>
      <NuxtPicture
        :src="props.model.featuredImage.filename"
        :imgAttrs="{
          alt: props.model.featuredImage.alt,
          class: 'aspect-video object-cover'
        }"
      ></NuxtPicture>
      <h2 class="p-2 text-3xl font-bold tracking-tight text-charcoal-700">
        {{ props.model.model }}
      </h2>
      <div class="grid grid-cols-2 justify-between gap-y-2 px-2 pb-4 md:grid-cols-1 lg:grid-cols-2">
        <div v-for="stat in props.model.stats.filter((stat) => stat.label != 'Floor')" class="space-x-2">
          <Icon :name="stat.icon" class="text-charcoal-500" />
          <span class="font-semibold text-charcoal-700"> {{ stat.value }} {{ stat.label }} </span>
        </div>
      </div>
      <NuxtLink
        v-if="props.model.matterPortLink?.url"
        :to="props.model.matterPortLink?.url"
        target="_blank"
        class="flex w-full items-center justify-center gap-3 border-t border-charcoal-100 p-2 transition duration-300 hover:bg-sand-300"
        @click.stop
      >
        <Icon name="cil:3d" class="h-6 w-6 text-sand-700"></Icon>
        <h3 class="text-2xl font-semibold tracking-tight text-sand-700 md:text-xl">View 3D Walkthrough</h3>
      </NuxtLink>
    </div>
  </div>
</template>

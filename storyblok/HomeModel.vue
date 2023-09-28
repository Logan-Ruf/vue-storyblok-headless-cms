<script setup lang="ts">
import { HomeModelStoryblok } from "~/types/component-types-sb"

interface PropTypes {
  blok: HomeModelStoryblok
}

const props = defineProps<PropTypes>()
</script>

<template>
  <Head>
    <Title>Home Model - {{ props.blok.model }} {{ props.blok.series }}</Title>
    <Meta
      property="og:title"
      content="Home Model - {{ props.blok?.model }} {{ props.blok?.series }} | Timbered Ridge Homes"
    />
    <Meta
      name="twitter:title"
      content="Home Model - {{ props.blok?.model }} {{ props.blok?.series }} | Timbered Ridge Homes"
    />

    <Meta
      v-if="props.blok?.featuredImage?.filename"
      property="og:image"
      :content="props.blok?.featuredImage?.filename"
    />
    <Meta
      v-if="props.blok?.featuredImage?.filename"
      name="twitter:image"
      :content="props.blok?.featuredImage?.filename"
    />
  </Head>
  <div v-editable="props.blok" class="mx-auto">
    <div class="flex min-h-[80vh] flex-col">
      <div class="relative flex min-h-[70vh] w-full grow md:min-h-0">
        <div
          class="relative z-20 w-full self-end bg-gradient-to-b from-transparent via-charcoal-900/10 to-charcoal-900 px-6 pb-16 pt-48"
        >
          <div class="mx-auto flex w-full max-w-screen-lg flex-wrap justify-between gap-x-9 gap-y-16">
            <div class="max-w-3xl flex-grow">
              <p class="inline-block bg-sand-800 p-2 px-3 text-lg font-semibold uppercase tracking-wider text-sand-100">
                {{ props.blok.series }} Series
              </p>
              <h1 class="py-4 text-6xl font-bold text-white">{{ props.blok.model }}</h1>
              <ul
                class="flex max-w-md flex-col justify-between gap-2 text-lg font-semibold tracking-tight text-white sm:flex-row"
              >
                <li>Single-Family Home</li>
                <li>Available in MT & ID</li>
              </ul>
            </div>
            <a
              v-if="props.blok.floorPlan?.filename"
              :href="props.blok.floorPlan?.filename"
              target="_blank"
              class="flex-shrink-0 self-end rounded-xl bg-sand-200 p-4 px-6 font-semibold uppercase tracking-wider text-sand-800 hover:bg-sand-50 hover:text-sand-1000"
            >
              View Floorplan
            </a>
          </div>
        </div>
        <NuxtPicture
          :src="props.blok.featuredImage.filename"
          :imgAttrs="{
            class: 'absolute inset-0 object-cover h-full w-full',
            alt: props.blok.featuredImage.alt
          }"
        />
      </div>
      <div class="mx-auto w-full bg-charcoal-900 px-16 pt-8">
        <div class="mx-auto grid grid-cols-2 gap-4 border-t border-charcoal-600 py-8 sm:grid-cols-3 lg:grid-cols-5">
          <div v-for="stat in blok.stats" :key="stat._uid" v-editable="stat" class="flex flex-col-reverse">
            <dt class="text-sm font-semibold uppercase leading-6 tracking-wider text-charcoal-300">{{ stat.label }}</dt>
            <dd class="text-3xl font-semibold tracking-tight text-charcoal-100">{{ stat.value }}</dd>
            <Icon :name="stat.icon" class="h-12 w-12 text-charcoal-500" />
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      v-if="props.blok.matterPortImage?.filename && props.blok.matterPortLink?.url"
      class="relative m-auto mt-20 flex aspect-[4/3] w-full max-w-7xl flex-col items-center justify-center gap-5 sm:gap-10 md:aspect-22/11 md:w-[60rem] lg:w-[80rem]"
      :to="props.blok.matterPortLink?.url"
      target="_blank"
    >
      <Icon name="octicon:play-16" class="h-12 w-12 sm:h-24 sm:w-24" color="white" />
      <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">View 3D Walkthrough</h3>
      <NuxtPicture
        sizes="sm:100vw md:1920px lg:2560px"
        loading="lazy"
        :src="props.blok.matterPortImage?.filename"
        :imgAttrs="{
          class: 'opacity-30 absolute inset-0 object-cover h-full w-full',
          alt: props.blok.matterPortImage?.alt
        }"
      ></NuxtPicture>
      <div class="class absolute inset-0 -z-10 bg-black opacity-100"></div>
    </NuxtLink>
    <div class="pt-20">
      <StoryblokComponent v-for="child_block in blok.body" :key="child_block._uid" :blok="child_block" />
    </div>
  </div>
</template>

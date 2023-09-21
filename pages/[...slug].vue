<script setup>
import { inject } from "vue"
useHead({
  htmlAttrs: {
    lang: "en",
    style: "font-size: .8125rem"
  }
})

const { slug } = useRoute().params
const resolveRelations = ["popular-articles.articles", "ArticleCard.post"]

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/").replace(/\/$/, "") : "index",
  {
    version: "draft",
    resolve_relations: resolveRelations
  },
  {
    resolveRelations
  }
)

const route = useRoute()
function getUseOverlay() {
  return ["/our-homes/gallery/", "/communities/athol/", "/communities/hauser-lake/", "/communities/hayden/"].includes(
    route.path
  )
}

const useOverlay = computed(() => {
  return getUseOverlay()
})
const headerHeight = inject("headerHeight")
</script>

<template>
  <div :style="`padding-top: ${useOverlay ? 0 : headerHeight}px`">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

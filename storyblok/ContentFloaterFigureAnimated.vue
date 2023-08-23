<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { TransitionPresets, useTransition, useElementVisibility } from "@vueuse/core"
import { ContentFloaterFigureAnimatedStoryblok } from "~/types/component-types-sb"
interface PropTypes {
  blok: ContentFloaterFigureAnimatedStoryblok
}

const props = defineProps<PropTypes>()

const target = ref(null)
const targetIsVisible = useElementVisibility(target)

const transitioned = ref(false)
const source = computed(() => {
  if (targetIsVisible.value || transitioned.value) {
    transitioned.value = true
    return Number(props.blok.ending_value)
  } else {
    return Number(props.blok.starting_value)
  }
})

const output = useTransition(source, {
  duration: Number(props.blok.time),
  transition: TransitionPresets.easeOutCubic
})
</script>

<template>
  <div ref="target" v-editable="props.blok" class="flex flex-col-reverse text-center text-5xl font-bold text-sand-800">
    <dt class="text-lg font-semibold">{{ props.blok.label }}</dt>
    <dd>{{ props.blok.prepend }}{{ Math.round(output) }}{{ props.blok.append }}</dd>
  </div>
</template>

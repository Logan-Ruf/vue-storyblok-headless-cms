<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 motion-safe:transition-colors"
  >
    <div class="flex-auto">
      <nuxt-link :to="blok.link.url" class="block font-semibold text-gray-900">
        {{ blok.text }}
        <span class="absolute inset-0" />
      </nuxt-link>
    </div>
  </div>
</template>

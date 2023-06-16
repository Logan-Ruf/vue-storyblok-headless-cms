<script setup lang="ts"></script>

<template>
  <article class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        <slot name="title"></slot>
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        <slot name="description"></slot>
      </p>
    </div>
    <div class="mx-auto max-w-7xl px-0 lg:px-8">
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <slot></slot>
      </div>
    </div>
  </article>
</template>

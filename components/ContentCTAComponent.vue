<script setup lang="ts"></script>

<template>
  <article class="bg-white">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
          <slot name="title"></slot>
        </h2>
        <p class="text-md mx-auto mt-6 max-w-3xl whitespace-pre-wrap leading-8 text-charcoal-600">
          <slot name="text"></slot>
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <slot name="ctas" />
        </div>
      </div>
    </div>
  </article>
</template>

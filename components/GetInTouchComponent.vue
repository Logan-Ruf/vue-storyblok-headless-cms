<template>
  <div id="contact" class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-sand-200 ring-1 ring-charcoal-900/10 lg:w-1/2"
          >
            <TopoMap
              class="absolute inset-x-0 top-0 w-full origin-top-right scale-110 stroke-sand-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            />
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-charcoal-900">
            <slot name="title"></slot>
          </h2>
          <p class="mt-6 text-lg leading-8 text-charcoal-700">
            <slot name="description"></slot>
          </p>
          <dl class="mt-12 space-y-4 text-lg leading-7 text-charcoal-700">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <Icon name="mdi:office-building-marker" class="h-7 w-6 text-charcoal-500" />
              </dt>
              <dd>
                <slot name="address"></slot>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <Icon name="mdi:phone-outline" class="h-7 w-6 text-charcoal-500" />
              </dt>
              <dd>
                <slot name="telephone"></slot>
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <Icon name="mdi:email-outline" class="h-7 w-6 text-charcoal-500" />
              </dt>
              <dd>
                <slot name="email"></slot>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <slot name="form"></slot>
    </div>
  </div>
</template>
<script setup>
import TopoMap from "~/components/svg/TopoMap.vue"
</script>

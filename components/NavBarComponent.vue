<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/vue"
import { useRoute } from "#app"
import TRLogo from "~/components/svg/TRLogo.vue"
await prefetchComponents([
  "NavBarLinkComponent",
  "NavBarPopover",
  "NavBarMobileDisclosureComponent",
  "NavBarDropdown",
  "NavBarDropdownLink"
])

/**
 *  Overlay Animation Handling
 */
const route = useRoute()
const isOverlay = ref(getUseOverlay())
const transitionToOverlay = () => {
  setTimeout(() => {
    isOverlay.value = true
  }, 250)
}
function getUseOverlay() {
  return ["/our-homes/gallery/", "/communities/athol/", "/communities/hauser-lake/", "/communities/hayden/"].includes(
    route.path
  )
}

const useOverlay = computed(() => {
  return getUseOverlay()
})

watch(useOverlay, (val) => {
  if (val) {
    transitionToOverlay()
  } else {
    isOverlay.value = false
  }
})

const sharedStyles = {
  headerClass: "flex overflow-visible motion-safe:transition-all motion-safe:duration-500 ",
  popoverTextColor: "motion-safe:transition-colors motion-safe:duration-500 ",
  button: "rounded text-sm ml-1.5 px-3 py-1 motion-safe:transition-colors motion-safe:duration-500 ",
  nuxtLinkClass: "rounded p-1.5 font-semibold leading-6 motion-safe:transition-colors motion-safe:duration-500 ",
  iconLinkClass: "m-0.5 rounded p-1 leading-none motion-safe:transition-colors motion-safe:duration-500 ",
  svg: {
    svg: "w-24 lg:w-40 motion-safe:transition-all motion-safe:duration-500 ",
    group: "motion-safe:transition-colors motion-safe:duration-500 "
  },
  mobileButton:
    "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 motion-safe:transition-colors motion-safe:duration-500 "
}

const styles = computed(() => {
  if (isOverlay.value) {
    return {
      headerClass: sharedStyles.headerClass + "bg-none",
      popoverTextColor: sharedStyles.popoverTextColor + "text-neutral-100 hover:text-white hover:drop-shadow-md",
      button: sharedStyles.button + "text-charcoal-600 bg-neutral-100 hover:text-neutral-100 hover:bg-charcoal-700",
      nuxtLinkClass: sharedStyles.nuxtLinkClass + "text-neutral-100 hover:text-white hover:drop-shadow-md",
      iconLinkClass: sharedStyles.iconLinkClass + "text-neutral-100 hover:bg-neutral-100 hover:text-charcoal-700",
      svg: {
        svg: sharedStyles.svg.svg,
        primary: sharedStyles.svg.group + "fill-charcoal-100 group-hover:fill-charcoal-700",
        secondary: sharedStyles.svg.group + "fill-neutral-100 group-hover:fill-white",
        subtext: sharedStyles.svg.group + "fill-charcoal-800 group-hover:fill-charcoal-50"
      },
      mobileButton: sharedStyles.mobileButton + "text-neutral-100"
    }
  } else {
    return {
      headerClass: sharedStyles.headerClass + "bg-white shadow-md",
      popoverTextColor: sharedStyles.popoverTextColor + "",
      button: sharedStyles.button + "bg-charcoal-600 text-neutral-100 hover:bg-charcoal-700",
      nuxtLinkClass: sharedStyles.nuxtLinkClass + "text-charcoal-600",
      iconLinkClass: sharedStyles.iconLinkClass + "text-charcoal-600 hover:bg-neutral-100 hover:text-charcoal-700",
      svg: {
        svg: sharedStyles.svg.svg,
        primary: sharedStyles.svg.group + "fill-charcoal-600 group-hover:fill-charcoal-700",
        secondary: sharedStyles.svg.group + "fill-charcoal-200 group-hover:fill-charcoal-400",
        subtext: sharedStyles.svg.group + "fill-charcoal-200 group-hover:fill-charcoal-50"
      },
      mobileButton: sharedStyles.mobileButton + "text-charcoal-600"
    }
  }
})

const mobileMenuOpen = ref(false)
watch(route, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <header aria-label="banner" :class="styles.headerClass">
    <nav class="mx-auto flex w-full max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
      <nuxt-link to="/" class="group mr-4">
        <span class="sr-only">Timbered Ridge Homes</span>
        <TRLogo :styles="styles.svg" />
      </nuxt-link>
      <PopoverGroup class="hidden lg:flex lg:gap-x-4">
        <slot name="desktop-nav" :isOverlay="isOverlay"></slot>
      </PopoverGroup>
      <div class="hidden items-center lg:flex lg:flex-1 lg:justify-end">
        <slot name="desktop-social" :isOverlay="isOverlay"></slot>

        <NuxtLink to="#contact" :class="styles.button"> Contact Our Team </NuxtLink>
      </div>

      <!--Mobile Menu-->
      <!--For some reason this is causing a hydration bug in Vue. So we will use client only to avoid this until refactored-->
      <client-only>
        <div class="flex lg:hidden">
          <button type="button" :class="styles.mobileButton" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Icon name="lucide:menu" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
          <div class="fixed inset-0 z-40 bg-charcoal-700/25" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <NuxtLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Timbered Ridge Homes</span>
                <TRLogo :styles="styles.svg" />
              </NuxtLink>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <Icon name="lucide:x" class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <slot name="mobile-nav" />
                </div>
                <div class="space-y-2 py-6">
                  <slot name="mobile-social" />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </client-only>
    </nav>
  </header>
</template>

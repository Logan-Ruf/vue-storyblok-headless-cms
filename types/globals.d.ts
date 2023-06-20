import { SbRichTextOptions } from "@storyblok/js/dist/types/types"
import { RichtextResolver } from "storyblok-js-client"
import { RichtextStoryblok } from "~/types/component-types-sb"
declare global {
  function renderRichText(
    data: RichtextStoryblok,
    options?: SbRichTextOptions,
    resolverInstance?: RichtextResolver
  ): string
  function useSlots(): Record<string, unknown>
}

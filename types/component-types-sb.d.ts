import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllArticlesStoryblok {
  title?: string;
  _uid: string;
  component: "AllArticles";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  image: AssetStoryblok;
  title: string;
  date?: string;
  teaser?: string;
  content?: RichtextStoryblok;
  _uid: string;
  component: "Article";
  [k: string]: any;
}

export interface ArticleCardStoryblok {
  post?: StoryblokStory<ArticleStoryblok> | string;
  _uid: string;
  component: "ArticleCard";
  [k: string]: any;
}

export interface BannerStoryblok {
  image: AssetStoryblok;
  bannerTitle?: string;
  bannerText?: string;
  _uid: string;
  component: "Banner";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonOutlineStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "ButtonOutline";
  [k: string]: any;
}

export interface CalloutContainerStoryblok {
  items: CalloutItemStoryblok[];
  _uid: string;
  component: "CalloutContainer";
  [k: string]: any;
}

export interface CalloutItemStoryblok {
  icon: "fa6-solid:handshake" | "fa6-solid:eye" | "fa6-solid:compass" | "fa6-solid:binoculars";
  heading: string;
  content: RichtextStoryblok;
  _uid: string;
  component: "CalloutItem";
  [k: string]: any;
}

export interface ChipButtonStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "ChipButton";
  [k: string]: any;
}

export interface ColumnTwoDividerStoryblok {
  header?: string;
  headerOne?: string;
  contentOne?: string;
  headerTwo?: string;
  contentTwo?: string;
  _uid: string;
  component: "ColumnTwoDivider";
  [k: string]: any;
}

export interface ContactCTAStoryblok {
  body: ContactCtaItemStoryblok[];
  _uid: string;
  component: "ContactCTA";
  [k: string]: any;
}

export interface ContactCTAItemStoryblok {
  title: string;
  icon: "fa6-solid:house" | "fa6-solid:user";
  content: RichtextStoryblok;
  buttons: ChipButtonStoryblok[];
  _uid: string;
  component: "ContactCTAItem";
  [k: string]: any;
}

export interface ContentCTAStoryblok {
  title?: string;
  text?: string;
  ctas?: (PrimaryButtonStoryblok | SecondaryButtonStoryblok | ButtonOutlineStoryblok)[];
  _uid: string;
  component: "ContentCTA";
  [k: string]: any;
}

export interface ContentFloaterStoryblok {
  contentFloaterTitle?: string;
  contentFloaterBigText?: string;
  contentFloaterSmallText?: string;
  contentFloaterFigures?: (ContentFloaterFigureAnimatedStoryblok | ContentFloaterFigureStoryblok)[];
  _uid: string;
  component: "ContentFloater";
  [k: string]: any;
}

export interface ContentFloaterFigureStoryblok {
  value?: string;
  text?: string;
  _uid: string;
  component: "ContentFloaterFigure";
  [k: string]: any;
}

export interface ContentFloaterFigureAnimatedStoryblok {
  label?: string;
  starting_value: string;
  ending_value?: string;
  time: string;
  prepend?: string;
  append?: string;
  _uid: string;
  component: "ContentFloaterFigureAnimated";
  [k: string]: any;
}

export interface ContentImageStoryblok {
  image?: AssetStoryblok;
  text?: string;
  imageLeft?: boolean;
  _uid: string;
  component: "ContentImage";
  [k: string]: any;
}

export interface CustomContentStoryblok {
  html?: string;
  _uid: string;
  component: "CustomContent";
  [k: string]: any;
}

export interface DividerStoryblok {
  size: "none" | "sm" | "md" | "lg" | "xl";
  line_thickness: "none" | "sm" | "md" | "lg" | "xl";
  line_width: "sm" | "md" | "lg" | "xl" | "full";
  line_color: "primary-light" | "primary-medium" | "primary-dark" | "accent-light" | "accent-dark";
  _uid: string;
  component: "Divider";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FeaturesStoryblok {
  _uid: string;
  component: "Features";
  [k: string]: any;
}

export interface FooterBlokStoryblok {
  links?: FooterLinkStoryblok[];
  icons?: IconLinkStoryblok[];
  copy?: string;
  _uid: string;
  component: "FooterBlok";
  [k: string]: any;
}

export interface FooterLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "FooterLink";
  [k: string]: any;
}

export interface FullPageHeroStoryblok {
  image?: AssetStoryblok;
  title?: string;
  body?: any[];
  _uid: string;
  component: "FullPageHero";
  [k: string]: any;
}

export interface GalleryStoryblok {
  headingImage?: AssetStoryblok;
  panels?: GalleryPanelStoryblok[];
  _uid: string;
  component: "Gallery";
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface GalleryCustomStoryblok {
  images?: MultiassetStoryblok;
  _uid: string;
  component: "GalleryCustom";
  [k: string]: any;
}

export interface GalleryPanelStoryblok {
  heading?: string;
  images?: MultiassetStoryblok;
  _uid: string;
  component: "GalleryPanel";
  [k: string]: any;
}

export interface GalleryPreviewStoryblok {
  title?: string;
  link?: MultilinkStoryblok;
  images?: MultiassetStoryblok;
  _uid: string;
  component: "GalleryPreview";
  [k: string]: any;
}

export interface GetInTouchStoryblok {
  title?: string;
  description?: string;
  addressLineOne?: string;
  addressLineTwo?: string;
  mapsLink?: MultilinkStoryblok;
  telNumber?: string;
  telLink?: MultilinkStoryblok;
  email?: string;
  emailLink?: MultilinkStoryblok;
  form?: any[];
  _uid: string;
  component: "GetInTouch";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderBannerStoryblok {
  text?: RichtextStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "HeaderBanner";
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  bigText: string;
  smallText?: string;
  image: AssetStoryblok;
  _uid: string;
  component: "Hero";
  [k: string]: any;
}

export interface HeroVideoStoryblok {
  topButton?: any;
  topButtonText?: string;
  topButtonLink?: MultilinkStoryblok;
  video?: AssetStoryblok;
  bigText?: string;
  smallText?: string;
  ctas?: any[];
  _uid: string;
  component: "HeroVideo";
  [k: string]: any;
}

export interface HomeFeaturesStoryblok {
  title?: string;
  stats?: StatDataStoryblok[];
  panels?: HomeFeaturesPanelStoryblok[];
  _uid: string;
  component: "HomeFeatures";
  [k: string]: any;
}

export interface HomeFeaturesPanelStoryblok {
  heading?: string;
  content?: RichtextStoryblok;
  images?: MultiassetStoryblok;
  _uid: string;
  component: "HomeFeaturesPanel";
  [k: string]: any;
}

export interface HomeModelStoryblok {
  model?: string;
  series?: string;
  featuredImage: AssetStoryblok;
  floorPlan?: AssetStoryblok;
  matterPortLink?: MultilinkStoryblok;
  matterPortImage?: AssetStoryblok;
  stats?: ModelStatStoryblok[];
  body?: any[];
  _uid: string;
  component: "HomeModel";
  [k: string]: any;
}

export interface HubSpotFormStoryblok {
  region?: string;
  portalId?: string;
  formId?: string;
  _uid: string;
  component: "HubSpotForm";
  [k: string]: any;
}

export interface IconLinkStoryblok {
  alt: string;
  icon:
    | ""
    | "simple-icons:facebook"
    | "simple-icons:pinterest"
    | "simple-icons:houzz"
    | "simple-icons:instagram"
    | "simple-icons:linkedin"
    | "BuilderTrendLogo";
  link: MultilinkStoryblok;
  size: "" | "small" | "medium" | "large";
  _uid: string;
  component: "IconLink";
  [k: string]: any;
}

export interface IframeBlokStoryblok {
  url: MultilinkStoryblok;
  _uid: string;
  component: "iframeBlok";
  [k: string]: any;
}

export interface ImageCardStoryblok {
  image?: AssetStoryblok;
  category?: string;
  link?: MultilinkStoryblok;
  preheading?: string;
  heading?: string;
  subheading?: string;
  _uid: string;
  component: "ImageCard";
  [k: string]: any;
}

export interface LayoutStoryblok {
  header?: any[];
  footer?: any[];
  _uid: string;
  component: "layout";
  [k: string]: any;
}

export interface ModelStatStoryblok {
  icon?:
    | ""
    | "fluent:bed-20-regular"
    | "ph:bathtub-light"
    | "ph:ruler-light"
    | "ph:stairs-light"
    | "ph:toilet-light"
    | "ph:garage-light";
  value?: string;
  label?: string;
  _uid: string;
  component: "ModelStat";
  [k: string]: any;
}

export interface NavBarStoryblok {
  Desktop?: any;
  desktopNavigation?: (NavBarLinkStoryblok | NavBarDropdownStoryblok)[];
  desktopSocial?: IconLinkStoryblok[];
  Mobile?: any;
  mobileNavigation?: (NavBarMobileDisclosureStoryblok | NavBarMobileLinkStoryblok)[];
  mobileSocial?: IconLinkStoryblok[];
  _uid: string;
  component: "NavBar";
  [k: string]: any;
}

export interface NavBarDropdownStoryblok {
  text?: string;
  dropdown?: NavBarDropdownLinkStoryblok[];
  _uid: string;
  component: "NavBarDropdown";
  [k: string]: any;
}

export interface NavBarDropdownLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "NavBarDropdownLink";
  [k: string]: any;
}

export interface NavBarLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "NavBarLink";
  [k: string]: any;
}

export interface NavBarMobileDisclosureStoryblok {
  text?: string;
  panel?: NavBarMobileDisclosureLinkStoryblok[];
  _uid: string;
  component: "NavBarMobileDisclosure";
  [k: string]: any;
}

export interface NavBarMobileDisclosureLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "NavBarMobileDisclosureLink";
  [k: string]: any;
}

export interface NavBarMobileLinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "NavBarMobileLink";
  [k: string]: any;
}

export interface PageStoryblok {
  Meta?: any;
  title: string;
  description?: string;
  image?: AssetStoryblok;
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PictureContainerStoryblok {
  image: AssetStoryblok;
  lazy?: boolean;
  _uid: string;
  component: "PictureContainer";
  [k: string]: any;
}

export interface PopularArticlesStoryblok {
  headline?: string;
  articles?: (StoryblokStory<ArticleStoryblok> | string)[];
  _uid: string;
  component: "popular-articles";
  [k: string]: any;
}

export interface PrimaryButtonStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "PrimaryButton";
  [k: string]: any;
}

export interface SecondaryButtonStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  dark?: boolean;
  _uid: string;
  component: "SecondaryButton";
  [k: string]: any;
}

export interface SelectHomeModelStoryblok {
  title?: string;
  homeModels?: (StoryblokStory<HomeModelStoryblok> | string)[];
  _uid: string;
  component: "SelectHomeModel";
  [k: string]: any;
}

export interface StandardContainerStoryblok {
  body?: any[];
  _uid: string;
  component: "StandardContainer";
  [k: string]: any;
}

export interface StatDataStoryblok {
  name?: string;
  value?: string;
  _uid: string;
  component: "StatData";
  [k: string]: any;
}

export interface TabsVerticleFloaterStoryblok {
  title?: string;
  subtitle?: string;
  tabs?: TabsVerticleFloaterTabStoryblok[];
  _uid: string;
  component: "TabsVerticleFloater";
  [k: string]: any;
}

export interface TabsVerticleFloaterTabStoryblok {
  title?: string;
  content?: string;
  logo?: AssetStoryblok;
  image?: AssetStoryblok;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "TabsVerticleFloaterTab";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  text?: string;
  name?: string;
  _uid: string;
  component: "Testimonial";
  [k: string]: any;
}

export interface TestimonialSliderStoryblok {
  testimonials?: TestimonialStoryblok[];
  _uid: string;
  component: "TestimonialSlider";
  [k: string]: any;
}

export interface ThreeColumnStoryblok {
  title?: string;
  description?: string;
  content?: (ImageCardStoryblok | ArticleCardStoryblok)[];
  _uid: string;
  component: "ThreeColumn";
  [k: string]: any;
}

export interface TitleBlokStoryblok {
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  _uid: string;
  component: "TitleBlok";
  [k: string]: any;
}

export interface YoutubeEmbedStoryblok {
  youtubeLink: MultilinkStoryblok;
  _uid: string;
  component: "YoutubeEmbed";
  [k: string]: any;
}

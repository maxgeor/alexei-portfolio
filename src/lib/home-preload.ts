import { getImageProps } from "next/image";
import { exhibition, homeImage } from "@/data/content";
import {
  CONTENT_COLUMN_SIZES,
  IMAGE_QUALITY_DESKTOP,
  IMAGE_QUALITY_MOBILE,
} from "@/lib/image-presets";

type PreloadLink = { href: string; srcSet?: string };

function preloadFromImageProps(
  props: Parameters<typeof getImageProps>[0],
): PreloadLink {
  const {
    props: { src, srcSet },
  } = getImageProps(props);
  return { href: src, srcSet };
}

export function homeHeroPreloadLinks(): {
  mobile: PreloadLink;
  desktop: PreloadLink;
} {
  return {
    mobile: preloadFromImageProps({
      src: homeImage.mobile.image,
      width: homeImage.mobile.width,
      height: homeImage.mobile.height,
      quality: IMAGE_QUALITY_MOBILE,
      sizes: "100vw",
      alt: "",
    }),
    desktop: preloadFromImageProps({
      src: homeImage.desktop.image,
      width: homeImage.desktop.width,
      height: homeImage.desktop.height,
      quality: IMAGE_QUALITY_DESKTOP,
      sizes: CONTENT_COLUMN_SIZES,
      alt: "",
    }),
  };
}

export function exhibitionPreloadLinks(): {
  mobile: PreloadLink;
  desktop: PreloadLink;
} {
  return {
    mobile: preloadFromImageProps({
      src: exhibition.image,
      width: exhibition.width,
      height: exhibition.height,
      quality: IMAGE_QUALITY_MOBILE,
      sizes: CONTENT_COLUMN_SIZES,
      alt: "",
    }),
    desktop: preloadFromImageProps({
      src: exhibition.image,
      width: exhibition.width,
      height: exhibition.height,
      quality: IMAGE_QUALITY_DESKTOP,
      sizes: CONTENT_COLUMN_SIZES,
      alt: "",
    }),
  };
}

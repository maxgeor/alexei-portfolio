import { getImageProps } from "next/image";
import { homeImage } from "@/data/content";
import {
  CONTENT_COLUMN_SIZES,
  IMAGE_QUALITY_DESKTOP,
  IMAGE_QUALITY_MOBILE,
} from "@/lib/image-presets";

export function homeHeroPreloadLinks() {
  const {
    props: { src: mobileSrc, srcSet: mobileSrcSet },
  } = getImageProps({
    src: homeImage.mobile.image,
    width: homeImage.mobile.width,
    height: homeImage.mobile.height,
    quality: IMAGE_QUALITY_MOBILE,
    sizes: "100vw",
    alt: "",
  });

  const {
    props: { src: desktopSrc, srcSet: desktopSrcSet },
  } = getImageProps({
    src: homeImage.desktop.image,
    width: homeImage.desktop.width,
    height: homeImage.desktop.height,
    quality: IMAGE_QUALITY_DESKTOP,
    sizes: CONTENT_COLUMN_SIZES,
    alt: "",
  });

  return {
    mobile: { href: mobileSrc, srcSet: mobileSrcSet },
    desktop: { href: desktopSrc, srcSet: desktopSrcSet },
  };
}

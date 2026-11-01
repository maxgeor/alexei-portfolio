"use client";

import { getImageProps, type ImageProps } from "next/image";
import { DESKTOP_BREAKPOINT } from "@/lib/image-presets";

type PictureSource = Pick<
  ImageProps,
  "src" | "width" | "height" | "quality" | "sizes"
>;

type ResponsivePictureProps = {
  alt: string;
  className?: string;
  mobile: PictureSource;
  desktop: PictureSource;
  preload?: boolean;
};

export function ResponsivePicture({
  alt,
  className,
  mobile,
  desktop,
  preload,
}: ResponsivePictureProps) {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...desktop, alt });
  const {
    props: { ...mobileImg },
  } = getImageProps({ ...mobile, alt });

  return (
    <picture>
      <source
        media={`(min-width: ${DESKTOP_BREAKPOINT})`}
        srcSet={desktopSrcSet}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...mobileImg}
        alt={alt}
        className={className}
        fetchPriority={preload ? "high" : undefined}
        loading={preload ? "eager" : undefined}
      />
    </picture>
  );
}

"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Work } from "@/data/content";
import { ui } from "@/data/content";

function ImageCaption({
  title,
  year,
  material,
  size,
}: {
  title: string;
  year: string;
  material: string;
  size: string;
}) {
  return (
    <div>
      <p>{year ? `${title}, ${year}` : title}</p>
      <p>{material}</p>
      <p>{size}</p>
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: readonly Work[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const titleId = useId();
  const { lang } = useLanguage();
  const current = images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        onPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!current) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex flex-col bg-bg px-[16px] pt-[12px] pb-[12px] text-xs text-ink"
    >
      <div className="mb-[16px] flex items-center justify-between">
        <p id={titleId}>
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer bg-transparent p-0 text-xs text-ink"
        >
          {ui.close[lang]}
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <button
          type="button"
          onClick={onPrev}
          aria-label={ui.previousImage[lang]}
          className="absolute inset-y-0 left-0 z-10 flex w-[35%] cursor-pointer items-center justify-start bg-transparent pl-[16px] text-xs text-ink"
        >
          ←
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.image}
          alt={current.alt}
          className="pointer-events-none relative z-0 max-h-full max-w-full object-contain"
        />

        <button
          type="button"
          onClick={onNext}
          aria-label={ui.nextImage[lang]}
          className="absolute inset-y-0 right-0 z-10 flex w-[35%] cursor-pointer items-center justify-end bg-transparent pr-[16px] text-xs text-ink"
        >
          →
        </button>
      </div>

      <div className="mt-[4px] text-left">
        <ImageCaption
          title={current.title}
          year={current.year}
          material={current.material[lang]}
          size={current.size[lang]}
        />
      </div>
    </div>
  );
}

export function WorksGallery({ images }: { images: readonly Work[] }) {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }
      return (current + 1) % images.length;
    });
  }, [images.length]);

  return (
    <>
      <ul className="space-y-4">
        {images.map((work, index) => (
          <li key={work.image}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="mb-[4px] block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
              aria-label={`View ${work.title} fullscreen`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.alt}
                className="block h-auto w-full"
              />
            </button>
            <ImageCaption
              title={work.title}
              year={work.year}
              material={work.material[lang]}
              size={work.size[lang]}
            />
          </li>
        ))}
      </ul>

      {activeIndex !== null ? (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}

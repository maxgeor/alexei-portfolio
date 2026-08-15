"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Work } from "@/data/content";
import { ui } from "@/data/content";

const COARSE_POINTER_QUERY = "(hover: none) and (pointer: coarse)";
const SWIPE_THRESHOLD = 50;
const SWIPE_AXIS_LOCK = 10;

function subscribeCoarsePointer(onStoreChange: () => void) {
  const media = window.matchMedia(COARSE_POINTER_QUERY);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getCoarsePointerSnapshot() {
  return window.matchMedia(COARSE_POINTER_QUERY).matches;
}

function useCoarsePointer() {
  return useSyncExternalStore(
    subscribeCoarsePointer,
    getCoarsePointerSnapshot,
    () => false,
  );
}

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
  const isCoarsePointer = useCoarsePointer();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressTap = useRef(false);

  const handleNavClick = useCallback(
    (navigate: () => void) => {
      if (suppressTap.current) {
        return;
      }
      navigate();
    },
    [],
  );

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      if (!touchStart.current) {
        return;
      }

      const touch = event.changedTouches[0];
      if (!touch) {
        touchStart.current = null;
        return;
      }

      const deltaX = touch.clientX - touchStart.current.x;
      const deltaY = touch.clientY - touchStart.current.y;
      touchStart.current = null;

      if (
        Math.abs(deltaX) < SWIPE_THRESHOLD ||
        Math.abs(deltaX) <= Math.abs(deltaY)
      ) {
        return;
      }

      suppressTap.current = true;
      window.setTimeout(() => {
        suppressTap.current = false;
      }, 300);

      if (deltaX > 0) {
        onPrev();
      } else {
        onNext();
      }
    },
    [onNext, onPrev],
  );

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (!touchStart.current) {
      return;
    }

    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    if (
      Math.abs(deltaX) > SWIPE_AXIS_LOCK &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      suppressTap.current = true;
    }
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const isCoarse = window.matchMedia(COARSE_POINTER_QUERY).matches;

    document.body.style.overflow = "hidden";
    if (isCoarse) {
      document.body.style.overscrollBehavior = "none";
      document.documentElement.style.overscrollBehavior = "none";
    }

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
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
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
      className="fixed inset-0 z-50 flex flex-col bg-bg px-[20px] pt-[16px] pb-[16px] text-ink [@media(hover:none)_and_(pointer:coarse)]:touch-none [@media(hover:none)_and_(pointer:coarse)]:overscroll-none"
    >
      <div className="mb-[20px] flex items-center justify-between">
        <p id={titleId}>
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="nav-link menu-hit cursor-pointer bg-transparent p-0 text-ink"
        >
          {ui.close[lang]}
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center [@media(hover:none)_and_(pointer:coarse)]:touch-none"
        {...(isCoarsePointer
          ? {
              onTouchStart: handleTouchStart,
              onTouchMove: handleTouchMove,
              onTouchEnd: handleTouchEnd,
            }
          : {})}
      >
        <button
          type="button"
          onClick={() => handleNavClick(onPrev)}
          aria-label={ui.previousImage[lang]}
          className="absolute inset-y-0 -left-5 z-10 flex w-[35%] cursor-w-resize items-center justify-start bg-transparent pl-[20px] text-ink [@media(hover:none)_and_(pointer:coarse)]:cursor-pointer"
        >
          ←
        </button>

        <Image
          src={current.image}
          alt={current.alt}
          className="pointer-events-none relative z-0 max-h-full max-w-full object-contain"
          width={current.width}
          height={current.height}
          sizes="100vw"
        />

        <button
          type="button"
          onClick={() => handleNavClick(onNext)}
          aria-label={ui.nextImage[lang]}
          className="absolute inset-y-0 -right-5 z-10 flex w-[35%] cursor-e-resize items-center justify-end bg-transparent pr-[20px] text-ink [@media(hover:none)_and_(pointer:coarse)]:cursor-pointer"
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
      <ul className="space-y-5">
        {images.map((work, index) => (
          <li key={work.image}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="mb-[4px] block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
              aria-label={`View ${work.title} fullscreen`}
            >
              <Image
                src={work.image}
                alt={work.alt}
                className="block h-auto w-full"
                width={work.width}
                height={work.height}
                sizes="100vw"
                preload={index < 3}
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

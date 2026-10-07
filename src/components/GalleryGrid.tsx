"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { cashewGallery } from "@/lib/site-data";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : cashewGallery[activeIndex];

  function showPrevious() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + cashewGallery.length) % cashewGallery.length);
  }

  function showNext() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % cashewGallery.length);
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cashewGallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="soft-card overflow-hidden text-left"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative h-64">
              <Image src={item.src} alt={item.title} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="inline-flex items-center gap-2 text-lg font-semibold text-[#0f3c2f]">
                <Images size={16} />
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0f3c2f]/88 p-4">
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f3c2f]"
            aria-label="Close gallery image"
            onClick={() => setActiveIndex(null)}
          >
            <X size={20} />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0f3c2f]"
            aria-label="Previous image"
            onClick={showPrevious}
          >
            <ChevronLeft size={22} />
          </button>
          <div className="max-w-4xl">
            <div className="relative h-[70vh] min-h-[320px] w-[min(92vw,900px)] overflow-hidden rounded-[24px]">
              <Image src={activeItem.src} alt={activeItem.title} fill unoptimized className="object-contain bg-black" sizes="90vw" />
            </div>
            <p className="mt-4 text-center text-xl font-semibold text-white">{activeItem.title}</p>
            <p className="mt-1 text-center text-sm text-[#dfe7e1]">{activeItem.caption}</p>
          </div>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0f3c2f]"
            aria-label="Next image"
            onClick={showNext}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </>
  );
}

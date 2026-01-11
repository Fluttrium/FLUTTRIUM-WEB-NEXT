"use client";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "@/hooks/useTranslations";

export function TimelineDemo() {
  const { messages } = useTranslations();
  const t: any = (messages as any).RetailTimeline;
  const items: any[] = Array.isArray(t?.items) ? t.items : [];

  const data = items.map((it, idx) => ({
    title: it.title,
    content: (
      <div>
        {(Array.isArray(it.paragraphs) ? it.paragraphs : []).map(
          (p: string, i: number) => (
            <p
              key={i}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed break-words hyphens-auto"
            >
              {p}
            </p>
          ),
        )}
        <div className="mt-4 sm:mt-6">
          <Image
            src={
              it?.image?.src ||
              [
                "/Scenes03.svg",
                "/Scenes01.svg",
                "/Scenes08.svg",
                "/Scenes02.svg",
                "/Scenes04.svg",
              ][idx]
            }
            alt={it?.image?.alt || "timeline image"}
            width={100}
            height={100}
            className="rounded-lg object-contain h-full w-full max-w-full"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8">
      <Timeline data={data} />
    </div>
  );
}

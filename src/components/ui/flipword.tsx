'use client';
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useTranslations } from "@/hooks/useTranslations";

export function FlipWordsDemo2() {
  const { messages } = useTranslations();
  const t: any = (messages as any).RetailFlip;
  const words: string[] = Array.isArray(t?.words) ? t.words : [];

  return (
    <div className="flex justify-start items-center px-4">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
      </div>
    </div>
  );
}

import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo2() {
  const words = ["Аренда", "Еда", "Цветы", "Одежда"];

  return (
    <div className="flex justify-start items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} />
      </div>
    </div>
  );
}

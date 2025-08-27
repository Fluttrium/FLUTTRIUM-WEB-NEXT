"use client";

import { Link } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import {useTranslations} from "use-intl";

export function TypewriterEffectSmoothDemo() {
    const t = useTranslations("beetween")
  const words = [
    { text: t('title1') },
    { text: t('title2') },
    { text: t('title3') },
    { text: t('title4') },
    { text: t('title5') },
    {
      text: t('title6'),
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div id="technology" className="hidden pt-11 md:flex flex-col items-center h-[20rem]">

      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <a href="https://t.me/fluttriumchannel" target="_blank" rel="noopener noreferrer">
  <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
      {t('button')}
  </button>
</a>

      </div>
    </div>
  );
}

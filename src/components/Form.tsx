"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {useTranslations} from "use-intl";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const t = useTranslations('MainForm')

  return (
    <div className="max-w-6xl h-max w-full mx-auto p-4 shadow-input bg-white dark:bg-black mb-16 md:mb-40 flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 mb-4 md:mb-0 md:pr-4 items-center justify-center">
        <p className="font-medium text-neutral-800 dark:text-neutral-200 text-base md:text-xl text-center">
          {t('FormDisc')}
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="max-w-md w-full mx-auto rounded-none p-4 bg-white dark:bg-black my-2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">{t('label1')}</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  className="h-8 text-sm"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">{t('label2')}</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  className="h-8 text-sm"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">{t('label3')}</Label>
              <Input
                id="email"
                placeholder="example@.com"
                type="email"
                className="h-8 text-sm"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">{t('label4')}Телефон</Label>
              <Input
                id="phone"
                placeholder="+7 921 457 00 57"
                type="phone"
                className="h-8 text-sm"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="idea">{t('label5')}</Label>
              <textarea
                id="idea"
                placeholder={t('placeHold')}
                className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none text-sm"
              ></textarea>
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 dark:to-zinc-900 w-full text-white rounded-md h-10 text-sm font-medium"
              type="submit"
            >
              {t('formButton')} &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
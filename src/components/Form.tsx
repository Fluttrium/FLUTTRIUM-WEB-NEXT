"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-6xl w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black mb-40 flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-2/3 mb-8 md:mb-0 md:pr-8 items-center justify-center">
        <p className="font-medium text-neutral-800 dark:text-neutral-200 text-2xl md:text-4xl text-center">
          Чем мы можем вам помочь? Кратко опишите запрос на разработку — мы свяжемся с вами в течение дня
        </p>
      </div>
      <div className="md:w-2/3">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-white dark:bg-black">
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">Имя</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Фамилия</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Почта</Label>
              <Input id="email" placeholder="example@.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" placeholder="+7 921 457 00 57" type="phone" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="idea">Расскажите о себе и о своей идее</Label>
              <textarea
                id="idea"
                placeholder="Ваша идея..."
                className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
              ></textarea>
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Отправить &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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

export default function Page() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
        Работаем с клиентами <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          по всему миру
        </span>
      </h1>
      <Form />
    </>
  );
}

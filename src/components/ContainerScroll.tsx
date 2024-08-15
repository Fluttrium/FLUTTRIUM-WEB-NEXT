"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Form } from "./Form";

export function HeroScrollDemo() {
  return (
    <section className="flex h-full flex-col">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className=" z-10 text-4xl font-semibold text-black dark:text-white">
              Работаем с клиентами <br />
              <span className="text-4xl pb-3.5 md:text-[6rem] font-bold mt-1 leading-none">
                по всему миру
              </span>
            </h1>
          </>
        }
      >
        <Form />
      </ContainerScroll>
    </section>
  );
}

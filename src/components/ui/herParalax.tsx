"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Фон с решеткой */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Cursor",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Rogue",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Editorially",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Algochurn",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail: "/crm/Хранилизе документов.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail: "/crm/Dashboard.png",
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Renderwork Studio",
    link: "",
    thumbnail: "/crm/Dashboard.png",
  },
  {
    title: "Creme Digital",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail: "/crm/Объкты аренды.png",
  },
  {
    title: "Invoker Labs",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "E Free Invoice",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
];

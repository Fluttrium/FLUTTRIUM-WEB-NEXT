"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width={36}
          height={50}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="hidden md:block text-4xl font-semibold">Fluttrium</p>
      </aside>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Услуги">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#service">Услуги</HoveredLink>
              <HoveredLink href="#portfolio">Портфолио</HoveredLink>
              <HoveredLink href="/flutter">Flutter</HoveredLink>
              <HoveredLink href="#technology">Технологии</HoveredLink>
              <HoveredLink href="#contacts">Контакты</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/flutter">Flutter</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Продукты">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Коробочное приложение для ритейла"
                href="/retail"
                src="/flutter-10181843-8492733.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Приложение для корпораций"
                href="/corporation"
                src="/flutter-10181843-8492733.png"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Интернет магазин"
                href="https://gomoonbeam.com"
                src="/flutter-10181843-8492733.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="CRM система"
                href="https://userogue.com"
                src="/flutter-10181843-8492733.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Цены">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/price/base">Базовый план</HoveredLink>
              <HoveredLink href="/price/standart">Стандартный план</HoveredLink>
              <HoveredLink href="/price/premium">Премиум план</HoveredLink>
              <HoveredLink href="/price/individual">Индивидуальные услуги</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Контакты">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#service">Услуги</HoveredLink>
              <HoveredLink href="#portfolio">Портфолио</HoveredLink>
              <HoveredLink href="/flutter">Flutter</HoveredLink>
              <HoveredLink href="#technology">Технологии</HoveredLink>
              <HoveredLink href="#contacts">Контакты</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Технологии">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Flutter"
                href="/flutter"
                src="/flutter-10181843-8492733.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
  title="Next JS"
  href="/nextjs"
  src="/projects/nextjs-light.svg" // Заменил путь на светлую версию изображения
  description="Production ready Tailwind css components for your next project"
/>

               </div>
          </MenuItem>
        </Menu>
      </nav>

      <aside className="flex items-center gap-4">
        <p className="hidden md:block text-2xl font-semibold mr-2">
          +7(921)011-27-94
        </p>
        <Link
          href="/dashboard"
          className="hidden md:relative h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Связаться с нами
          </span>
        </Link>
        {/* Отображаем номер телефона для мобильной версии */}
        <p className="md:hidden text-2xl font-semibold text-white">
          +7(921)011-27-94
        </p>
      </aside>
    </header>
  );
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default Navbar;

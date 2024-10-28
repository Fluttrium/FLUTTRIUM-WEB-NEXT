"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconButton } from "@mui/material";
import { FaTelegramPlane, FaTiktok, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width={28} // Уменьшенный размер логотипа для мобильной версии
          height={40}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="hidden md:block text-4xl font-semibold">Fluttrium</p>
      </aside>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Услуги">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#service">Разработка веб-сайтов</HoveredLink>
              <HoveredLink href="#portfolio">Мобильные приложения</HoveredLink>
              <HoveredLink href="/flutter">UI/UX дизайн</HoveredLink>
              <HoveredLink href="#technology">Консультации по технологиям</HoveredLink>
              <HoveredLink href="#contacts">Поддержка и обслуживание</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/flutter">Flutter</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Продукты">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Коробочное приложение для ритейла"
                href="/retail"
                src="/flutter-10181843-8492733.png"
                description="Готовое решение для магазинов и сетей, позволяющее управлять продажами, складом и клиентской базой"
              />
              <ProductItem
                title="Приложение для корпораций"
                href="/corporation"
                src="/flutter-10181843-8492733.png"
                description="Инструмент для улучшения внутренних процессов компании, обеспечивающий автоматизацию бизнес-процессов"
              />
              <ProductItem
                title="Интернет магазин"
                href="/internetshop"
                src="/flutter-10181843-8492733.png"
                description="Платформа для онлайн-продаж, позволяющая быстро создать и управлять интернет-магазином"
              />
              <ProductItem
                title="CRM система"
                href="/crm"
                src="/flutter-10181843-8492733.png"
                description="Инновационное решение для управления взаимоотношениями с клиентами"
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
          <IconButton href="https://t.me/fluttrium_official" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <FaTelegramPlane className="text-white text-4xl md:text-6xl" />
      </IconButton>
      <IconButton href="https://www.tiktok.com/@fluttrium" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <FaTiktok className="text-white text-4xl md:text-6xl" />
      </IconButton>
      <IconButton href="https://github.com/orgs/Fluttrium" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-white text-4xl md:text-6xl" />
      </IconButton>
      <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="text-white text-4xl md:text-6xl" />
      </IconButton>
      <IconButton href="https://www.youtube.com/channel/UCcBh05h-yxZOzXhnOz9ub5w" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
        <FaYoutube className="text-white text-4xl md:text-6xl" />
      </IconButton>
      <p className="text-sm font-semibold md:text-2xl mr-1 md:mr-2 text-center">+7(921)011-27-94</p>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Технологии">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Flutter"
                href="/flutter"
                src="/flutter-10181843-8492733.png"
                description="Cовременный фреймворк от Google для разработки нативных приложений на мобильных устройствах"
              />
              <ProductItem
                title="Next JS"
                href="/nextjs"
                src="/projects/nextjs-light.svg"
                description="Мощный фреймворк для React, который упрощает создание быстрых и производительных веб-приложений"
              />
            </div>
          </MenuItem>
        </Menu>
      </nav>

      <aside className="flex items-center gap-2 md:gap-4">
        <IconButton href="https://t.me/fluttrium_official" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegramPlane className="text-white text-4xl md:text-6xl" />
        </IconButton>
        <p className="text-sm font-semibold md:text-2xl mr-1 md:mr-2">+7(921)011-27-94</p>
        <Link
          href="/dashboard"
          className="relative h-8 md:h-12 overflow-hidden rounded-full p-[2px] md:p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 md:px-6 py-1 md:py-2 text-xs md:text-base font-semibold text-white backdrop-blur-3xl">
            Заполнить бриф
          </span>
        </Link>
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

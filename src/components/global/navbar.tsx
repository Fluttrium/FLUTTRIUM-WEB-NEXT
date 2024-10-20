'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react"; // Удалили XIcon из основного рендера
import MobileMenu from "./MobileMenu"; // Импорт мобильного меню

type MenuItem = {
  title: string;
  children?: { title: string; route: string }[];
};

const menuItemsForBurger: MenuItem[] = [
  {
    title: "Услуги",
    children: [
      { title: "История", route: "/history" },
      { title: "Цели и задачи", route: "/aim" },
    ],
  },
  {
    title: "Портфолио",
    children: [
      { title: "История", route: "/history" },
      { title: "Цели и задачи", route: "/aim" },
    ],
  },
  {
    title: "Flutter",
    children: [
      { title: "История", route: "/history" },
      { title: "Цели и задачи", route: "/aim" },
    ],
  },
  
  {
    title: "Контакты",
    children: [
      { title: "История", route: "/history" },
      { title: "Цели и задачи", route: "/aim" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Закрыть меню при клике вне его
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as HTMLElement).closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#service">Услуги</Link>
          </li>
          <li>
            <Link href="#portfolio">Портфолио</Link>
          </li>
          <li>
            <Link href="#technology">Технологии</Link>
          </li>
          <li>
            <Link href="#contacts">Контакты</Link>
          </li>
        </ul>
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
        {/* Бургер-меню иконка */}
        <MenuIcon className="md:hidden cursor-pointer" onClick={toggleMenu} />
      </aside>

      {isMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex flex-col">
          {/* Блок крестика для закрытия меню справа */}
          <div className="absolute top-4 right-4">
            <XIcon className="w-8 h-8 cursor-pointer text-white" onClick={toggleMenu} />
          </div>
          <MobileMenu menuItems={menuItemsForBurger} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;

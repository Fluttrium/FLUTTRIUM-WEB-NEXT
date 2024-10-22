'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type MenuItem = {
  title: string;
  children?: { title: string; route: string }[];
};

const Navbar = () => {
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
  <Link href="/flutter">Flutter</Link>
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
        {/* Отображаем номер телефона для мобильной версии */}
        <p className="md:hidden text-2xl font-semibold text-white">
          +7(921)011-27-94
        </p>
      </aside>
    </header>
  );
};

export default Navbar;

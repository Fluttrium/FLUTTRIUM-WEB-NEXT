"use client";
import { IconButton } from "@mui/material";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/store";
import { CTAButton } from "@/components/hero/CTAbutton";
import { Logo } from "@/components/hero/logo";

const Navbar = ({ className }: { className?: string }) => {
  const { messages } = useTranslations();
  const [active, setActive] = useState<string | null>(null);
  const { language, setLanguage, detectLanguageByIP } = useLanguage();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined" && !Cookies.get("language")) {
      detectLanguageByIP();
    }
  }, [detectLanguageByIP]);

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    router.refresh();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!isClient) return null;

  return (
    <header className="fixed right-0 left-0 top-10 z-[100] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4 md:px-0">
        <div
          id="navbar-logo-portal"
          className="pointer-events-auto relative z-[101] flex-shrink-0"
        >
          <div>
            <Logo />
          </div>
        </div>

        {/* ДЕСКТОПНОЕ МЕНЮ */}
        <nav className="hidden md:flex items-center justify-center flex-1 relative z-[105]">
          <Menu setActive={setActive}>
            <HoveredLink href="/vitrina" className="text-xl xl:text-2xl">
              {messages.navbar?.mainNavItm9 || "Витрина"}
            </HoveredLink>

            <MenuItem
              setActive={setActive}
              active={active}
              item={messages.navbar?.mainNavItm1 || "Услуги"}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-sites" className="text-lg xl:text-xl">
                  {messages.navbar?.serviceItm1 || "Разработка веб-сайтов"}
                </HoveredLink>
                <HoveredLink href="/mobileapp" className="text-lg xl:text-xl">
                  {messages.navbar?.serviceItm2 || "Мобильные приложения"}
                </HoveredLink>
                <HoveredLink href="/uiuxdesign" className="text-lg xl:text-xl">
                  {messages.navbar?.serviceItm3 || "UI/UX дизайн"}
                </HoveredLink>
                <HoveredLink href="/itconsul" className="text-lg xl:text-xl">
                  {messages.navbar?.serviceItm4 ||
                    "Консультации по технологиям"}
                </HoveredLink>
                <HoveredLink href="/itsupport" className="text-lg xl:text-xl">
                  {messages.navbar?.serviceItm5 || "Поддержка и обслуживание"}
                </HoveredLink>
              </div>
            </MenuItem>

            <HoveredLink href="/studstartap" className="text-xl xl:text-2xl">
              {messages.navbar?.mainNavItm2 || "СтудСтартап"}
            </HoveredLink>

            <MenuItem
              setActive={setActive}
              active={active}
              item={messages.navbar?.mainNavItm3 || "Продукты"}
            >
              <div className="text-sm grid grid-cols-1 gap-4 p-3 lg:p-4 lg:grid-cols-2 lg:gap-6">
                <ProductItem
                  title={
                    messages.navbar?.title1 ||
                    "Коробочное приложение для ритейла"
                  }
                  href="/retail"
                  src="/iphone-15-pro.png"
                  description={
                    messages.navbar?.description1 ||
                    "Готовое решение для магазинов и сетей, позволяющее управлять продажами, складом и клиентской базой"
                  }
                />
                <ProductItem
                  title={messages.navbar?.title2 || "Приложение для корпораций"}
                  href="/corporation"
                  src="/taximock/Black-Titanium.png"
                  description={
                    messages.navbar?.description2 ||
                    "Инструмент для улучшения внутренних процессов компании, обеспечивающий автоматизацию бизнес-процессов"
                  }
                />
                <ProductItem
                  title={messages.navbar?.title3 || "Интернет магазин"}
                  href="/internetshop"
                  src="/knifesmock/macbook-air-15.png"
                  description={
                    messages.navbar?.description3 ||
                    "Платформа для онлайн-продаж, позволяющая быстро создать и управлять интернет-магазином"
                  }
                />
                <ProductItem
                  title={messages.navbar?.title4 || "CRM система"}
                  href="/crm"
                  src="/Mockup.png"
                  description={
                    messages.navbar?.description4 ||
                    "Инновационное решение для управления взаимоотношениями с клиентами"
                  }
                />
                <ProductItem
                  title={messages.navbar?.title5 || "Телеграм Бот"}
                  href="/tgbot"
                  src="/Black2.png"
                  description={
                    messages.navbar?.description7 ||
                    "Оптимизация и автоматизация бизнес процессов в компании"
                  }
                />
                <ProductItem
                  title={
                    messages.navbar?.title6 || "Seo оптимизация, Яндекс Директ"
                  }
                  href="/direct"
                  src="/Direct.png"
                  description={
                    messages.navbar?.description8 ||
                    "Комплексное продвижение сайта: SEO и реклама в Яндекс Директе"
                  }
                />
              </div>
            </MenuItem>

            <HoveredLink href="/price" className="text-xl xl:text-2xl">
              {messages.navbar?.mainNavItm4 || "Цены"}
            </HoveredLink>

            <MenuItem
              setActive={setActive}
              active={active}
              item={messages.navbar?.mainNavItm5 || "Контакты"}
            >
              <div className="flex items-center gap-4 p-4">
                <IconButton
                  href="https://t.me/fluttriumchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <FaTelegramPlane className="text-white text-3xl xl:text-4xl" />
                </IconButton>
                <IconButton
                  href="https://github.com/orgs/Fluttrium"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <FaGithub className="text-white text-3xl xl:text-4xl" />
                </IconButton>
                <IconButton
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <FaInstagram className="text-white text-3xl xl:text-4xl" />
                </IconButton>
                <IconButton
                  href="https://www.youtube.com/channel/UCcBh05h-yxZOzXhnOz9ub5w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <FaYoutube className="text-white text-3xl xl:text-4xl" />
                </IconButton>
                <a
                  href="tel:+74994901183"
                  className="text-lg xl:text-xl font-semibold text-white"
                >
                  +7(499)490-11-83
                </a>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item={messages.navbar?.mainNavItm6 || "Технологии"}
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Flutter"
                  href="/flutter"
                  src="/flutter-10181843-8492733.png"
                  description={
                    messages.navbar?.description5 ||
                    "Современный фреймворк от Google для разработки нативных приложений на мобильных устройствах"
                  }
                />
                <ProductItem
                  title="Next JS"
                  href="/nextjs"
                  src="/nextjs-light.svg"
                  description={
                    messages.navbar?.description6 ||
                    "Мощный фреймворк для React, который упрощает создание быстрых и производительных веб-приложений"
                  }
                />
              </div>
            </MenuItem>
          </Menu>
        </nav>

        {/* ДЕСКТОПНЫЙ ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 relative z-[101] mr-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg xl:text-xl px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200">
              {language === "en"
                ? "EN"
                : language === "ru"
                  ? "RU"
                  : language === "cz"
                    ? "CZ"
                    : language === "de"
                      ? "DE"
                      : "RU"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-black/90 backdrop-blur-xl border border-neutral-700">
              {["en", "ru", "cz", "de"].map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  className="text-lg px-4 py-2 hover:bg-white/10 transition-colors duration-200"
                  onClick={() => handleChangeLanguage(lang)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{lang.toUpperCase()}</span>
                    {language === lang && (
                      <div className="h-1 bg-blue-400 w-4 rounded-full" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* КНОПКА - Портал или обычный рендер */}
        <div
          id="navbar-button-portal"
          className="pointer-events-auto relative z-[101] flex-shrink-0"
        >
          <div>
            <CTAButton
              text={messages.navbar?.navMainButton || "Начать проект"}
            />
          </div>
        </div>

        {/* БУРГЕР МЕНЮ (только мобильная версия) */}
        <div className="md:hidden flex items-center ml-4 flex-shrink-0 relative z-[103]">
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-200 hover:scale-110 p-2"
          >
            {isMenuOpen ? (
              <MdClose className="text-3xl text-white" />
            ) : (
              <FaBars className="text-3xl text-white" />
            )}
          </IconButton>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-[150] md:hidden"
              onClick={closeMenu}
            />
            <div className="fixed left-0 right-0 top-0 mx-0 bg-black/95 backdrop-blur-xl z-[151] md:hidden border-b border-white/10 shadow-2xl max-h-screen overflow-y-auto">
              {/* КНОПКА ЗАКРЫТИЯ */}
              <div className="absolute top-10 right-4 z-[152]">
                <IconButton
                  onClick={closeMenu}
                  className="transition-all duration-200 hover:scale-110 p-2"
                >
                  <MdClose className="text-3xl text-white" />
                </IconButton>
              </div>

              <div className="flex flex-col p-6 pt-24 gap-3">
                <HoveredLink
                  href="/web-sites"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.serviceItm1 || "Веб-сайты"}
                </HoveredLink>
                <HoveredLink
                  href="/mobileapp"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.serviceItm2 || "Мобильные приложения"}
                </HoveredLink>
                <HoveredLink
                  href="/uiuxdesign"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.serviceItm3 || "UI/UX дизайн"}
                </HoveredLink>
                <HoveredLink
                  href="/itconsul"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.serviceItm4 || "IT консалтинг"}
                </HoveredLink>
                <HoveredLink
                  href="/itsupport"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.serviceItm5 || "IT поддержка"}
                </HoveredLink>

                <hr className="my-2 border-t border-white/20" />

                <HoveredLink
                  href="/retail"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title1 || "Ритейл"}
                </HoveredLink>
                <HoveredLink
                  href="/corporation"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title2 || "Корпорации"}
                </HoveredLink>
                <HoveredLink
                  href="/internetshop"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title3 || "Интернет-магазины"}
                </HoveredLink>
                <HoveredLink
                  href="/crm"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title4 || "CRM системы"}
                </HoveredLink>
                <HoveredLink
                  href="/tgbot"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title5 || "Телеграм боты"}
                </HoveredLink>
                <HoveredLink
                  href="/direct"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.title6 || "Direct"}
                </HoveredLink>

                <hr className="my-2 border-t border-white/20" />

                <HoveredLink
                  href="/flutter"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  Flutter
                </HoveredLink>
                <HoveredLink
                  href="/nextjs"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.mainNavItm7 || "Next.js"}
                </HoveredLink>
                <HoveredLink
                  href="/studstartap"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.mainNavItm2 || "СтудСтартап"}
                </HoveredLink>
                <HoveredLink
                  href="/vitrina"
                  onClick={closeMenu}
                  className="text-xl text-left dark:text-white hover:text-blue-400 transition-colors py-3"
                >
                  {messages.navbar?.mainNavItm9 || "Витрина"}
                </HoveredLink>

                <hr className="my-2 border-t border-white/20" />

                <Link
                  href="/brief"
                  onClick={closeMenu}
                  className="relative h-12 overflow-hidden rounded-full p-[2px] focus:outline-none my-3"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-semibold text-white backdrop-blur-3xl whitespace-nowrap">
                    {messages.navbar?.navMainButton || "Начать проект"}
                  </span>
                </Link>

                <hr className="my-2 border-t border-white/20" />

                <div className="flex items-center justify-center gap-3 py-2 pb-6">
                  {["en", "ru", "cz", "de"].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        handleChangeLanguage(lang);
                        closeMenu();
                      }}
                      className={`px-4 py-2 rounded-lg text-base font-medium transition-all ${
                        language === lang
                          ? "bg-blue-500 text-white shadow-lg scale-105"
                          : "bg-white/10 text-neutral-200 hover:bg-white/20"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;

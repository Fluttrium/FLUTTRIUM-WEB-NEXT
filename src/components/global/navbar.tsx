"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {HoveredLink, Menu, MenuItem, ProductItem} from "../ui/navbar-menu";
import {IconButton} from "@mui/material";
import {FaGithub, FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube} from "react-icons/fa";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useLanguage} from "@/store";
import {useRouter} from "next/navigation";
import {useTranslations} from "use-intl";

const Navbar = ({className}: { className?: string }) => {
    const t = useTranslations('navbar');
    const [active, setActive] = useState<string | null>(null);
    const {language, setLanguage} = useLanguage();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChangeLanguage = (value: string) => {
        setLanguage(value);
        router.refresh(); // Перезагрузка страницы для применения изменений
    };

    if (!isClient) return null;

    return (
        <header
            className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
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

            <nav
                className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <Menu setActive={setActive}>

                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm1')}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-sites">Разработка веб-сайтов</HoveredLink>
                            <HoveredLink href="#portfolio">Мобильные приложения</HoveredLink>
                            <HoveredLink href="/flutter">UI/UX дизайн</HoveredLink>
                            <HoveredLink href="#technology">Консультации по технологиям</HoveredLink>
                            <HoveredLink href="#contacts">Поддержка и обслуживание</HoveredLink>
                        </div>
                    </MenuItem>
                    <HoveredLink href="/flutter">{t("mainNavItm2")}</HoveredLink>
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm3')}>
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
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm4')}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/price/base">Базовый план</HoveredLink>
                            <HoveredLink href="/price/standart">Стандартный план</HoveredLink>
                            <HoveredLink href="/price/premium">Премиум план</HoveredLink>
                            <HoveredLink href="/price/individual">Индивидуальные услуги</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm5')}>
                        <IconButton href="https://t.me/fluttrium_official" target="_blank" rel="noopener noreferrer"
                                    aria-label="Telegram">
                            <FaTelegramPlane className="text-white text-4xl md:text-6xl"/>
                        </IconButton>
                        <IconButton href="https://www.tiktok.com/@fluttrium" target="_blank" rel="noopener noreferrer"
                                    aria-label="TikTok">
                            <FaTiktok className="text-white text-4xl md:text-6xl"/>
                        </IconButton>
                        <IconButton href="https://github.com/orgs/Fluttrium" target="_blank" rel="noopener noreferrer"
                                    aria-label="GitHub">
                            <FaGithub className="text-white text-4xl md:text-6xl"/>
                        </IconButton>
                        <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="text-white text-4xl md:text-6xl"/>
                        </IconButton>
                        <IconButton href="https://www.youtube.com/channel/UCcBh05h-yxZOzXhnOz9ub5w" target="_blank"
                                    rel="noopener noreferrer" aria-label="Youtube">
                            <FaYoutube className="text-white text-4xl md:text-6xl"/>
                        </IconButton>
                        <p className="text-sm font-semibold md:text-2xl mr-1 md:mr-2 text-center">+7(921)011-27-94</p>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm6')}>
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Flutter"
                                href="/flutter"
                                src="/flutter-10181843-8492733.png"
                                description="Современный фреймворк от Google для разработки нативных приложений на мобильных устройствах"
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

            <div className="flex items-center gap-2 md:gap-4">
                {language === "ru" && (
                    <div className="text-sm font-semibold md:text-2xl mr-1 md:mr-2">+7(921)011-27-94</div>
                )}
                <DropdownMenu>
                    <DropdownMenuTrigger className='text-3xl'>
                        {language === "en" ? "EN" : language === "ru" ? "RU" : "CZ"}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='mt-4 flex flex-col bg-black/40 backdrop-blur-lg z-[100] items-center'>
                        <DropdownMenuItem
                            className='text-3xl flex flex-col items-center'
                            onClick={() => handleChangeLanguage('en')}
                        >
                            EN
                            {language === "en" && <div className='h-1 bg-white w-full mt-1'></div>}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className='text-3xl flex flex-col items-center'
                            onClick={() => handleChangeLanguage('ru')}
                        >
                            RU
                            {language === "ru" && <div className='h-1 bg-white w-full mt-1'></div>}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className='text-3xl flex flex-col items-center'
                            onClick={() => handleChangeLanguage('cz')}
                        >
                            CZ
                            {language === "cz" && <div className='h-1 bg-white w-full mt-1'></div>}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <Link
                    href="/brief"
                    className="relative h-8 md:h-12 overflow-hidden rounded-full p-[2px] md:p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span
                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 md:px-6 py-1 md:py-2 text-xs md:text-base font-semibold text-white backdrop-blur-3xl">
                    {t('navMainButton')}
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;

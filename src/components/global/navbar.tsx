"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {HoveredLink, Menu, MenuItem, ProductItem} from "../ui/navbar-menu";
import {IconButton} from "@mui/material";
import {FaGithub, FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube, FaBars} from "react-icons/fa";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useLanguage} from "@/store";
import {useRouter} from "next/navigation";
import {useTranslations} from "use-intl";
import {MdClose} from "react-icons/md";


const Navbar = ({className}: { className?: string }) => {
    const t = useTranslations('navbar');
    const [active, setActive] = useState<string | null>(null);
    const {language, setLanguage} = useLanguage();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChangeLanguage = (value: string) => {
        setLanguage(value);
        router.refresh();
    };

    if (!isClient) return null;

    return (
        <header
            className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">

            <aside className="flex items-center gap-3">
                <Link
                    href="/"
                    className="flex items-center gap-2" // Стили для размещения элементов в строку
                >
                    <Image
                        src="/logo.png"
                        width={28}
                        height={40}
                        alt="fuzzie logo"
                        className="shadow-sm"
                    />
                    <span className="text-2xl font-semibold text-white md:text-4xl">
      Fluttrium
    </span>
                </Link>
            </aside>

            {/* Бургер-меню для мобильных устройств */}
            <div className="lg:hidden flex items-center">
                <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MdClose className="text-3xl text-white"/> :
                        <FaBars className="text-3xl text-white"/>}
                </IconButton>
            </div>

            {/* Основное меню для мобильных устройств */}
            {isMenuOpen && (
                <div className="absolute left-0 right-0 top-0 mt-16 bg-black backdrop-blur-lg z-[99] flex flex-col p-4">
                    <div className="flex flex-col items-start"> {/* Add items-start here */}
                        <HoveredLink href="/web-sites"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("serviceItm1")}</HoveredLink>
                        <HoveredLink href="/mobileapp"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("serviceItm2")}</HoveredLink>
                        <HoveredLink href="/uiuxdesign"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("serviceItm3")}</HoveredLink>
                        <HoveredLink href="/itconsul"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("serviceItm4")}</HoveredLink>
                        <HoveredLink href="/itsupport"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("serviceItm5")}</HoveredLink>
                        <hr className="my-4 border-t-2 border-gray-600"/>
                        <HoveredLink href="/retail"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t('title1')}</HoveredLink>
                        <HoveredLink href="/corporation"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t('title2')}</HoveredLink>
                        <HoveredLink href="/internetshop"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t('title3')}</HoveredLink>
                        <HoveredLink href="/crm"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t('title4')}</HoveredLink>
                        <hr className="my-4 border-t-2 border-gray-600"/>
                        <HoveredLink href="/flutter"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("mainNavItm2")}</HoveredLink>
                        <HoveredLink href="/nextjs"
                                     className="text-xl md:text-2xl text-left hover:text-blue-500">{t("mainNavItm7")}</HoveredLink>
                        <hr className="my-4 border-t-2 border-gray-600"/>
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
                    <div className="flex items-center gap-4 mt-4">
                        {/* Dropdown menu for language selection */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-3xl">
                                {language === "en" ? "EN" : language === "ru" ? "RU" : "CZ"}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="mt-4 flex flex-col bg-black/40 backdrop-blur-lg z-[100] items-center">
                                <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                                  onClick={() => handleChangeLanguage('en')}>
                                    <div className="flex items-center">EN</div>
                                    {language === "en" && <div className="h-1 bg-white w-full mt-1"></div>}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                                  onClick={() => handleChangeLanguage('ru')}>
                                    <div className="flex items-center">RU</div>
                                    {language === "ru" && <div className="h-1 bg-white w-full mt-1"></div>}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                                  onClick={() => handleChangeLanguage('cz')}>
                                    <div className="flex items-center">CZ</div>
                                    {language === "cz" && <div className="h-1 bg-white w-full mt-1"></div>}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            )}

            {/* Десктопное меню */}
            <nav
                className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden xl:block sm:hidden">
                {/* Десктопное меню */}
                <Menu setActive={setActive}>
                    {/* Меню для десктопа */}
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm1')}>
                        <div className="flex flex-col space-y-4 text-sm md:text-xl">
                            <HoveredLink href="/web-sites"
                                         className="text-xl md:text-2xl">{t("serviceItm1")}</HoveredLink>
                            <HoveredLink href="/mobileapp"
                                         className="text-xl md:text-2xl">{t("serviceItm2")}</HoveredLink>
                            <HoveredLink href="/uiuxdesign"
                                         className="text-xl md:text-2xl">{t("serviceItm3")}</HoveredLink>
                            <HoveredLink href="/itconsul"
                                         className="text-xl md:text-2xl">{t("serviceItm4")}</HoveredLink>
                            <HoveredLink href="/itsupport"
                                         className="text-xl md:text-2xl">{t("serviceItm5")}</HoveredLink>
                        </div>
                    </MenuItem>
                    <HoveredLink href="/flutter" className="text-2xl md:text-2xl">{t("mainNavItm2")}</HoveredLink>
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm3')}>
                        <div className="text-sm grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:gap-6 sm:p-4">
                            <ProductItem title={t('title1')} href="/retail" src="/crm/iPhone 15 Pro.png"
                                         description={t('description1')}/>
                            <ProductItem title={t('title2')} href="/corporation" src="/taximock/Black-Titanium.png"
                                         description={t('description2')}/>
                            <ProductItem title={t('title3')} href="/internetshop"
                                         src="/knifesmock/MacBookAir(15 inch).png" description={t('description3')}/>
                            <ProductItem title={t('title4')} href="/crm" src="/Mockup.png"
                                         description={t('description4')}/>
                        </div>
                    </MenuItem>
                    <HoveredLink href="/price" className="text-2xl md:text-2xl">{t('mainNavItm4')}</HoveredLink>
                    <MenuItem setActive={setActive} active={active} item={t('mainNavItm5')}>
                        {/* Иконки соцсетей для десктопа */}
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
                            <ProductItem title="Flutter" href="/flutter" src="/flutter-10181843-8492733.png"
                                         description={t('description5')}/>
                            <ProductItem title="Next JS" href="/nextjs" src="/projects/nextjs-light.svg"
                                         description={t('description6')}/>
                        </div>
                    </MenuItem>
                </Menu>
            </nav>

            <div className="flex items-center gap-2 md:gap-4 hidden md:flex">
                {language === "ru" && (
                    <div className="text-sm font-semibold md:text-2xl mr-1 md:mr-2">+7(921)011-27-94</div>
                )}
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-3xl">
                        {language === "en" ? "EN" : language === "ru" ? "RU" : "CZ"}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="mt-4 flex flex-col bg-black/40 backdrop-blur-lg z-[100] items-center">
                        <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                          onClick={() => handleChangeLanguage('en')}>
                            <div className="flex items-center">EN</div>
                            {language === "en" && <div className="h-1 bg-white w-full mt-1"></div>}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                          onClick={() => handleChangeLanguage('ru')}>
                            <div className="flex items-center">RU</div>
                            {language === "ru" && <div className="h-1 bg-white w-full mt-1"></div>}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-3xl flex flex-col items-center"
                                          onClick={() => handleChangeLanguage('cz')}>
                            <div className="flex items-center">CZ</div>
                            {language === "cz" && <div className="h-1 bg-white w-full mt-1"></div>}
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

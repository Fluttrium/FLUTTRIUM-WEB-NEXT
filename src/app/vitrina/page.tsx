"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function VitrinaPage() {
  const { messages } = useTranslations();
  const m: any = (messages as any).VitrinaPage;
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Решетка как на главной странице */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="container mx-auto p-8 pt-32 relative z-10">
        <h1 className="mb-8 text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 dark:text-white">
          {m?.title}
        </h1>
        {/* Одна расширенная карточка в два раза шире */}
        <div className="mb-12">
          <ExpandedBusinessCard />
        </div>
       
       
      </div>
    </div>
  );
}


// Расширенная карточка-пакет готового бизнеса
function ExpandedBusinessCard() {
  const { messages } = useTranslations();
  const m: any = (messages as any).VitrinaPage;
  return (
          <div className="rounded-[22px] max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-white dark:bg-zinc-900 relative overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Решетка внутри карточки */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
              <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-neutral-200 mb-8">
          {m?.subtitle}
        </h2>
        <p className="text-2xl sm:text-3xl text-neutral-600 dark:text-neutral-400 max-w-5xl mx-auto leading-relaxed">
          {m?.description}
        </p>
      </div>
      
      {/* Три картинки в ряд с увеличенным размером - адаптивно */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {/* Левая картинка - Интернет-магазин */}
        <div className="space-y-6 md:hover:scale-105 transition-all duration-300">
                    <h3 className="text-3xl font-semibold text-black dark:text-neutral-200 text-center">
            {m?.sections?.webstore?.title}
          </h3>
          <div className="relative">
            <Image
              src="/projects/knifes.png"
              alt={m?.sections?.webstore?.title || "Webstore"}
              width={500}
              height={400}
              className="w-full h-80 object-cover rounded-xl shadow-2xl"
            />
            <span className="absolute top-4 right-4 bg-blue-500 text-white text-base px-4 py-2 rounded-full font-semibold shadow-lg">
              {m?.sections?.webstore?.badge}
            </span>
          </div>
          <div className="space-y-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-black dark:text-neutral-200 mb-4">{m?.sections?.webstore?.features?.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.responsive}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.seo}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.integration}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.orders}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.multilang}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.payment}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.delivery}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.webstore?.features?.ai}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Правая картинка - Мобильное приложение */}
        <div className="space-y-6 md:hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-semibold text-black dark:text-neutral-200 text-center">
            {m?.sections?.mobile?.title}
          </h3>
      <div className="relative">
            <Image
              src="/Magaz4.png"
              alt={m?.sections?.mobile?.title || "Mobile app"}
              width={500}
              height={400}
              className="w-full h-80 object-contain rounded-xl shadow-2xl"
            />
            <span className="absolute top-4 right-4 bg-purple-500 text-white text-base px-4 py-2 rounded-full font-semibold shadow-lg">
              {m?.sections?.mobile?.badge}
        </span>
          </div>
          <div className="space-y-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-black dark:text-neutral-200 mb-4">{m?.sections?.mobile?.features?.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.mobile?.features?.notifications}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.mobile?.features?.offline}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.mobile?.features?.biometric}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.mobile?.features?.qr}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.mobile?.features?.location}</span>
              </div>
            </div>
          </div>
        </div>
        
                {/* Третий блок - Социальные сети */}
        <div className="space-y-6 md:hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-semibold text-black dark:text-neutral-200 text-center">
            {m?.sections?.social?.title}
          </h3>
          <div className="relative">
            <Image
              src="/ChatGPT Image 25 авг. 2025 г., 13_53_39.png"
              alt={m?.sections?.social?.title || "Social networks"}
              width={500}
              height={400}
              className="w-full h-80 object-contain rounded-xl shadow-2xl"
            />
          </div>
          <div className="space-y-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-black dark:text-neutral-200 mb-4">{m?.sections?.social?.features?.title}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.social?.features?.telegram}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.social?.features?.instagram}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.social?.features?.vk}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.social?.features?.content}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-base text-neutral-600 dark:text-neutral-400">{m?.sections?.social?.features?.automation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Дополнительные блоки с информацией - адаптивно */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {/* Блок с техническими характеристиками */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl relative overflow-hidden border border-blue-200 dark:border-blue-800">
          {/* Решетка в техническом блоке */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <h3 className="text-2xl font-semibold text-black dark:text-neutral-200 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {m?.sections?.technical?.title}
        </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.technical?.frontend}</span>
              <span className="font-medium">{m?.sections?.technical?.frontend_value}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.technical?.backend}</span>
              <span className="font-medium">{m?.sections?.technical?.backend_value}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.technical?.database}</span>
              <span className="font-medium">{m?.sections?.technical?.database_value}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.technical?.mobile}</span>
              <span className="font-medium">{m?.sections?.technical?.mobile_value}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.technical?.hosting}</span>
              <span className="font-medium">{m?.sections?.technical?.hosting_value}</span>
            </div>
          </div>
        </div>
        
        {/* Блок с маркетинговыми инструментами */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl relative overflow-hidden border border-green-200 dark:border-green-800">
          {/* Решетка в маркетинговом блоке */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <h3 className="text-2xl font-semibold text-black dark:text-neutral-200 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {m?.sections?.marketing?.title}
          </h3>
                      <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.marketing?.analytics}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.marketing?.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.marketing?.seo}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.marketing?.social}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-600 dark:text-neutral-400">{m?.sections?.marketing?.ads}</span>
              </div>
            </div>
        </div>
      </div>
      
      {/* Блок с дополнительными услугами */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 md:p-8 rounded-xl mb-8 sm:mb-12 relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
          {/* Решетка в блоке услуг */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '25px 25px'
            }}></div>
          </div>
        <h3 className="text-3xl font-semibold text-black dark:text-neutral-200 mb-6 text-center">{m?.sections?.services?.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{m?.sections?.services?.domain}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{m?.sections?.services?.ssl}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{m?.sections?.services?.support}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{m?.sections?.services?.training}</p>
          </div>
        </div>
      </div>
      
      {/* Видео-обзор площадки */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-3xl font-semibold text-black dark:text-neutral-200 text-center mb-6">{m?.sections?.video?.title}</h3>
        <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl bg-black hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
          <video
            className="w-full h-full object-cover"
            controls
            poster="/magaz2.png"
            preload="metadata"
          >
            <source src="/magaz2.mp4" type="video/mp4" />

            {/* fallback text intentionally omitted for i18n simplicity */}
          </video>
        </div>
      </div>
      
      {/* Кнопка заказа с увеличенным размером */}
      <div className="text-center">
        <Link href="/brief">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {m?.cta?.button}
          </Button>
        </Link>
      </div>
          </div>
  );
}

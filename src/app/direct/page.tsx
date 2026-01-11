"use client";
import {
  ArrowRight,
  BarChart3,
  Check,
  Lightbulb,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import AppleCardsCarouselDemo from "@/components/AppleCards";
import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import Modal from "@/components/Modal";
import { Spotlight } from "@/components/ui/spotlight";
import { FeedbackForm2 } from "@/components/ui/writeus2";
import { useTranslations } from "@/hooks/useTranslations";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center pt-20 md:pt-0">
      {/* Дополнительные эффекты поверх фона */}

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 "></div>
      <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-white">
            {messages.DirectPage?.hero?.title ||
              "SEO и Яндекс Директ — ваш сайт в ТОПе и поток клиентов"}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            {messages.DirectPage?.hero?.subtitle ||
              "Настроим поисковое продвижение и рекламные кампании под ключ."}{" "}
            <span className="text-blue-400 font-semibold">
              {messages.DirectPage?.hero?.subtitleHighlight ||
                "Увеличим охват, заявки и продажи без слива бюджета"}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-lg text-white-400 pt-6 md:pt-8 px-4">
            <div className="flex items-center gap-2 md:gap-3 bg-green-500/10 px-3 md:px-4 py-2 rounded-full border border-green-500/20">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span>
                {messages.DirectPage?.hero?.benefits?.traffic ||
                  "Рост трафика за 3 месяца"}
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-blue-500/10 px-3 md:px-4 py-2 rounded-full border border-blue-500/20">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span>
                {messages.DirectPage?.hero?.benefits?.leads ||
                  "Увеличение заявок из поиска"}
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-purple-500/10 px-3 md:px-4 py-2 rounded-full border border-purple-500/20">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              <span>
                {messages.DirectPage?.hero?.benefits?.satisfaction ||
                  "Клиентов довольны результатом"}
              </span>
            </div>
          </div>

          <div className="pt-6 md:pt-8">
            <button
              onClick={handleOpenModal}
              className="relative inline-flex items-center justify-center px-8 md:px-12 py-3 md:py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-base md:text-lg"
            >
              {messages.DirectPage?.hero?.cta || "Запросить аудит"}
            </button>
          </div>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </div>
  );
};
// Компонент успешных кейсов с анимациями
const SuccessCasesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { messages } = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("success-cases");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const projects = [
    {
      id: "vosvod",
      title:
        messages.DirectPage?.successCases?.vosvod?.title ||
        "Сайт и автоматизация для Всероссийского общества спасания на воде",
      subtitle:
        messages.DirectPage?.successCases?.vosvod?.subtitle ||
        "Система управления операционной деятельностью",
      description:
        messages.DirectPage?.successCases?.vosvod?.description ||
        "Разработали современный сайт с интеграцией Яндекс Директа и SEO-оптимизацией для максимального привлечения клиентов и повышения конверсии",
      direction:
        messages.DirectPage?.successCases?.vosvod?.direction ||
        "Получение прав на лодку, обучение спасению на воде и сопутствующие услуги",
      student:
        messages.DirectPage?.successCases?.vosvod?.developer ||
        "Команда разработки Fluttrium",
      result:
        messages.DirectPage?.successCases?.vosvod?.result ||
        "Подняли на первое место в поиске при высокой конкуренции",
      metrics: messages.DirectPage?.successCases?.vosvod?.metrics || [
        "Вывели сайт на первое место в Яндекс поиске по ключевым запросам",
        "Увеличили продажи и конверсии",
        "Оптимизировали рекламные кампании в Яндекс Директ",
        "Повысили узнаваемость и доверие к бренду",
      ],
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      hoverColor: "hover:border-purple-400",
    },
  ];

  return (
    <section id="success-cases" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-8 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            {messages.DirectPage?.successCases?.title ||
              "Наши успешные проекты"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-10 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group p-4 md:p-8 rounded-2xl md:rounded-3xl border ${project.borderColor}/30 bg-gray-800/30 ${project.hoverColor} transition-all duration-500 cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:bg-gray-700/40 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-4 md:mb-6 gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                  <img
                    src="/logo-vosvod.webp"
                    alt="ВОСВОД"
                    className="w-20 h-20 md:w-40 md:h-40 object-contain"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="text-sm md:text-base text-green-400 font-medium animate-pulse">
                      ✅ Успешно внедрен • {project.result}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="text-blue-400 mb-4 md:mb-6 font-medium text-sm md:text-base">
                Направление: {project.direction}
              </div>

              <div className="mb-4 md:mb-6">
                <h4 className="text-white font-semibold mb-2 md:mb-3 text-base md:text-lg">
                  Ключевые результаты:
                </h4>
                <ul className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 md:gap-3 text-gray-300"
                    >
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 text-xs md:text-sm mb-4 md:mb-6">
                <div className="p-3 md:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
                  <div className="text-gray-400 mb-1">Разработчик:</div>
                  <div className="text-white font-medium">
                    {project.student}
                  </div>
                </div>
                <div className="p-3 md:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
                  <div className="text-gray-400 mb-1">Статус:</div>
                  <div className="text-green-400 font-medium">
                    {messages.DirectPage?.successCases?.vosvod?.status ||
                      "Активно используется"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-all duration-300">
                <a
                  href="https://vosvod.spb.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 underline hover:no-underline"
                >
                  <span>
                    {messages.DirectPage?.successCases?.vosvod?.more ||
                      "Подробнее о проекте"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA блок */}
        <div
          className={`text-center transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl md:rounded-3xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="text-center md:text-left">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                {messages.DirectPage?.successCases?.cta?.title ||
                  "Нужно SEO-продвижение?"}
              </div>
              <div className="text-base md:text-lg text-gray-300">
                {messages.DirectPage?.successCases?.cta?.subtitle ||
                  "Мы поднимем ваш сайт в ТОП Яндекса и Google, даже в самых конкурентных нишах"}
              </div>
            </div>
            <button
              onClick={handleOpenModal}
              className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 whitespace-nowrap shadow-lg hover:scale-105 hover:shadow-blue-500/50 text-sm md:text-base"
            >
              {messages.DirectPage?.successCases?.cta?.button ||
                "Заказать аудит"}
            </button>
          </div>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

// Компонент возможностей ботов
const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { messages } = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("features");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-14 h-14 text-blue-400" />,
      title:
        messages.DirectPage?.features?.seo?.title || "Умное SEO-продвижение",
      items: messages.DirectPage?.features?.seo?.items || [
        "Анализ ниши, конкурентов и формирование семантики",
        "Оптимизация сайта под топ Яндекса и Google",
        "Рост позиций — уже в первые 2–3 недели",
        "Подробные отчёты и контроль всех изменений",
      ],
      gradient: "from-blue-600/20 to-blue-500/20",
      border: "border-blue-500/30",
    },
    {
      icon: <Zap className="w-14 h-14 text-purple-400" />,
      title:
        messages.DirectPage?.features?.yandex?.title ||
        "Эффективный Яндекс Директ",
      items: messages.DirectPage?.features?.yandex?.items || [
        "Настраиваем кампании, которые реально приносят заявки",
        "Упор на ROI и CPL, а не «потраченный бюджет»",
        "Мультисегмент: горячие, тёплые, холодные клиенты",
        "Постоянная оптимизация ставок и ключевых слов",
      ],
      gradient: "from-purple-600/20 to-purple-500/20",
      border: "border-purple-500/30",
    },
    {
      icon: <BarChart3 className="w-14 h-14 text-green-400" />,
      title:
        messages.DirectPage?.features?.analytics?.title || "Аналитика и рост",
      items: messages.DirectPage?.features?.analytics?.items || [
        "Глубокая воронка: от клика до заявки и продажи",
        "Связь с CRM: видите источник каждого клиента",
        "Оптимизация под бизнес-цели: не просто трафик, а прибыль",
        "Автоматические отчёты в Telegram, Google Sheets, Notion",
      ],
      gradient: "from-green-600/20 to-green-500/20",
      border: "border-green-500/30",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-8 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            {messages.DirectPage?.features?.title ||
              "Наши возможности в SEO и рекламе"}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto px-4">
            {messages.DirectPage?.features?.subtitle ||
              "Приводим клиентов, а не просто тратим бюджет: настраиваем SEO и рекламу с фокусом на"}{" "}
            <span className="text-green-400 font-bold">
              {messages.DirectPage?.features?.subtitleHighlight1 ||
                "окупаемость (ROI)"}
            </span>{" "}
            и{" "}
            <span className="text-blue-400 font-bold">
              {messages.DirectPage?.features?.subtitleHighlight2 ||
                "стоимость заявки (CPL)"}
            </span>
            .{" "}
            {messages.DirectPage?.features?.subtitleEnd ||
              "Увеличим трафик, заявки и прибыль."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-4 md:p-8 bg-gradient-to-br ${feature.gradient} rounded-2xl md:rounded-3xl border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer group transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                {feature.title}
              </h3>
              <ul className="text-base md:text-lg text-gray-300 space-y-2 md:space-y-3">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 md:gap-3 hover:text-white transition-colors duration-300"
                  >
                    <Check
                      className="w-4 h-4 md:w-5 md:h-5 text-green-400 mt-1 flex-shrink-0 animate-pulse"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Компонент процесса разработки
const ProcessSection = () => {
  const [_isVisible, setIsVisible] = useState(false);
  const { messages } = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("process");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "01",
      title:
        messages.DirectPage?.process?.steps?.[0]?.title ||
        "Погружаемся в бизнес",
      desc:
        messages.DirectPage?.process?.steps?.[0]?.desc ||
        "Анализируем ваш рынок, аудиторию и конкурентов. Выявляем точки роста",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "02",
      title:
        messages.DirectPage?.process?.steps?.[1]?.title ||
        "Запускаем SEO и рекламу",
      desc:
        messages.DirectPage?.process?.steps?.[1]?.desc ||
        "Настраиваем SEO-оптимизацию и рекламные кампании в Яндекс/Google с упором на заявки",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      step: "03",
      title:
        messages.DirectPage?.process?.steps?.[2]?.title ||
        "Оптимизируем по метрикам",
      desc:
        messages.DirectPage?.process?.steps?.[2]?.desc ||
        "Снижаем CPL, повышаем ROI. Тестируем, масштабируем, убираем лишнее",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      step: "04",
      title:
        messages.DirectPage?.process?.steps?.[3]?.title ||
        "Даём результат в цифрах",
      desc:
        messages.DirectPage?.process?.steps?.[3]?.desc ||
        "Каждый месяц — отчёт: заявки, звонки, позиции, ROI. Всё прозрачно и по делу",
      icon: <Trophy className="w-8 h-8" />,
    },
  ];
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            {messages.DirectPage?.process?.title || "Как это работает?"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 md:mb-8">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  {item.step}
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">
                  {item.icon}
                </div>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-gray-500 mx-auto mt-4 md:mt-6 hidden md:block absolute top-8 md:top-10 -right-12 md:-right-16" />
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Компонент формы с анимациями
const ContactFormSection = () => {
  const { messages } = useTranslations();

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 transform transition-all duration-1000 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            {messages.DirectPage?.contact?.title ||
              "Хотите стабильный поток клиентов?"}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 px-4">
            {messages.DirectPage?.contact?.subtitle ||
              "Оставьте заявку — запустим SEO и рекламу под ключ с акцентом на ROI и рост продаж"}
          </p>
        </div>
        <FeedbackForm2 />
      </div>
    </section>
  );
};

const TelegramBotLanding = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SuccessCasesSection />
        <FeaturesSection />
        <ProcessSection />
        <ContactFormSection />
        <AppleCardsCarouselDemo />
        <SocialContacts />
      </div>
    </div>
  );
};

export default TelegramBotLanding;

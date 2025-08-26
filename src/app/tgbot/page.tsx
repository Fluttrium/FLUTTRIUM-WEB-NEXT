'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Star, Users, Zap, Shield, ArrowRight, Mail, Phone, MessageCircle, Lightbulb, Target, Trophy, Bot, BookOpen, BarChart3, Clock, TrendingUp, Award } from 'lucide-react';
import {Spotlight} from "@/components/ui/spotlight";
import {animations, colors, components, shadows, textStyles} from "../../../tailwind.config";
import {FeedbackForm2} from "@/components/ui/writeus2";
import SocialContacts from "@/components/Contacs";
import Modal from "@/components/Modal";
import AppleCardsCarouselDemo from "@/components/AppleCards";
import { useTranslations } from "@/hooks/useTranslations";

const HeroSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { messages } = useTranslations();

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    return (
        <div className="relative overflow-hidden min-h-screen flex items-center">
            {/* Дополнительные эффекты поверх фона */}

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 "></div>
            <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
                <div className="space-y-8">
                    <h1 className={`${textStyles.h1} md:text-8xl leading-tight`}>
                        {messages.TgbotPage?.hero?.title || "Телеграм-боты"}{" "}
                        <span className={textStyles.gradient}>
                            {messages.TgbotPage?.hero?.titleHighlight || "для обучения"}
                        </span>
                    </h1>

                    <p className={`${textStyles.body1} md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
                        {messages.TgbotPage?.hero?.subtitle || "Автоматизируем корпоративное обучение с помощью Telegram-ботов."}{" "}
                        <span className="text-blue-400 font-semibold">{messages.TgbotPage?.hero?.subtitleHighlight || "Повышаем компетенции на 98%"}</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-lg text-white-400 pt-8">
                        <div className="flex items-center gap-3 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>{messages.TgbotPage?.hero?.benefits?.smart || "Умные боты"}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Check className="w-5 h-5 text-blue-400" />
                            <span>{messages.TgbotPage?.hero?.benefits?.analytics || "Аналитика"}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                            <Check className="w-5 h-5 text-purple-400" />
                            <span>{messages.TgbotPage?.hero?.benefits?.learn247 || "24/7 обучение"}</span>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            onClick={handleOpenModal}
                            className="relative inline-flex items-center justify-center px-12 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out text-lg"
                        >
                            {messages.TgbotPage?.hero?.cta || "Создать бота"}
                        </button>
                    </div>
                    {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
                </div>
            </div>
        </div>
    );
};
// Компонент успешных кейсов с анимациями
const SuccessCasesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showCase5, setShowCase5] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const { messages } = useTranslations();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('success-cases');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const handleShowCase5 = () => {
        setShowCase5(true);
        // Прокручиваем к секции с кейсами
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const projects = [
        {
            id: 'gazprom',
            title: messages.TgbotPage?.successCases?.gazprom?.title || 'Корпоративное обучение Газпром нефти',
            subtitle: messages.TgbotPage?.successCases?.gazprom?.subtitle || 'Система управления операционной деятельностью',
            description: messages.TgbotPage?.successCases?.gazprom?.description || 'Адаптированная версия бота для отделения СУОД с расширенной системой вопросов и многоуровневой оценкой',
            direction: messages.TgbotPage?.successCases?.gazprom?.direction || 'Операционная деятельность и управление процессами',
            student: messages.TgbotPage?.successCases?.gazprom?.developer || 'Команда разработки Fluttrium',
            result: messages.TgbotPage?.successCases?.gazprom?.result || 'Внедрен в блоках КС дочерних обществ',
            metrics: [
                ...(messages.TgbotPage?.successCases?.gazprom?.metrics || [
                    'Тестирование изменилось с 1 раза в 2 года на ежедневное',
                    'Остаточные знания увеличились до 98%',
                    'Реальное время отслеживания прогресса',
                    'Актуальная база вопросов с обратной связью'
                ])
            ],
            gradient: 'from-purple-500 to-pink-500',
            borderColor: 'border-purple-500',
            hoverColor: 'hover:border-purple-400'
        }
    ];

    return (
        <section id="success-cases" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {messages.TgbotPage?.successCases?.title || 'Наши успешные проекты'}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
                        Автоматизировали обучение в крупных корпорациях и увеличили эффективность до{" "}
                        <span className="text-green-400 animate-pulse font-bold">98%</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group p-8 rounded-3xl border ${project.borderColor}/30 bg-gray-800/30 ${project.hoverColor} transition-all duration-500 cursor-pointer backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:bg-gray-700/40 transform ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/Gazprom_Neft_Logo.png"
                                        alt="Газпром нефть"
                                        className="w-40 h-40 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                        <div className="text-green-400 font-medium animate-pulse">✅ Успешно внедрен • {project.result}</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                            </div>

                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                            <div className="text-blue-400 mb-6 font-medium">
                                {messages.TgbotPage?.successCases?.gazprom?.direction ? `${messages.TgbotPage.successCases.gazprom.direction}` : `Направление: ${project.direction}`}
                            </div>

                            <div className="mb-6">
                                <h4 className="text-white font-semibold mb-3">{messages.TgbotPage?.successCases?.gazprom?.resultsTitle || 'Ключевые результаты:'}</h4>
                                <ul className="space-y-2">
                                    {project.metrics.map((metric, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                                            <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                                            <span className="text-sm">{metric}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-6 text-sm mb-6">
                                <div className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
                                    <div className="text-gray-400 mb-1">{messages.TgbotPage?.successCases?.developerLabel || 'Разработчик:'}</div>
                                    <div className="text-white font-medium">{project.student}</div>
                                </div>
                                <div className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
                                    <div className="text-gray-400 mb-1">{messages.TgbotPage?.successCases?.statusLabel || 'Статус:'}</div>
                                    <div className="text-green-400 font-medium">{messages.TgbotPage?.successCases?.gazprom?.status || 'Активно используется'}</div>
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-all duration-300 cursor-pointer"
                                onClick={handleShowCase5}
                            >
                                <span>{messages.TgbotPage?.successCases?.gazprom?.more || 'Подробнее о проекте'}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA блок */}
                <div className={`text-center transform transition-all duration-1000 delay-400 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                        <div className="text-left">
                            <div className="text-2xl md:text-3xl font-bold text-white mb-3">Нужен корпоративный бот?</div>
                            <div className="text-lg text-gray-300">Автоматизируем обучение ваших сотрудников и повысим их компетенции</div>
                        </div>
                        <button
                            onClick={handleOpenModal}
                            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 whitespace-nowrap shadow-lg hover:scale-105 hover:shadow-blue-500/50"
                        >
                            Заказать бота
                        </button>
                    </div>
                </div>
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
            </div>
        </section>
    );
};

// Компонент возможностей ботов
const FeaturesSection = () => {
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
            { threshold: 0.1 }
        );

        const element = document.getElementById('features');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const features = [
        {
            icon: <BookOpen className="w-14 h-14 text-blue-400" />,
            title: messages.TgbotPage?.features?.tests?.title || 'Умные тесты',
            items: messages.TgbotPage?.features?.tests?.items || [
                'Ежедневная подача вопросов малыми порциями',
                'Различные типы вопросов (выбор, ввод, сопоставление)',
                'Адаптивная сложность по уровню компетенций',
                'Система обратной связи и объяснений'
            ],
            gradient: 'from-blue-600/20 to-blue-500/20',
            border: 'border-blue-500/30'
        },
        {
            icon: <BarChart3 className="w-14 h-14 text-purple-400" />,
            title: messages.TgbotPage?.features?.analytics?.title || 'Аналитика и отчеты',
            items: messages.TgbotPage?.features?.analytics?.items || [
                'Отслеживание прогресса в реальном времени',
                'Детальная статистика по сотрудникам',
                'Анализ динамики обучения',
                'Выявление слабых мест в знаниях'
            ],
            gradient: 'from-purple-600/20 to-purple-500/20',
            border: 'border-purple-500/30'
        },
        {
            icon: <Award className="w-14 h-14 text-green-400" />,
            title: messages.TgbotPage?.features?.hr?.title || 'Автоматизация HR',
            items: messages.TgbotPage?.features?.hr?.items || [
                'Интеграция с корпоративными системами',
                'Автоматическое планирование обучения',
                'Система сертификации и оценки',
                'Геймификация процесса обучения'
            ],
            gradient: 'from-green-600/20 to-green-500/20',
            border: 'border-green-500/30'
        }
    ];

    return (
        <section id="features" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {messages.TgbotPage?.features?.title || 'Возможности наших ботов'}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
                        {messages.TgbotPage?.features?.subtitle || 'Полная автоматизация корпоративного обучения с детальной аналитикой'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={handleOpenModal}
                            className={`p-8 bg-gradient-to-br ${feature.gradient} rounded-3xl border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer group transform ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                            <ul className="text-lg text-gray-300 space-y-3">
                                {feature.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0 animate-pulse" style={{animationDelay: `${idx * 100}ms`}} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
            </div>
        </section>
    );
};

// Компонент процесса разработки
const ProcessSection = () => {
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
            { threshold: 0.1 }
        );

        const element = document.getElementById('process');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const steps = [
        { step: '01', title: messages.TgbotPage?.process?.steps?.[0]?.title || 'Анализ задач', desc: messages.TgbotPage?.process?.steps?.[0]?.desc || 'Изучаем потребности в обучении', icon: <Target className="w-8 h-8" /> },
        { step: '02', title: messages.TgbotPage?.process?.steps?.[1]?.title || 'Разработка', desc: messages.TgbotPage?.process?.steps?.[1]?.desc || 'Создаем умного бота под ваши цели', icon: <Bot className="w-8 h-8" /> },
        { step: '03', title: messages.TgbotPage?.process?.steps?.[2]?.title || 'Тестирование', desc: messages.TgbotPage?.process?.steps?.[2]?.desc || 'Проверяем функционал на пилотной группе', icon: <Shield className="w-8 h-8" /> },
        { step: '04', title: messages.TgbotPage?.process?.steps?.[3]?.title || 'Внедрение', desc: messages.TgbotPage?.process?.steps?.[3]?.desc || 'Запускаем и обучаем сотрудников', icon: <Trophy className="w-8 h-8" /> }
    ];
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`${textStyles.h2} mb-6`}>
                        {messages.TgbotPage?.process?.title || 'Как это работает?'}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-pointer"
                            onClick={handleOpenModal}
                        >
                            <div className="relative mb-8">
                                <div className={`w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 ${animations.transition.normal} shadow-lg`}>
                                    {item.step}
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">
                                    {item.icon}
                                </div>
                                {index < 3 && (
                                    <ArrowRight className="w-8 h-8 text-gray-500 mx-auto mt-6 hidden md:block absolute top-10 -right-16" />
                                )}
                            </div>
                            <h3 className={`${textStyles.h3} mb-3`}>{item.title}</h3>
                            <p className={`${textStyles.body2} text-gray-300`}>{item.desc}</p>
                        </div>
                    ))}
                </div>
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
            </div>
        </section>
    );
};

// Компонент формы с анимациями
const ContactFormSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { messages } = useTranslations();

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <section id="contact" className="py-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className= "text-center mb-12 transform transition-all duration-1000 ">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {messages.TgbotPage?.contact?.title || 'Готовы автоматизировать обучение?'}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300">
                        {messages.TgbotPage?.contact?.subtitle || 'Расскажите о ваших потребностях в корпоративном обучении'}
                    </p>
                </div>
                <FeedbackForm2/>
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
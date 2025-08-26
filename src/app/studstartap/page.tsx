"use client";
import React, { useState } from "react";
import {
    ChevronRight,
    Check,
    Star,
    Users,
    Zap,
    Shield,
    ArrowRight,
    Mail,
    Phone,
    MessageCircle,
    Lightbulb,
    Target,
    Trophy
} from "lucide-react";

import { Spotlight } from "@/components/ui/spotlight";
import { FeedbackForm2 } from "@/components/ui/writeus2";
import { animations, colors, components, shadows, textStyles } from "../../../tailwind.config";
import Footer from "@/components/global/footer";
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
            <Spotlight className="absolute z-50 top-0 right-50" fill="white" />
            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
                <div className="space-y-8">
                    <h1 className={`${textStyles.h1} md:text-8xl leading-tight`}>
                        {messages.StudPage?.hero?.title1 || 'Студенческий'} <span className={textStyles.gradient}>{messages.StudPage?.hero?.title2 || 'Стартап'}</span>
                    </h1>
                    <p className={`${textStyles.body1} md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
                        {messages.StudPage?.hero?.subtitle || 'Превращаем твою идею в успешный стартап с'} <span className="text-blue-400 font-semibold">{messages.StudPage?.hero?.subtitleHighlight || 'грантом 1 млн рублей'}</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-lg text-white-400 pt-8">
                        <div className="flex items-center gap-3 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>{messages.StudPage?.hero?.benefits?.support || 'Поддержка идеи'}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Check className="w-5 h-5 text-blue-400" />
                            <span>{messages.StudPage?.hero?.benefits?.dev || 'Техразработка'}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                            <Check className="w-5 h-5 text-purple-400" />
                            <span>{messages.StudPage?.hero?.benefits?.guarantee || '100% гарантия'}</span>
                        </div>
                    </div>
                    <div className="pt-8">
                        <button
                            onClick={handleOpenModal}
                            className="relative inline-flex items-center justify-center px-10 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out whitespace-nowrap"
                        >
                            {messages.StudPage?.hero?.cta || 'Создать стартап'}
                        </button>
                    </div>
                    {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
                </div>
            </div>
        </div>
    );
};

const SuccessCasesSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { messages } = useTranslations();

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const projects = [
        {
            id: "asleep",
            title: "Asleep.online",
            subtitle: "Платформа для здорового сна",
            description: "Инновационная система мониторинга и улучшения качества сна с использованием ИИ",
            direction: "Медицина и технологии здоровьесбережения",
            student: "Центр магистерских программ",
            result: "Разработан уникальный продукт",
            link: "https://asleep.online",
            gradient: "from-blue-500 to-purple-500",
            borderColor: "border-blue-500",
            hoverColor: "hover:border-blue-400"
        },
        {
            id: "crm",
            title: "CRM PropertyTech",
            subtitle: "CRM для недвижимости",
            description: "Умная CRM-система с ИИ для торговых центров и недвижимости",
            direction: "Цифровые технологии",
            student: "СПбПУ Петра Великого",
            result: "5 клиентов на старте",
            link: "#",
            gradient: "from-purple-500 to-pink-500",
            borderColor: "border-purple-500",
            hoverColor: "hover:border-purple-400"
        }
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`${textStyles.h2} text-white mb-6`}>{messages.StudPage?.success?.title || 'Наши успешные кейсы'}</h2>
                    <p className={`${textStyles.body1} md:text-2xl ${colors.dark.text.secondary} max-w-4xl mx-auto`}>
                        {messages.StudPage?.success?.subtitle || 'Мы уже помогли студентам получить гранты и реализовать свои идеи.'} <span className="text-blue-400">{messages.StudPage?.success?.subtitleHighlight || 'Теперь ваша очередь!'}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group p-8 rounded-3xl border ${project.borderColor}/30 bg-gray-800/30 ${project.hoverColor} ${animations.transition.normal} cursor-pointer ${colors.effects.backdrop} ${animations.hover.scale} hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className={`${textStyles.h3} mb-1`}>{project.title}</h3>
                                    <div className="text-green-400 font-medium">✅ Грант получен • 1 млн ₽</div>
                                </div>
                                <ArrowRight className={`w-6 h-6 text-gray-400 group-hover:text-blue-400 ${animations.transition.normal}`} />
                            </div>
                            <p className={`${textStyles.body2} text-gray-300 mb-4 leading-relaxed`}>{project.description}</p>
                            <div className="text-blue-400 mb-6 font-medium">{messages.StudPage?.success?.labels?.direction || 'Направление:'} {project.direction}</div>
                            <div className="grid grid-cols-2 gap-6 text-sm mb-6">
                                <div className="p-4 bg-gray-700/30 rounded-lg">
                                    <div className="text-gray-400 mb-1">{messages.StudPage?.success?.labels?.student || 'Студент:'}</div>
                                    <div className="text-white font-medium">{project.student}</div>
                                </div>
                                <div className="p-4 bg-gray-700/30 rounded-lg">
                                    <div className="text-gray-400 mb-1">{messages.StudPage?.success?.labels?.result || 'Результат:'}</div>
                                    <div className="text-white font-medium">{project.result}</div>
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 text-blue-400 group-hover:text-blue-300 ${animations.transition.normal}`}
                            >
                                <span>{messages.StudPage?.success?.labels?.view || 'Смотреть проект'}</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className={`inline-flex items-center gap-6 p-8 ${colors.gradients.card} rounded-3xl border border-blue-500/30 ${colors.effects.backdrop}`}>
                        <div className="text-left">
                            <div className={`${textStyles.h3} text-3xl mb-3`}>У вас есть своя идея?</div>
                            <div className={`${textStyles.body2} text-gray-300`}>Мы поможем превратить ее в успешный стартап с грантом 1 млн рублей</div>
                        </div>
                        <button
                            onClick={handleOpenModal}
                            className={`px-10 py-4 ${components.button.primary} font-bold rounded-full ${animations.transition.normal} whitespace-nowrap shadow-lg`}
                        >
                            Создать стартап
                        </button>
                    </div>
                </div>
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
            </div>
        </section>
    );
};

const StudentStartupLanding = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>
            <div className="relative z-10">
                <HeroSection />
                <SuccessCasesSection />
                {/* Остальные секции сюда */}
                <ContactFormSection />
                <SocialContacts />
            </div>
        </div>
    );
};

const ContactFormSection = () => {
    const { messages } = useTranslations();
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`${textStyles.h2} mb-6`}>{messages.StudPage?.contact?.title || 'Готов превратить идею в стартап?'}</h2>
                    <p className={`${textStyles.body1} md:text-2xl text-gray-300`}>
                        {messages.StudPage?.contact?.subtitle || 'Расскажи о своей идее и получи персональную стратегию развития'}
                    </p>
                </div>
                <FeedbackForm2 />
            </div>
            <AppleCardsCarouselDemo />
        </section>
    );
};

export default StudentStartupLanding;

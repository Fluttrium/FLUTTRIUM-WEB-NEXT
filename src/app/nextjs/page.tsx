import AppleCardsCarouselDemo from "@/components/AppleCards";
import { CardHoverEffectDemo } from "@/components/Cards";
import SocialContacts from "@/components/Contacs";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import Navbar from "@/components/global/navbar";
import { ProjectsCards } from "@/components/Projects";
import { TypewriterEffectSmoothDemo } from "@/components/Tehnology";
import { FlipWords } from "@/components/ui/flip-words";
import { GlareCard } from "@/components/ui/glare-card";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/nextjs/globals.css";
import { CoverDemo } from "@/components/ui/coverDemo";
import FlutterInfo from "@/components/ui/blockText";
import { Benefit } from "@/components/benefit";
import { StickyScrollRevealDemo } from "@/components/ui/skill";
import { ExperienceDemo } from "@/components/ui/expierence";
import { PricingAndTimeline } from "@/components/ui/price";
import { CardHoverEffectDemo3 } from "@/components/ui/Cards3";
import { FreeAudit } from "@/components/ui/audit";
import { FeedbackForm } from "@/components/ui/writeus";
import NextInfo from "@/components/ui/nextInfo";
import { Benefit2 } from "@/components/ui/benefit2";
import NextDevelopmentCard from "@/components/ui/razrab";
import { PricingAndTimeline2 } from "@/components/ui/price2";
import { CardHoverEffectDemo5 } from "@/components/ui/Cards5";

export default function Flutter() {
    return (
        <main className="overflow-hidden relative h-full w-full bg-slate-950">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <Navbar />

            {/* Контейнер Spotlight с динамическими отступами */}
            <div className="relative z-50 mt-20 md:mt-40 mb-10 px-4 md:px-12 lg:px-20">
                <Spotlight className="absolute z-50" />
                <NextInfo />
            </div>

            {/* Блок с преимуществами, адаптированный для мобильных устройств */}
            <div className="relative">
                <Benefit2 />
            </div>

            {/* Блок с информацией о разработке */}
            <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
                <NextDevelopmentCard />
            </div>

            {/* Блок с расценками и сроками */}
            <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
                <PricingAndTimeline2 />
            </div>

            {/* Блок с эффектом наведения на карточки */}
            <div className="relative px-4 md:px-12 lg:px-20">
                <CardHoverEffectDemo5 />
            </div>

            {/* Форма обратной связи */}
            <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
                <FeedbackForm />
            </div>
        </main>
    );
}

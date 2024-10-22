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
import "@/app/globals.css";
import { CoverDemo } from "@/components/ui/coverDemo";
import FlutterInfo from "@/components/ui/blockText";
import { Benefit } from "@/components/benefit";
import { StickyScrollRevealDemo } from "@/components/ui/skill";
import { ExperienceDemo } from "@/components/ui/expierence";
import { PricingAndTimeline } from "@/components/ui/price";
import { CardHoverEffectDemo3 } from "@/components/ui/Cards3";
import { FreeAudit } from "@/components/ui/audit";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <section className="mp-10 h-auto md:h-screen w-full bg-neutral-950 !overflow-hidden relative flex antialiased">
                <Spotlight className="absolute z-50" />
                <div className="absolute h-full w-full bg-slate-950">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center md:flex-row md:mx-10 z-50 px-4 w-full h-full">
                    <CoverDemo />
                    <img
                        src="/projects/case6.png" // Путь к вашему изображению
                        alt="Описание изображения"
                        className="ml-4 w-1/2 h-auto object-contain" // Настройте размеры по необходимости
                    />
                </div>
            </section>
            <div className="relative z-50 -mt-40">
                <FlutterInfo />
            </div>
            <div className="relative z-50 -mt-40">
            <Benefit/>
            </div>
            <div className="relative z-50 -mt-40">
            <ExperienceDemo/>
            </div>
            <div className="relative z-50 -mt-20">
            <PricingAndTimeline/>
            </div>
            <div className="relative z-50 -mt-40">
            <CardHoverEffectDemo3/>
            </div>
            <FreeAudit/>
            <FeedbackForm/>
        </main>
    );
}

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
import Image from "next/image";

export default function Flutter() {
    return (
        <main className="overflow-hidden relative h-full w-full bg-slate-950">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>

            <Navbar/>
            
        <CoverDemo />
    

            <div className="relative z-50 -mt-40">
                <FlutterInfo/>
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


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
import NextInfo from "@/components/ui/nextInfo";
import { Benefit2 } from "@/components/ui/benefit2";
import NextDevelopmentCard from "@/components/ui/razrab";
import { PricingAndTimeline2 } from "@/components/ui/price2";
import { CardHoverEffectDemo5 } from "@/components/ui/Cards5";

export default function Flutter() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <Spotlight className="absolute" />
            <div className="relative z-50 mt-40 mb-10">
                <NextInfo />
            </div>
            <div className="relative z-50">
            <Benefit2/>
            </div>
            <div className="relative z-50">
            <NextDevelopmentCard/>
            </div>
            <div className="relative z-50">
            <PricingAndTimeline2/>
            </div>
            <div className="relative z-50 -mt-40">
            <CardHoverEffectDemo5/>
            </div>
            <FeedbackForm/>
        </main>
    );
}

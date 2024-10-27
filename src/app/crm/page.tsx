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
import RetailPage from "@/components/ui/retailpage";
import { Advantage } from "@/components/ui/advantages";
import { FunctionEx } from "@/components/ui/function";
import BookDemo from "@/components/ui/bron";
import Licence from "@/components/ui/licence";
import CorporatioPage from "@/components/ui/corporationpage";
import CorporateAppReasons from "@/components/ui/order";
import CorporateAppUsage from "@/components/ui/application";
import { TimelineDemo } from "@/components/ui/steps";
import CrmPage from "@/components/ui/crmpages";
import { HeroParallaxDemo } from "@/components/ui/herParalax";
import { TimelineDemo2 } from "@/components/ui/timelineDemo2";
import CostAndTimeline from "@/components/ui/CostAndTimeline";
import { PricingAndTimeline2 } from "@/components/ui/price2";
import NextDevelopmentCard2 from "@/components/ui/razrab2";
import NextDevelopmentCard3 from "@/components/ui/razrab3";



export default function Flutter() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <CrmPage/>
            <div className="relative z-50 -mt-40">
            <HeroParallaxDemo/>
            </div>
            <NextDevelopmentCard3/>
            <TimelineDemo2/>
            <CostAndTimeline/>
            <FeedbackForm/>
        </main>
    );
}

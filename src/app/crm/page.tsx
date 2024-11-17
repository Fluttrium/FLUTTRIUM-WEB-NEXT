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
        <main className="relative overflow-hidden">
             <Navbar/>
            {/* Grid overlay */}
            <div
                className=" -z-50 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <div className="relative z-50 mt-40 md:mt-40 mb-14 sm:px-6 md:px-12 lg:px-20">
  <Spotlight className="absolute z-50" />
  <CrmPage/>
</div>
                
                <div className="-mt-40">
                    <HeroParallaxDemo/>
                </div>
                {/* <div className="relative">
                <NextDevelopmentCard3/>
                </div> */}
                <div className="lg:mt-20">
  <TimelineDemo2 />
</div>
                <CostAndTimeline/>
                <FeedbackForm/>
            
        </main>
    );
}

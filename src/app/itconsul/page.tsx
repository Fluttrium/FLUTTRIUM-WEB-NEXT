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
import InternetShopPage from "@/components/ui/internetshopPage";
import { CardHoverEffectDemo6 } from "@/components/ui/Cards6";
import { CardHoverEffectDemo7 } from "@/components/ui/Cards7";
import NextDevelopmentCard2 from "@/components/ui/razrab2";
import { FAQ } from "@/components/ui/faq";
import { TextForm } from "@/components/ui/textform";
import ItPage from "@/components/ui/itconsulPage";
import { ProjectStages4 } from "@/components/ui/projectstages4";



export default function Flutter() {
    return (
        <main className="overflow-hidden relative h-full w-full bg-slate-950">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <Navbar/>
            <ItPage/>
            <div className="-mt-40">
                <ProjectStages4/>
            </div>
            <TextForm/>
        </main>
    );
}

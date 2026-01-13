import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";

import { Benefit } from "@/components/benefit";
import FlutterInfo from "@/components/ui/blockText";
import { CardHoverEffectDemo3 } from "@/components/ui/Cards3";
import { CoverDemo } from "@/components/ui/coverDemo";
import { ExperienceDemo } from "@/components/ui/expierence";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="overflow-hidden relative h-full w-full ">
      <Navbar />
      <div className="relative z-50 md:mt-0 mt-20 sm:px-12 ">
        <Spotlight className="absolute z-50" />
        <CoverDemo />
      </div>
      <div className="flex z-50 mt-20 md:mt-24 sm:mt-0">
        <FlutterInfo />
      </div>
      <div className="relative z-50 mt-20 md:mt-24">
        <Benefit />
      </div>
      <div className="relative z-50 mt-20 md:mt-24">
        <ExperienceDemo />
      </div>
      {/*<div className="relative z-50">*/}
      {/*    <PricingAndTimeline/>*/}
      {/*</div>*/}
      <div className="relative z-50 mt-20 md:mt-24">
        <CardHoverEffectDemo3 />
      </div>
      {/* <FreeAudit/> */}
      <div className="relative z-50 mt-20 md:mt-24">
        <FeedbackForm />
      </div>
      <div className="relative z-50 mt-20 md:mt-24">
        <SocialContacts />
      </div>
    </main>
  );
}

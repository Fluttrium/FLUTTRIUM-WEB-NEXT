import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import CostAndTimeline from "@/components/ui/CostAndTimeline";
import CrmPage from "@/components/ui/crmpages";
import { HeroParallaxDemo } from "@/components/ui/herParalax";
import { TimelineDemo2 } from "@/components/ui/timelineDemo2";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      {/* Grid overlay */}
      <div className=" -z-50 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative z-50 mt-40 md:mt-40 mb-14 sm:px-6 md:px-12 lg:px-20">
        <Spotlight className="absolute z-50" />
        <CrmPage />
      </div>

      <div className="-mt-40">
        <HeroParallaxDemo />
      </div>
      {/* <div className="relative">
                <NextDevelopmentCard3/>
                </div> */}
      <div className="lg:mt-20 flex mt-10">
        <TimelineDemo2 />
      </div>
      <CostAndTimeline />
      <FeedbackForm />
      <SocialContacts />
    </main>
  );
}

import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import CorporateAppUsage from "@/components/ui/application";
import CorporatioPage from "@/components/ui/corporationpage";
import CorporateAppReasons from "@/components/ui/order";
import { TimelineDemo } from "@/components/ui/steps";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="relative overflow-hidden">
      <div className=" -z-50 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Navbar />
      <div className="relative z-50 mt-40 md:mt-40 mb-14 sm:px-6 md:px-12 lg:px-20">
        <Spotlight className="absolute z-50" />
        <CorporatioPage />
      </div>
      <div className="mt-40 flex  ">
        <TimelineDemo />
      </div>

      <CorporateAppReasons />

      <CorporateAppUsage />
      <FeedbackForm />
      <div className="relative z-50">
        <SocialContacts />
      </div>
    </main>
  );
}

import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import { ProjectStages3 } from "@/components/ui/projectstages3";
import UiPage from "@/components/ui/uipage";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Uiuxdesign() {
  return (
    <main className="overflow-hidden relative h-full w-full bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Navbar />
      <div className="relative z-50 mt-20 md:mt-24 lg:mt-48 px-4 sm:px-6 md:px-8 lg:px-12">
        <Spotlight className="absolute z-50" />
        <UiPage />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <ProjectStages3 />
      </div>

      <div className="relative z-50 px-4 sm:px-6 md:px-8 lg:px-12">
        <FeedbackForm />
      </div>
      <div className="relative z-50 px-4 sm:px-6 md:px-8 lg:px-12">
        <SocialContacts />
      </div>
    </main>
  );
}

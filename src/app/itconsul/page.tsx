import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import ItPage from "@/components/ui/itconsulPage";
import { ProjectStages4 } from "@/components/ui/projectstages4";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="overflow-hidden relative h-full w-full ">
      <Navbar />
      <div className="relative z-50 mt-20 md:mt-24 lg:mt-48 px-4 sm:px-6 md:px-8 lg:px-12">
        <Spotlight className="absolute z-50" />
        <ItPage />
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <ProjectStages4 />
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

import "@/app/globals.css";
import SocialContacts from "@/components/Contacs";
import ItsupportPage from "@/components/ui/ItSupport";
import { ProjectStages5 } from "@/components/ui/projectstages5";
import { Spotlight } from "@/components/ui/spotlight";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="overflow-hidden relative h-full w-full ">
      <div className="relative z-50 md:mt-0 pt-24 md:pt-28 lg:pt-32 sm:px-12 ">
        <Spotlight className="absolute z-50" />
        <ItsupportPage />
      </div>
      <div className="relative z-50">
        <ProjectStages5 />
      </div>
      <div className="relative z-40">
        <FeedbackForm />
      </div>
      <div className="relative z-50">
        <SocialContacts />
      </div>
    </main>
  );
}

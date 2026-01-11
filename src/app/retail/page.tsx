import SocialContacts from "@/components/Contacs";
import { Spotlight } from "@/components/ui/spotlight";
import "@/app/globals.css";
import { Advantage } from "@/components/ui/advantages";
import { FunctionEx } from "@/components/ui/function";
import Licence from "@/components/ui/licence";
import RetailPage from "@/components/ui/retailpage";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Flutter() {
  return (
    <main className="overflow-hidden relative h-full w-full bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative z-50 pt-0 md:mt-24 lg:mt-48 sm:px-12 ">
        <Spotlight className="absolute z-50" />
        <RetailPage />
      </div>
      <div className="relative ">
        <FunctionEx />
      </div>
      <div className=" overflow-x-auto relative">
        <Advantage />
      </div>
      {/* <div className="relative">
            <BookDemo/>
            </div> */}

      <div className="relative">
        <Licence />
      </div>
      <div className="relative z-50">
        <FeedbackForm />
      </div>
      <div className="relative z-50">
        <SocialContacts />
      </div>
    </main>
  );
}

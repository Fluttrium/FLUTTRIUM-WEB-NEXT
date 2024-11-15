import Navbar from "@/components/global/navbar";
import "@/app/globals.css";
import { FAQ } from "@/components/ui/faq";
import { TextForm } from "@/components/ui/textform";
import ItPage from "@/components/ui/itconsulPage";
import { ProjectStages4 } from "@/components/ui/projectstages4";
import { ProjectStages5 } from "@/components/ui/projectstages5";
import ItsupportPage from "@/components/ui/ItSupport";
import { Spotlight } from "@/components/ui/spotlight";



export default function Flutter() {
    return (
        <main className="overflow-hidden relative h-full w-full bg-slate-950">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <Navbar/>
            <div className="relative z-50 mt-40 md:mt-40 mb-14 sm:px-6 md:px-12 lg:px-20">
  <Spotlight className="absolute z-50" />
  <ItsupportPage/>
</div>
            <div className="-mt-20">
                <ProjectStages5/>
            </div>
            <TextForm/>
        </main>
    );
}

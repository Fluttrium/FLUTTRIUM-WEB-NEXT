import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import "@/app/globals.css";
import { CardHoverEffectDemo6 } from "@/components/ui/Cards6";
import { CardHoverEffectDemo7 } from "@/components/ui/Cards7";
import { FAQ } from "@/components/ui/faq";
import InternetShopPage from "@/components/ui/internetshopPage";
import { TextForm } from "@/components/ui/textform";

export default function Flutter() {
  return (
    <main className="  overflow-hidden relative h-full w-full ">
      <Navbar />
      <div className="z-40 relative pt-24">
        <InternetShopPage />

        <CardHoverEffectDemo6 />

        <CardHoverEffectDemo7 />

        {/*<NextDevelopmentCard2/>*/}
      </div>

      <div className="z-30 relative">
        <FAQ />
      </div>
      <div className="z-50 relative">
        <TextForm />
      </div>
      <div className="relative z-50">
        <SocialContacts />
      </div>
    </main>
  );
}

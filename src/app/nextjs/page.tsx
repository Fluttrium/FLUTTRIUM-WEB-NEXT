import SocialContacts from "@/components/Contacs";
import Navbar from "@/components/global/navbar";
import { Benefit2 } from "@/components/ui/benefit2";
import { CardHoverEffectDemo5 } from "@/components/ui/Cards5";
import NextInfo from "@/components/ui/nextInfo";
import { PricingAndTimeline2 } from "@/components/ui/price2";
import NextDevelopmentCard from "@/components/ui/razrab";
import { Spotlight } from "@/components/ui/spotlight";
import { FeedbackForm } from "@/components/ui/writeus";

export default function Nextjs() {
  return (
    <main className="overflow-hidden relative h-full w-full ">
      <Navbar />
      <div className="relative z-50 md:mt-0 mt-10 sm:px-12 ">
        <Spotlight className="absolute z-50" />
        <NextInfo />
      </div>

      {/* Блок с преимуществами, адаптированный для мобильных устройств */}
      <div className="relative">
        <Benefit2 />
      </div>

      {/* Блок с информацией о разработке */}
      <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
        <NextDevelopmentCard />
      </div>

      {/* Блок с расценками и сроками */}
      <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
        <PricingAndTimeline2 />
      </div>

      {/* Блок с эффектом наведения на карточки */}
      <div className="relative px-4 md:px-12 lg:px-20">
        <CardHoverEffectDemo5 />
      </div>

      {/* Форма обратной связи */}
      <div className="relative z-50 px-4 md:px-12 lg:px-20 mt-10 md:mt-20">
        <FeedbackForm />
      </div>
      <div className="relative z-50">
        <SocialContacts />
      </div>
    </main>
  );
}

import React from "react";
import { CardHoverEffectDemo } from "@/components/Cards";
import Navbar from "@/components/global/navbar";
import { ThreeDCardDemo } from "@/components/Projects";
import { AppleCardsCarouselDemo } from "@/components/AppleCards";
import { Form } from "@/components/Form";
import Footer from "@/components/global/footer";
import { HeroScrollDemo } from "@/components/ContainerScroll";
import { TypewriterEffectSmoothDemo } from "@/components/Tehnology";


export default function Home() {
  return (
    <div>
      <Navbar />
      <ThreeDCardDemo />
      <HeroScrollDemo/>
      <TypewriterEffectSmoothDemo/>
      <CardHoverEffectDemo />
      <AppleCardsCarouselDemo/>
      <Footer/>
    </div>
  );
}

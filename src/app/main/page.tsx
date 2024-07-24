import React from "react";
import { CardHoverEffectDemo } from "@/components/Cards";
import Navbar from "@/components/global/navbar";
import { ThreeDCardDemo } from "@/components/Projects";
import { AppleCardsCarouselDemo } from "@/components/AppleCards";
import { SignupFormDemo } from "@/components/SignUpForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ThreeDCardDemo />
      <CardHoverEffectDemo />
      <AppleCardsCarouselDemo/>
      <SignupFormDemo/>
    </div>
  );
}

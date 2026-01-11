"use client";
import Navbar from "@/components/global/navbar";
import "@/app/globals.css";
import { BriefForm } from "@/components/ui/brief";
import { Spotlight } from "@/components/ui/spotlight";

export default function Brief() {
  return (
    <main className="overflow-hidden">
      <Spotlight className="absolute z-50 top-0 right-50 " fill="white" />
      <Navbar />
      <div className="mt-40">
        <BriefForm />
      </div>
    </main>
  );
}

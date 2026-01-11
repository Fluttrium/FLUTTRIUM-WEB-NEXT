"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/store";

interface LanguageInfoData {
  language: string;
  country: string;
  countryCode: string;
  city: string;
  region: string;
}

export const LanguageInfo: React.FC = () => {
  const { language } = useLanguage();
  const [info, setInfo] = useState<LanguageInfoData | null>(null);
  const [loading, setLoading] = useState(false);

  const detectLanguageInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/detect-language");
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Error detecting language info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    detectLanguageInfo();
  }, [detectLanguageInfo]);

  if (loading) {
    return (
      <div className="text-xs text-gray-400 px-2 py-1">Определяем язык...</div>
    );
  }

  if (!info) {
    return null;
  }

  return (
    <div className="text-xs text-gray-400 px-2 py-1">
      <span className="mr-2">🌍 {info.country}</span>
      <span className="mr-2">🏙️ {info.city}</span>
      <span>🌐 {info.language.toUpperCase()}</span>
    </div>
  );
};

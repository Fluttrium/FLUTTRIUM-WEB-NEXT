"use client";
import { useTranslations } from "@/hooks/useTranslations";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  const { messages } = useTranslations();
  const t: any = (messages as any).CrmParallax;
  const items: any[] = Array.isArray(t?.products) ? t.products : products;
  return <HeroParallax products={items} />;
}

export const products = [
  {
    title: "Widget",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Real Estate List",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Real Estate List",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Widget",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "CRM Funnel",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
  {
    title: "Widget",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Widget",
    link: "",
    thumbnail: "/FlatsGrindWidget.png",
  },
  {
    title: "Documents",
    link: "",
    thumbnail: "/crm/Хранилизе документов.png",
  },
  {
    title: "Dashboard",
    link: "",
    thumbnail: "/crm/Dashboard.png",
  },
  {
    title: "Real Estate",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "Dashboard",
    link: "",
    thumbnail: "/crm/Dashboard.png",
  },
  {
    title: "CRM Funnel",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
  {
    title: "Rent Objects",
    link: "",
    thumbnail: "/crm/Объкты аренды.png",
  },
  {
    title: "Real Estate",
    link: "",
    thumbnail: "/projects/Список недвижимости.png",
  },
  {
    title: "CRM Funnel",
    link: "",
    thumbnail: "/crm/CRMВоронка.png",
  },
];

"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (_props: Props) => {
  return (
    <footer className="py-4 px-4 bg-black/40 backdrop-blur-lg flex items-center border-t-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-4xl font-bold">Fluttrium</p>
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 list-none">
          <li>
            <Link href="#service">Услуги</Link>
          </li>
          <li>
            <Link href="#portfolio">Портфолио</Link>
          </li>
          <li>
            <Link href="#technology">Технологии</Link>
          </li>
          <li>
            <Link href="#contacs">Контакты</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Связаться с нами
          </span>
        </Link>
        <div className="text-white">
          <p>
            Телефон: <a href="tel:+74994901183">+7 (499) 490 11 83</a>
          </p>
          <p>Email: fluttrium.com</p>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;

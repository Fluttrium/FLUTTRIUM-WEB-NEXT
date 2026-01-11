import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

interface LogoProps {
  className?: string;
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className = "" }, ref) => {
    return (
      <aside
        ref={ref}
        className={`flex items-center gap-3 flex-shrink-0 ${className}`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-200 "
        >
          <Image
            src="/logo.png"
            width={28}
            height={40}
            alt="Fluttrium logo"
            className="shadow-sm"
          />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-all duration-200">
            Fluttrium
          </span>
        </Link>
      </aside>
    );
  },
);

Logo.displayName = "Logo";

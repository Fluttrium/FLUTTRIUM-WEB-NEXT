import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/global/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluttrium",
  description: "Развивайте бизнес с нами",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "ru";

  const messages = await import(`../../messages/${language}.json`).then(
    (module) => module.default,
  );

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={onest.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />

            <main className="pt-20 md:pt-0 lg:pt-0">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

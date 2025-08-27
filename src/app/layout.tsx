import {Metadata} from "next";
import {Roboto_Condensed} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {Analytics} from '@vercel/analytics/react';
import {NextIntlClientProvider} from 'next-intl';
import {useLanguage} from "@/store"; // Импортируйте хранилище
import {cookies} from 'next/headers';
import Navbar from "@/components/global/navbar";
import {ThemSwitcher} from "@/components/global/themswitcher";

const inter = Roboto_Condensed({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Fluttrium",
    description: "Развивайте бизнес с нами",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{ children: React.ReactNode }>) {
    // Проверяем язык в куки
    const cookieStore = cookies();
    const language = cookieStore.get('language')?.value || 'ru'; // Устанавливаем значение по умолчанию на 'en'

    // Импортируем сообщения на основе текущего языка
    const messages = await import(`../../messages/${language}.json`).then(module => module.default);

    return (
        <html lang={language}>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                <Navbar/>
                <main className="pt-20 md:pt-0 lg:pt-0">
                    {children}
                </main>
                {/*<ThemSwitcher/>*/}
            </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics/>
        </body>
        </html>
    );
}

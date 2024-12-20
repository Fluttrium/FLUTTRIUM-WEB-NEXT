import type {Metadata} from "next";



export const metadata: Metadata = {
  title: "Fluttrium",
  description: "Развивайте бизнес с нами",
};

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        {children}
      </main>
  );
}

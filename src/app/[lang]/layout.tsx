import "remixicon/fonts/remixicon.css";
import "../../../public/css/navbar.css";
import "../../../public/fonts/flaticon_mycollection.css";
import "swiper/css/bundle";
// Globals Styles
import "../globals.css";

import AosAnimation from "@/components/Layout/AosAnimation";
import BackToTop from "@/components/Layout/BackToTop";
import TosterProvider from "@/providers/TosterProvider";
import DemosSidebar from "@/components/Layout/DemosSidebar";
import RtlDemoSidebar from "@/components/Layout/RtlDemoSidebar";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BeFresh",
  description:
    "Unlock a World of Relaxation: Reserve Your Local Beauty and Wellness Experience",
};

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body className={mukta.className}>
        <NextIntlClientProvider messages={messages}>
          <TosterProvider />

          {children}

          {/* AosAnimation */}
          <AosAnimation />

          {/* BackToTop */}
          <BackToTop />

          {/* DemosSidebar */}
          <DemosSidebar />

          {/* RtlDemoSidebar */}
          <RtlDemoSidebar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

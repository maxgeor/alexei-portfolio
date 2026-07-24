import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexei Kolakis-Landon",
  description: "Alexei Kolakis-Landon — artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-dvh flex-col antialiased">
        <LanguageProvider>
          <SiteHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

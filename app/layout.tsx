import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import "@/style/globals.css";
import Header from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import React from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Welcome to house of Ideas",
  description: "AVE DOMINUS NOX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
    <body className="bg-background text-foreground">

    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <Header/>
      <main className="min-h-[100dvh] overflow-x-hidden  flex flex-col z-0 items-center">
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
    </body>
    </html>
  );
}

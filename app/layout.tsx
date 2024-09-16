
import { EnvVarWarning } from "@/components/env-var-warning";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "@/app/style/globals.css";
import Header from "@/app/sections/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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
          defaultTheme="Light"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen flex flex-col z-0 items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

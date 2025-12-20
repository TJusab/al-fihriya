import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import localFont from "next/font/local";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const lora = localFont({
  src: [
    { path: "/fonts/Lora-VariableFont_wght.ttf", weight: "400 700", style: "normal" },
    { path: "/fonts/Lora-Italic-VariableFont_wght.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--lora",
});

const amiri = localFont({
  src: [
    { path: "/fonts/Amiri-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Amiri-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--amiri",
});

export const metadata: Metadata = {
  title: "Al Fihriya",
  description:
    "Al Fihriya is a community-driven library system",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${lora.className} ${amiri.variable} antialiased`}
        >
          {children}

          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;

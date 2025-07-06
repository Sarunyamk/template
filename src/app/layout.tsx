import { inter } from "@/fonts";
import { cn } from "@/lib/shadcn/utils";
import { LibProviders } from "@/providers";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "<project-name>",
  description: "<project-description>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", inter.variable)}>
      <body>
        <LibProviders>{children}</LibProviders>
      </body>
    </html>
  );
}

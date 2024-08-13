import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../style/globals.css";
import "../style/project/spotify.css";
import "../style/project/twitter.css";
import "../style/project/discord.css";
import "../style/masonry.css";
import { twMerge } from "tailwind-merge";
import { PageTransitionProvider } from "@/components/provider/page-transition-provider";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Rafael Lovelyno",
  description: "Brandon's Portofolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          poppins.className,
          "relative",
          "h-[100vh] w-full",
          "bg-background",
          "overflow-y-scroll",
          "font-light tracking-widest"
        )}
      >
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}

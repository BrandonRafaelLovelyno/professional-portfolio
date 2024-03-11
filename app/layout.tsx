import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
          "h-full w-full",
          "bg-background",
          "overflow-y-auto",
          "font-light tracking-widest static"
        )}
      >
        <Image
          src={"/background.jpg"}
          alt="wallpaper"
          fill
          objectFit="contain"
          className="absolute top-0 left-0 -z-10 w-full h-full"
        />
        {children}
      </body>
    </html>
  );
}

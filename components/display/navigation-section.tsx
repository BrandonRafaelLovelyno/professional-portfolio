"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { usePathname, useRouter } from "next/navigation";

interface NavigationSectionProps {
  onClose: () => void;
  setIsRouting: (isRouting: boolean) => void;
}

interface LinkRoute {
  link: string;
  name: string;
}

const LINK_ROUTE: LinkRoute[] = [
  { link: "/", name: "Home" },
  { link: "/work-exp", name: "Work Experience" },
  { link: "/org-exp", name: "Organization Experience" },
  { link: "/client-exp", name: "Client Experience" },
  { link: "/coding-ev", name: "Coding Event" },
  { link: "/coding-pro", name: "Coding Project" },
  { link: "/certif", name: "Certificate & Award" },
];

const NavigationSection: React.FC<NavigationSectionProps> = ({
  onClose,
  setIsRouting,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <motion.div
        className={twMerge(
          "absolute h-screen w-screen bg-background z-10 bg-opacity-70 flex flex-col gap-y-10 justify-center items-start",
          "px-20 py-28",
          "text-3xl text-secondary"
        )}
        initial={{ opacity: 0 }}
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {LINK_ROUTE.map((route, index) => (
          <button
            key={index}
            className={twMerge(
              " hover:text-secondary transition-all duration-300 text-left",
              "max-lg:text-2xl",
              route.link == pathname
                ? "disable text-secondary cursor-default"
                : "text-primary"
            )}
            onClick={() => {
              if (route.link == pathname) return;
              setIsRouting(true);
              setIsClosing(true);
              setTimeout(onClose, 1000);
              setTimeout(() => router.push(route.link), 1000);
            }}
          >
            {route.name}
          </button>
        ))}
      </motion.div>
      <motion.button
        onClick={() => {
          setIsClosing(true);
          setTimeout(onClose, 1000);
        }}
        className="absolute top-10 right-10 text-primary z-10"
        initial={{ opacity: 0 }}
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IoMdClose size={30} />
      </motion.button>
    </>
  );
};

export default NavigationSection;

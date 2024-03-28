"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";

interface EllipsisLinkButtonProps {
  text: string;
  link: string | undefined;
  children: React.ReactNode;
}

const EllipsisLinkButton: React.FC<EllipsisLinkButtonProps> = ({
  link,
  text,
  children,
}) => {
  const router = useRouter();
  return (
    <button
      className={twMerge(
        "flex flex-row items-center",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold",
        !link && "cursor-not-allowed opacity-50"
      )}
      onClick={() => {
        if (!link) return;
        setTimeout(() => router.push(link), 1200);
      }}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

export default EllipsisLinkButton;

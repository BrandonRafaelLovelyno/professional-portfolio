"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface KnowMoreProps {
  link: string;
  setIsRouting: (isRouting: boolean) => void;
}

const KnowMore: React.FC<KnowMoreProps> = ({ link, setIsRouting }) => {
  const router = useRouter();
  return (
    <button
      className={twMerge(
        "flex flex-row items-center",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold"
      )}
      onClick={() => {
        setIsRouting(true);
        setTimeout(() => router.push(link), 1200);
      }}
    >
      <span>know more</span>
      <FaSearch size={20} />
    </button>
  );
};

export default KnowMore;

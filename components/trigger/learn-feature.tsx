import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { MdFeaturedPlayList } from "react-icons/md";

interface LearnFeatureProps {
  link: string;
  setIsRouting: (isRouting: boolean) => void;
}

const LearnFeature: React.FC<LearnFeatureProps> = ({ link, setIsRouting }) => {
  const router = useRouter();
  return (
    <button
      className={twMerge(
        "flex flex-row items-center w-fit",
        "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
        "hover:bg-primary hover:text-background hover:bg-opacity-80",
        "transition duration-300",
        "font-semibold",
        "mb-20 mr-20"
      )}
      onClick={() => {
        setIsRouting(true);
        setTimeout(() => {
          router.push(link);
        }, 1000);
      }}
    >
      <span>learn feature</span>
      <MdFeaturedPlayList size={20} />
    </button>
  );
};

export default LearnFeature;

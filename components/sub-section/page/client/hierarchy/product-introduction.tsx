import Reveal from "@/components/animation/reveal";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { CLIENT_EXP } from "@/data/client/client-data";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const PRODUCT_TYPE: { title: string; imageUrl: string }[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/client/assets/wyofg9nxyleyves8hi3t.png",
    title: "Content Management System",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/client/assets/lirm43plyqeaa8cszhag.png",
    title: "Competition Management System",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/client/assets/l83gbhoi2tw4qotn4ork.png",
    title: "AI Platform",
  },
];

const getImageSize = (width: number) => {
  if (width > 1024) {
    return 100;
  }
  return 75;
};

const ProductIntroduction = () => {
  const { width } = useContext(PageTransitionContext);
  const imageSize = useMemo(() => getImageSize(width), [width]);

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "green", to: "blue" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "pb-32")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h3 className="font-bold text-xl text-gray-300">
              What are my products?
            </h3>
            <h2 className="font-bold md:text-5xl text-4xl">
              Most of the times
              <span className="text-green-400"> I build custom websites </span>
              for them
            </h2>
            <h3 className="font-bold text-gray-200">I have built</h3>
          </div>
          <div
            className={twMerge(
              "w-full h-fit",
              "flex-wrap",
              "md:flex md:flex-row md:gap-x-5",
              "flex flex-col gap-y-5"
            )}
          >
            {PRODUCT_TYPE.map((product, index) => (
              <div
                key={index}
                className={twMerge(
                  "md:w-[240px] md:h-fit",
                  "w-full h-fit",
                  "md:flex md:flex-col md:items-center md:gap-y-4",
                  "flex flex-row gap-x-3 items-center",
                  "px-3 py-3",
                  "bg-zinc-800 bg-opacity-65",
                  "rounded-lg"
                )}
              >
                <Image
                  height={imageSize}
                  width={imageSize}
                  src={product.imageUrl}
                  alt={product.title}
                />
                <h3 className="text-center font-bold">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default ProductIntroduction;

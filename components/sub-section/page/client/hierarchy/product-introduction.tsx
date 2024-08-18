import Reveal from "@/components/animation/reveal";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { CLIENT_EXP } from "@/data/client/client-data";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const ProductIntroduction = () => {
  const clients = CLIENT_EXP;

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
            <h2 className="font-bold text-3xl">
              Most of the times I build
              <span className="text-green-400"> custom websites</span> for them
            </h2>
            <h3 className="font-bold text-gray-200">
              Here is what I have made
            </h3>
          </div>
          <div
            className={twMerge(
              "w-full h-fit",
              "md:flex md:flex-row md:gap-x-5",
              "flex flex-col gap-y-5"
            )}
          ></div>
        </div>
      </Reveal>
    </>
  );
};

export default ProductIntroduction;

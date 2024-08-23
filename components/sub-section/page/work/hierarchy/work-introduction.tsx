import Reveal from "@/components/animation/reveal";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const WorkIntroduction: React.FC = () => {
  return (
    <>
      <HierarchyIconLine lineColor={{ from: "blue", to: "yellow" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h3 className="font-bold text-xl text-gray-300">
              What do you mean by work?
            </h3>
            <h2 className="font-bold md:text-5xl text-4xl">
              I also spend my time working in{" "}
              <span className="text-blue-400">non-IT freelance</span>
            </h2>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default WorkIntroduction;

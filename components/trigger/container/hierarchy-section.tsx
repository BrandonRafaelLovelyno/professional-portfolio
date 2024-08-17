import Reveal from "@/components/animation/reveal";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const HierarchySection: React.FC<Props> = ({ children }) => {
  return (
    <Reveal childrenDir="up">
      <div className={twMerge("flex flex-row gap-x-5")}>{children}</div>
    </Reveal>
  );
};

export default HierarchySection;

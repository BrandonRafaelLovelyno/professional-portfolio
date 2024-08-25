import Reveal from "@/components/animation/reveal";
import { ExperienceContext } from "@/components/provider/experience-provider";
import CellSelection from "@/components/sub-section/cell-selection";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import WORK_EXP_DATA, { Work } from "@/data/work-data";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const makeCell = (
  work: Work,
  index: number,
  setIsSelectingExperience: (isSelecting: boolean) => void,
  setExperienceIndex: (index: number) => void
) => {
  return {
    imageUrl: work.image.background,
    title: work.position,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsSelectingExperience(false);
      setExperienceIndex(index);
    },
  };
};

const getCellsFromWork = (
  works: Work[],
  setIsSelectingExperience: (isSelecting: boolean) => void,
  setExperienceIndex: (index: number) => void
) => {
  const cells = [];

  for (let i = 0; i < works.length; i++) {
    const client = works[i];
    const cell = makeCell(
      client,
      i,
      setIsSelectingExperience,
      setExperienceIndex
    );

    cells.push(cell);
  }

  return cells;
};

const WorkShowcase: React.FC = () => {
  const { setIsSelectingExperience, setExperienceIndex } =
    useContext(ExperienceContext);

  const cells = getCellsFromWork(
    WORK_EXP_DATA,
    setIsSelectingExperience,
    setExperienceIndex
  );

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "red", to: "blue" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h2 className="font-bold md:text-5xl text-4xl">
              <span className="text-red-500">Click below </span>to learn more!
            </h2>
          </div>
          <CellSelection cells={cells} cellSize={150} />
        </div>
      </Reveal>
    </>
  );
};

export default WorkShowcase;

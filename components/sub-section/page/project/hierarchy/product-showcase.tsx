import Reveal from "@/components/animation/reveal";
import { ProjectContext } from "@/components/provider/project-provider";
import CellSelection from "@/components/sub-section/cell-selection";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import CODING_PRO, { Project } from "@/data/project/project-data";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const makeCell = (
  project: Project,
  index: number,
  setsIsSelectingProject: (isSelecting: boolean) => void,
  setProjectIndex: (index: number) => void
) => {
  return {
    imageUrl: project.image.background,
    title: project.name,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      setsIsSelectingProject(false);
      setProjectIndex(index);
    },
  };
};

const getCellsFromProject = (
  projects: Project[],
  setsIsSelectingProject: (isSelecting: boolean) => void,
  setProjectIndex: (index: number) => void
) => {
  const cells = [];

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const cell = makeCell(project, i, setsIsSelectingProject, setProjectIndex);

    cells.push(cell);
  }

  return cells;
};

const ProductShowcase: React.FC = () => {
  const { setProjectIndex, setIsSelectingProject } = useContext(ProjectContext);

  const cells = getCellsFromProject(
    CODING_PRO,
    setIsSelectingProject,
    setProjectIndex
  );

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "blue", to: "blue" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h2 className="font-bold md:text-5xl text-4xl">
              Take a look at
              <span className="text-blue-500"> my products!</span>
            </h2>
          </div>
          <CellSelection cells={cells} cellSize={150} />
        </div>
      </Reveal>
    </>
  );
};

export default ProductShowcase;

import Reveal from "@/components/animation/reveal";
import { ExperienceContext } from "@/components/provider/experience-provider";
import CellSelection from "@/components/sub-section/cell-selection";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { Client, CLIENT_EXP } from "@/data/client/client-data";
import { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const makeCell = (
  client: Client,
  index: number,
  setIsSelectingExperience: (isSelecting: boolean) => void,
  setExperienceIndex: (index: number) => void
) => {
  return {
    imageUrl: client.images.card,
    title: client.name,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsSelectingExperience(false);
      setExperienceIndex(index);
    },
    textColor: client.color.gradient.from,
  };
};

const getCellsFromClient = (
  clients: Client[],
  setIsSelectingExperience: (isSelecting: boolean) => void,
  setExperienceIndex: (index: number) => void
) => {
  const cells = [];

  for (let i = 0; i < clients.length; i++) {
    const client = clients[i];
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

const ProductShowcase: React.FC = () => {
  const { setIsSelectingExperience, setExperienceIndex } =
    useContext(ExperienceContext);
  const cells = getCellsFromClient(
    CLIENT_EXP,
    setIsSelectingExperience,
    setExperienceIndex
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
              <span className="text-blue-500">Click below </span>to learn more!
            </h2>
          </div>
          <CellSelection cells={cells} cellSize={150} />
        </div>
      </Reveal>
    </>
  );
};

export default ProductShowcase;

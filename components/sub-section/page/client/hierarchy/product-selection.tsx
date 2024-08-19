import Reveal from "@/components/animation/reveal";
import CellSelection from "@/components/sub-section/cell-selection";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { Client, CLIENT_EXP } from "@/data/client/client-data";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const getCellsFromClient = (clients: Client[]) => {
  const cells = [];

  for (const client of clients) {
    cells.push({
      imageUrl: client.backgroundUrl,
      title: client.client.name,
      onClick: () => {
        console.log("Client selected");
      },
    });
  }

  return cells;
};

const ProductSelection: React.FC = () => {
  const cells = getCellsFromClient(CLIENT_EXP);

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "blue", to: "blue" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "pb-32")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h2 className="font-bold md:text-5xl text-4xl">
              <span className="text-blue-500">Take a look at my products!</span>
            </h2>
          </div>
          <CellSelection cells={cells} cellSize={150} />
        </div>
      </Reveal>
    </>
  );
};

export default ProductSelection;

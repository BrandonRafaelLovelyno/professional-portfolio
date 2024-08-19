import { twMerge } from "tailwind-merge";
import Cell from "../trigger/display/cell";

interface Props {
  cells: { imageUrl: string; onClick?: () => void; title: string }[];
  cellSize?: number;
}

const getCellSize = (cellSize: number | undefined) => {
  let height = `100px`;
  let width = `100px`;

  if (cellSize) {
    height = `${cellSize}px`;
    width = `${cellSize}px`;
  }

  return {
    height,
    width,
  };
};

const CellSelection: React.FC<Props> = ({ cells, cellSize }) => {
  const cellStyle = getCellSize(cellSize);
  return (
    <div
      className={twMerge(
        "w-full h-fit",
        "flex flex-row flex-wrap gap-x-3 gap-y-3"
      )}
    >
      {cells.map((cell, index) => (
        <div key={index} style={cellStyle}>
          <Cell imageUrl={cell.imageUrl} title={cell.title} />
        </div>
      ))}
    </div>
  );
};

export default CellSelection;

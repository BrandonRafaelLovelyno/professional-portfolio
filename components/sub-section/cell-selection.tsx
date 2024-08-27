import { twMerge } from "tailwind-merge";
import Cell from "../trigger/display/cell";
import React from "react";

interface Props {
  cells: {
    imageUrl: string;
    onClick?: (e: React.MouseEvent) => void;
    title: string;
    textColor?: string;
  }[];
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
        <div key={index} style={cellStyle} onClick={cell.onClick}>
          <Cell
            imageUrl={cell.imageUrl}
            title={cell.title}
            textColor={cell.textColor}
          />
        </div>
      ))}
    </div>
  );
};

export default CellSelection;

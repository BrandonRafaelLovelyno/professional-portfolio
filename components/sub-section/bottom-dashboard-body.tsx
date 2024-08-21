import { twMerge } from "tailwind-merge";

interface Props {
  Masonry: React.FC;
}

const BottomDashboardBody: React.FC<Props> = ({ Masonry }) => {
  return (
    <div className={twMerge("overflow-x-scroll overflow-y-visible")}>
      <div
        className={twMerge(
          "min-w-full w-fit h-fit",
          "flex flex-row gap-x-8",
          "bg-[#1C1C1C]",
          "pt-8 pb-3 px-5"
        )}
      >
        <Masonry />
      </div>
    </div>
  );
};

export default BottomDashboardBody;

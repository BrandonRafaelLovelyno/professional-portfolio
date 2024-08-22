import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const BottomDashboardBody: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={twMerge("overflow-x-auto overflow-y-visible", "bg-[#1C1C1C]")}
    >
      <div
        className={twMerge(
          "min-w-full w-fit h-fit",
          "flex flex-row gap-x-8",
          "bg-[#1C1C1C]",
          "pt-8 pb-8 px-5"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomDashboardBody;

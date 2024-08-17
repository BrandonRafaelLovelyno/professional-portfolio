import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const HierarchyContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-starts",
        "w-[80%] h-full",
        "mx-auto",
        "pt-16 md:pt-20"
      )}
    >
      {children}
    </div>
  );
};

export default HierarchyContainer;

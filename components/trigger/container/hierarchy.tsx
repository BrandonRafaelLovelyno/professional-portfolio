import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const Hierarchy: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-starts",
        "w-[80%] h-fit",
        "mx-auto",
        "pt-16 md:pt-20"
      )}
    >
      {children}
    </div>
  );
};

export default Hierarchy;

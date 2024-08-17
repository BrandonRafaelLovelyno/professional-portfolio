import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const HierarchySectionContainer: React.FC<Props> = ({ children }) => {
  return <div className={twMerge("flex flex-row gap-x-5")}>{children}</div>;
};

export default HierarchySectionContainer;

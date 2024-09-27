import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  title: string;
}

const NotionLogo: React.FC<Props> = ({ src, title }) => {
  const { width } = useContext(PageTransitionContext);
  return (
    <div className={twMerge("flex flex-col items-start gap-y-3")}>
      <Image
        src={src}
        alt={`${title} logo`}
        width={width >= 500 ? 150 : 100}
        height={width >= 500 ? 150 : 100}
      />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default NotionLogo;

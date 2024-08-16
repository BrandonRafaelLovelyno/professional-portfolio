import NotionLogo from "@/components/trigger/display/notion-logo";
import { Client } from "@/data/client-exp-data";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";

interface Props {
  logoUrl: string;
  title: string;
  backgroundUrl: string;
  Masonries: React.ReactNode[];
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const NotionMasonry: React.FC<Props> = ({
  logoUrl,
  title,
  Masonries,
  backgroundUrl,
}) => {
  return (
    <div
      className={twMerge(
        "w-full min-h-[100vh] overflow-y-scroll relative",
        "flex flex-col gap-y-10",
        "pt-[35vh] md:px-28 px-10 pb-20",
        "z-20"
      )}
    >
      <NotionLogo src={logoUrl} title={title} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid w-full h-full"
        columnClassName="my-masonry-grid_column"
      >
        {...Masonries}
      </Masonry>
      <Image
        src={backgroundUrl}
        alt={`${title} background`}
        fill
        objectFit="cover"
        className="z-[-10] absolute"
      />
    </div>
  );
};

export default NotionMasonry;

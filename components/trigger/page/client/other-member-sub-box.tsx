import { Person } from "@/data/client/client-data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  members: Person[];
  title: string;
}

const getDisplayedImage = (members: Person[]) => {
  const images: string[] = [];

  members.map((member, index) => {
    if (index > 2) return;
    images.push(member.img);
  });

  return images;
};

const OtherMember: React.FC<Props> = ({ members, title }) => {
  const displayedImage = getDisplayedImage(members);
  return (
    <div
      className={twMerge(
        "w-full",
        "flex flex-row items-center justify-between"
      )}
    >
      <div className={twMerge("flex flex-col gap-y-1")}>
        <p className="text-xs md:text-sm">{title}</p>
      </div>
      <div className={twMerge("relative", "h-[50px] w-[90px]", "rounded-full")}>
        <div
          className={twMerge(
            "absolute",
            "right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2",
            "w-[50px] h-[50px]",
            "z-20"
          )}
        >
          <div
            className={twMerge(
              "relative",
              "w-full h-full",
              "rounded-full",
              "overflow-clip"
            )}
          >
            <Image src={displayedImage[0]} alt={title} fill objectFit="cover" />
          </div>
        </div>
        <div
          className={twMerge(
            "absolute",
            "-right-[10px] top-1/2 -translate-y-1/2",
            "w-[50px] h-[50px] "
          )}
        >
          <div
            className={twMerge(
              "relative",
              "w-full h-full",
              "rounded-full",
              "overflow-clip"
            )}
          >
            <Image src={displayedImage[1]} alt={title} fill objectFit="cover" />
          </div>
        </div>
        {displayedImage[2] && (
          <div
            className={twMerge(
              "absolute",
              "-left-[10px] top-1/2 -translate-y-1/2",
              "w-[50px] h-[50px] "
            )}
          >
            <div
              className={twMerge(
                "relative",
                "w-full h-full",
                "rounded-full",
                "overflow-clip"
              )}
            >
              <Image
                src={displayedImage[2]}
                alt={title}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherMember;

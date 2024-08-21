import { Person } from "@/data/client/client-data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  team: Person[];
}

const TeamBox: React.FC<Props> = ({ team }) => {
  return (
    <>
      {team.map((person, index) => (
        <div
          key={index}
          className={twMerge(
            "w-full",
            "flex flex-row items-center justify-between"
          )}
        >
          <div className={twMerge("flex flex-col gap-y-3")}>
            <p className="text-xs md:text-sm">{person.name}</p>
            <p className={"font-bold text-xs"}>{person.position}</p>
          </div>
          <div
            className={twMerge(
              "relative",
              "h-[50px] w-[50px]",
              "rounded-full overflow-clip"
            )}
          >
            <Image
              src={person.img}
              fill
              className="absolute"
              objectFit="cover"
              alt={person.name}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamBox;

import { Client, Person } from "@/data/client/client-data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TextBox from "../../box/text-box";
import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/client-bottom-dashboard";
import OtherMember from "./other-member-sub-box";

interface Props {
  client: Client;
  imageUrl?: string;
}

const TeamBox: React.FC<Props> = ({ client, imageUrl }) => {
  return (
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.team)}>
      <TextBox
        title="My Team"
        color="white"
        Icon={
          <Image
            src={
              imageUrl
                ? imageUrl
                : "https://res.cloudinary.com/dohewcyes/image/upload/v1724934229/image/page/client/assets/w7egbmjoees8zxcuymge.png"
            }
            alt="my team  "
            width={40}
            height={40}
          />
        }
      >
        {client.team.main.map((person, index) => (
          <div
            key={index}
            className={twMerge(
              "w-full",
              "flex flex-row items-center justify-between"
            )}
          >
            <div className={twMerge("flex flex-col gap-y-1")}>
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
        {client.team.other?.person && (
          <OtherMember
            members={client.team.other.person}
            title={client.team.other.name}
          />
        )}
      </TextBox>
    </div>
  );
};

export default TeamBox;

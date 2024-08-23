import { twMerge } from "tailwind-merge";
import TextBox from "../../box/text-box";
import Image from "next/image";
import { Client } from "@/data/client/client-data";
import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/client-bottom-dashboard";

interface Props {
  client: Client;
}

const TechStackBox: React.FC<Props> = ({ client }) => {
  return (
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.techStack)}>
      <TextBox
        title="Tech Stack"
        color="white"
        Icon={
          <Image
            src={"/image/page/work/assets/how.png"}
            alt="how"
            width={20}
            height={20}
          />
        }
      >
        <div className={twMerge("grid grid-cols-2 gap-x-9 gap-y-5 w-full")}>
          {client.techStack.map((tech, index) => (
            <div
              key={index}
              className={twMerge(
                "flex flex-row items-center justify-between gap-x-3"
              )}
            >
              <p className="font-bold">{tech.name}</p>
              <div className="relative w-[20px] h-[20px]">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="absolute"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </TextBox>
    </div>
  );
};

export default TechStackBox;

import IconBox from "@/components/trigger/box/icon-box";
import { CLIENT_EXP } from "@/data/client/client-data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const key = 0;

const EzParentingDashboard: React.FC = () => {
  const client = CLIENT_EXP[0];

  return [
    <div
      key={key}
      className={twMerge(
        "h-fit w-[280px] md:w-[320px]",
        "py-5 px-2",
        "bg-gradient-to-br from-orange-400 to-orange-700",
        "rounded-lg shadow-lg"
      )}
    >
      <IconBox
        Icon={
          <Image
            src={CLIENT_EXP[0].images.logo}
            alt={CLIENT_EXP[0].client.name}
            height={100}
            width={100}
          />
        }
        Value={<p className="text-center">{client.client.desc}</p>}
        title={CLIENT_EXP[0].client.name}
        titleColor="text-white"
      />
    </div>,
  ];
};

export default EzParentingDashboard;

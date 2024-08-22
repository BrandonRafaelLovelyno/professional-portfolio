import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/bottom-dashboard/ez-parenting-dashboard";
import { twMerge } from "tailwind-merge";
import IconBox from "../../box/icon-box";
import Image from "next/image";
import { Client } from "@/data/client/client-data";

interface Props {
  client: Client;
}

const getGradient = (from: string, to: string) => {
  return `linear-gradient(to bottom right, ${from}, ${to})`;
};

const LogoBox: React.FC<Props> = ({ client }) => {
  const gradient = getGradient(client.color.from, client.color.to);

  return (
    <div
      className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.normal)}
      style={{ background: gradient }}
    >
      <IconBox
        Icon={
          <Image
            src={client.images.logo}
            alt={client.client.name}
            height={100}
            width={100}
          />
        }
        Value={<p className="text-center">{client.client.desc}</p>}
        title={client.client.name}
        titleColor="text-white"
      />
    </div>
  );
};

export default LogoBox;

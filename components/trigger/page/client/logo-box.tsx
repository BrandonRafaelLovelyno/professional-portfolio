import { twMerge } from "tailwind-merge";
import IconBox from "../../box/icon-box";
import Image from "next/image";
import { Client } from "@/data/client/client-data";
import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/client-bottom-dashboard";

interface Props {
  client: Client;
}

const getGradient = (from: string, to: string) => {
  return `linear-gradient(to bottom right, ${from}, ${to})`;
};

const LogoBox: React.FC<Props> = ({ client }) => {
  const gradient = getGradient(
    client.color.gradient.from,
    client.color.gradient.to
  );

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
        Value={
          <p className="text-center" style={{ color: client.color.text }}>
            {client.client.desc}
          </p>
        }
        title={client.client.name}
        titleColor={client.color.text}
      />
    </div>
  );
};

export default LogoBox;

import { Client } from "@/data/client/client-data";
import { twMerge } from "tailwind-merge";
import TextBox from "../../box/text-box";
import Image from "next/image";
import KnowMoreButton from "../../button/know-more-button";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/client-bottom-dashboard";
import { link } from "fs";

interface Props {
  client: Client;
}

const getOnVisitWebsite = (client: Client) => {
  return () => {
    if (client.link?.deployment) {
      window.open(client.link?.deployment, "_blank");
    }
  };
};

const getOnVisitLinkedIn = (client: Client) => {
  return () => {
    if (client.link?.linkedIn) {
      window.open(client.link?.linkedIn, "_blank");
    }
  };
};

const UsageBox: React.FC<Props> = ({ client }) => {
  const { pushPage } = useContext(PageTransitionContext);
  const onVisitWebsite = getOnVisitWebsite(client);
  const onVisitLinkedIn = getOnVisitLinkedIn(client);

  return (
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.normal)}>
      <TextBox
        title="Usage"
        color="white"
        Icon={
          <Image
            src={
              "https://res.cloudinary.com/dohewcyes/image/upload/v1724934237/image/page/work/assets/x3s0ml7ozvl5gbeiwoei.png"
            }
            alt="how"
            width={20}
            height={20}
          />
        }
      >
        <div className={twMerge("flex flex-col items-center gap-y-5")}>
          <p>{client.usage}</p>
          <div className="flex flex-col gap-y-3">
            {client.link?.deployment && (
              <KnowMoreButton text="Visit Website" onClick={onVisitWebsite} />
            )}
            {client.link?.linkedIn && (
              <KnowMoreButton text="Visit LinkedIn" onClick={onVisitWebsite} />
            )}
          </div>
        </div>
      </TextBox>
    </div>
  );
};

export default UsageBox;

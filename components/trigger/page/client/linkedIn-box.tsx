import { twMerge } from "tailwind-merge";
import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/client-bottom-dashboard";
import Image from "next/image";
import IconBox from "../../box/icon-box";
import KnowMoreButton from "../../button/know-more-button";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import { useContext } from "react";
import { Client } from "@/data/client/client-data";

interface Props {
  client: Client;
}

const LinkedInBox: React.FC<Props> = ({ client }) => {
  const { pushPage } = useContext(PageTransitionContext);
  const onClick = () => {
    if (client.link?.linkedIn) pushPage(client.link?.linkedIn);
  };

  return (
    <div
      className={twMerge(
        BOTTOM_DASHBOARD_CLASSNAME.normal,
        "bg-gradient-to-br from-blue-500 to-blue-700"
      )}
    >
      <IconBox
        Icon={
          <Image
            src={"/image/page/client/assets/linkedin.png"}
            height={100}
            width={100}
            alt="linkedIn"
          />
        }
        Value={<KnowMoreButton onClick={onClick} text="Visit post" />}
      />
    </div>
  );
};

export default LinkedInBox;

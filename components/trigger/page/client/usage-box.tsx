import { BOTTOM_DASHBOARD_CLASSNAME } from "@/components/sub-section/page/client/bottom-dashboard/ez-parenting-dashboard";
import { Client } from "@/data/client/client-data";
import { twMerge } from "tailwind-merge";
import TextBox from "../../box/text-box";
import Image from "next/image";
import KnowMoreButton from "../../button/know-more-button";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";

interface Props {
  client: Client;
}

const UsageBox: React.FC<Props> = ({ client }) => {
  const { pushPage } = useContext(PageTransitionContext);
  return (
    <div className={twMerge(BOTTOM_DASHBOARD_CLASSNAME.normal)}>
      <TextBox
        title="Usage"
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
        <div className={twMerge("flex flex-col items-center gap-y-8")}>
          <p>{client.usage}</p>
          <KnowMoreButton
            text="Visit Website"
            onClick={() => {
              pushPage(client.deployment);
            }}
          />
        </div>
      </TextBox>
    </div>
  );
};

export default UsageBox;

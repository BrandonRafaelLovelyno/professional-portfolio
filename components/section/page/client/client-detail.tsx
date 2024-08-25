import { ExperienceContext } from "@/components/provider/experience-provider";
import BottomDashboard from "@/components/sub-section/bottom-dashboard";
import ClientBottomDashboard from "@/components/sub-section/page/client/client-bottom-dashboard";
import { CLIENT_EXP } from "@/data/client/client-data";
import { useContext } from "react";

const ClientDetail = () => {
  const { isSelectingExperience, experienceIndex } =
    useContext(ExperienceContext);
  const client = CLIENT_EXP[experienceIndex];

  return (
    <BottomDashboard
      isShow={!isSelectingExperience}
      logoUrl={client.images.logo}
      title={client.name}
      titleColor={client.color.gradient.from}
    >
      <ClientBottomDashboard client={client} />
    </BottomDashboard>
  );
};

export default ClientDetail;

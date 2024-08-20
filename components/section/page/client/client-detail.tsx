import { ExperienceContext } from "@/components/provider/experience-provider";
import BottomDashboard from "@/components/sub-section/bottom-dashboard";
import EZPARENTINGDASHBOARD from "@/components/sub-section/page/client/bottom-dashboard/ez-parenting-dashboard";
import { useContext } from "react";

const ClientDetail = () => {
  const { isSelectingExperience } = useContext(ExperienceContext);
  return (
    <BottomDashboard
      isShow={!isSelectingExperience}
      Masonry={EZPARENTINGDASHBOARD}
    />
  );
};

export default ClientDetail;

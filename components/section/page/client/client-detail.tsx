import { useContext } from "react";
import DetailSection from "../../wrapper/detail-section";
import { ExperienceContext } from "@/components/provider/experience-provider";
import { twMerge } from "tailwind-merge";
import BackArrow from "@/components/trigger/button/back-arrow";

const ClientDetail = () => {
  const { isSelectingExperience, experienceIndex, setIsSelectingExperience } =
    useContext(ExperienceContext);

  return (
    <DetailSection isShow={!isSelectingExperience}>
      <div
        className={twMerge(
          "flex flex-col",
          "w-full h-full",
          "overflow-y-scroll",
          "py-16"
        )}
      >
        <div className={twMerge("ml-[7%]")}>
          <BackArrow
            caption="Clients"
            isShow={!isSelectingExperience}
            onClick={() => setIsSelectingExperience(true)}
          />
        </div>
        <h1>hai</h1>
      </div>
    </DetailSection>
  );
};

export default ClientDetail;

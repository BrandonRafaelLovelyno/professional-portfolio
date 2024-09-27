"use client";

import { useContext } from "react";
import DetailSection from "../../wrapper/detail-section";
import { ExperienceContext } from "@/components/provider/experience-provider";
import WORK_EXP_DATA from "@/data/work-data";
import MasonryDashboard from "../../detail/masonry-dashboard";

const WorkDetail = () => {
  const { isSelectingExperience, experienceIndex } =
    useContext(ExperienceContext);

  const work = WORK_EXP_DATA[experienceIndex];
  const Dashboard = work.Component.Dashboard;

  return (
    <DetailSection isShow={!isSelectingExperience}>
      <MasonryDashboard
        Dashboard={Dashboard}
        heading={{
          imageUrl: work.Component.Heading.imageUrl,
          title: work.Component.Heading.title,
        }}
      />
    </DetailSection>
  );
};

export default WorkDetail;

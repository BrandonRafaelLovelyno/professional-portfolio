import { ProjectContext } from "@/components/provider/project-provider";
import CODING_PRO from "@/data/project/project-data";
import { useContext } from "react";
import DetailSection from "../../wrapper/detail-section";
import GridMasonry from "../../detail/grid-masonry";
import MasonryModal from "@/components/sub-section/masonry-modal";

const ProjectDetail = () => {
  const { isSelectingProject, projectIndex } = useContext(ProjectContext);
  const project = CODING_PRO[projectIndex];

  return (
    <DetailSection isShow={!isSelectingProject}>
      <GridMasonry project={project} />
      <MasonryModal projects={CODING_PRO} />
    </DetailSection>
  );
};

export default ProjectDetail;

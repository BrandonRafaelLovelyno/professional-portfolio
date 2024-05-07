import React from "react";

interface ProjectHeadingProps {
  title: string;
  Image: {
    FirstImage: React.ReactNode;
    SecondImage: React.ReactNode;
  };
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({ title, Image }) => {
  return <h1>{title}</h1>;
};

export default ProjectHeading;

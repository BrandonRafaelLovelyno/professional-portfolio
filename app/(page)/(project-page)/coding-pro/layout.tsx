"use client";

import ExperiencePage from "@/components/page/experience-page";
import ProjectPage from "@/components/page/project-page";
import {
  DISCORD_PRO,
  Project,
  SPOTIFY_PRO,
  TWITTER_PRO,
} from "@/data/project/coding-project-detail-data";
import CODING_PRO from "@/data/project/coding-project-data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const determineProject = (pathname: string): Project | null => {
  if (pathname == "/coding-pro/spotify-clone") {
    return SPOTIFY_PRO;
  }
  if (pathname == "/coding-pro/discord-clone") {
    return DISCORD_PRO;
  }
  if (pathname == "/coding-pro/twitter-clone") {
    return TWITTER_PRO;
  }
  return null;
};

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isFading, setIsFading] = useState(false);
  const [isSection, setIsSection] = useState(false);

  const body: React.ReactNode = useMemo(() => {
    const project: Project | null = determineProject(pathname);
    if (!project) {
      return <ExperiencePage experiences={CODING_PRO} key={pathname} />;
    }

    return <ProjectPage project={project} />;
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        className="h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {body}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectLayout;

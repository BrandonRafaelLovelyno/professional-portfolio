"use client";

import ExperiencePage from "@/components/reusable-page/exp-page";
import ProjectPage from "@/components/reusable-page/project-page";
import {
  DISCORD_PRO,
  Project,
  SPOTIFY_PRO,
  TWITTER_PRO,
} from "@/data/coding-project-detail-data";
import CODING_PRO from "@/data/coding-project-section-data";
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
  const [isRouting, setIsRouting] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isSection, setIsSection] = useState(false);

  const body: React.ReactNode = useMemo(() => {
    const project: Project | null = determineProject(pathname);
    if (!project) {
      return (
        <ExperiencePage
          experiences={CODING_PRO}
          isFading={isFading}
          isRouting={isRouting}
          isSection={isSection}
          setIsRouting={setIsRouting}
          setIsSection={setIsSection}
          key={pathname}
        />
      );
    }

    return (
      <ProjectPage
        setIsRouting={setIsRouting}
        isFading={isFading}
        project={project}
      />
    );
  }, [isFading, isRouting, isSection, setIsRouting, setIsSection, pathname]);

  useEffect(() => {
    if (isRouting) {
      setTimeout(() => setIsFading(true), 500);
    }
  }, [isRouting]);

  useEffect(() => {
    setIsFading(false);
    setIsRouting(false);
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

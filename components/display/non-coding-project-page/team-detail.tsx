import { Team } from "@/data/client-exp-section-data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IoMdClose } from "react-icons/io";
import PersonDisplay from "../client-experience-page/person-display";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface TeamDetailProps {
  onClose: () => void;
  team: Team;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ onClose, team }) => {
  const [isClosing, setIsClosing] = useState(false);
  return (
    <>
      <motion.div
        className={twMerge(
          "absolute h-screen w-screen bg-background z-10 bg-opacity-70 flex flex-col gap-y-10 justify-center items-start",
          "lg:px-20 px-5 py-28",
          "text-3xl text-secondary"
        )}
        initial={{ opacity: 0 }}
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="font-bold">The people</h1>
        <ScrollArea className="flex flex-col flex-1 overflow-auto w-full">
          <div
            className={twMerge(
              "w-full h-full",
              "lg:grid lg:grid-cols-2 gap-y-5 gap-x-5",
              "flex flex-col"
            )}
          >
            {team.person.map((p, index) => (
              <PersonDisplay
                key={index}
                person={p}
                addDivider={(index + 1) % 2 == 1}
              />
            ))}
          </div>
        </ScrollArea>
      </motion.div>
      <motion.button
        onClick={() => {
          setIsClosing(true);
          setTimeout(onClose, 1000);
        }}
        className="absolute top-10 right-10 text-primary z-10"
        initial={{ opacity: 0 }}
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IoMdClose size={30} />
      </motion.button>
    </>
  );
};

export default TeamDetail;

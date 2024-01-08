import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../../animation/reveal";
import { IoMdClose } from "react-icons/io";
import { Event } from "@/data/org-exp-section-data";

interface ExpDetailProps {
  onClose: () => void;
  event: Event;
}

const ExpDetail: React.FC<ExpDetailProps> = ({ onClose, event }) => {
  const [isClosing, setIsClosing] = useState(false);
  return (
    <motion.div
      animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full h-full bg-background bg-opacity-70 z-10 absolute flex flex-col py-20 gap-x-8 text-3xl px-20 justify-center gap-y-10"
    >
      <Reveal
        childrenDir="up"
        hide={isClosing}
        width="w-full"
        customDelay={0.5}
      >
        <div className="flex flex-col gap-y-5">
          <p className=" text-secondary italic">What is {event.name}?</p>
          <p>ppp</p>
        </div>
      </Reveal>
      <Reveal
        childrenDir="up"
        hide={isClosing}
        width="w-full"
        customDelay={0.5}
      >
        <div className="flexf flex-col gap-y-5 text-xl">
          <p className=" text-secondary italic">What I Do?</p>
          <p>ppp</p>
        </div>
      </Reveal>
      <button
        onClick={() => {
          setIsClosing(true);
          setTimeout(onClose, 1000);
        }}
        className="absolute top-10 right-10"
      >
        <IoMdClose size={30} />
      </button>
    </motion.div>
  );
};

export default ExpDetail;

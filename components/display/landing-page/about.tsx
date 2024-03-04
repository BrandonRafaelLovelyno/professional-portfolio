"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Reveal from "../../animation/reveal";

interface AboutProps {
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  return (
    <>
      <motion.div
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-screen h-screen bg-background bg-opacity-70 z-10 absolute flex flex-col text-3xl px-20 justify-center gap-y-10"
      >
        <Reveal
          childrenDir="up"
          hide={isClosing}
          width="w-fit"
          customDelay={0.5}
        >
          <p className="w-[80%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </Reveal>
        <Reveal
          childrenDir="up"
          hide={isClosing}
          width="w-fit"
          customDelay={0.5}
        >
          <p className="w-[80%]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College
          </p>
        </Reveal>
      </motion.div>
      <motion.button
        onClick={() => {
          setIsClosing(true);
          setTimeout(onClose, 1000);
        }}
        className="absolute top-10 right-10 text-primary z-20"
        initial={{ opacity: 0 }}
        animate={isClosing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <IoMdClose size={30} />
      </motion.button>
    </>
  );
};

export default About;

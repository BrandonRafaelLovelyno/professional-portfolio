import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollIconVariants: Variants = {
  moving: {
    y: -20,
    transition: {
      duration: 1,
    },
  },
  initial: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ScrollIcon = () => {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={ScrollIconVariants}
      animate={isMoving ? "moving" : "initial"}
    >
      <MdKeyboardArrowUp size={80} className="text-white" />
    </motion.div>
  );
};

export default ScrollIcon;

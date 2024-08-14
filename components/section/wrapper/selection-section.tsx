import { motion, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  isShow: boolean;
  children: React.ReactNode;
}

const selectionVariant: Variants = {
  isShow: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.6,
    },
  },
  isNotShow: { x: 0, scale: 2.3, opacity: 0, transition: { duration: 0.3 } },
};

const SelectionSection: React.FC<Props> = ({ isShow, children }) => {
  return (
    <motion.section
      variants={selectionVariant}
      className={twMerge("w-full h-full", "absolute", isShow ? "z-20" : "z-10")}
      animate={isShow ? "isShow" : "isNotShow"}
      initial={{ x: 0 }}
    >
      {children}
    </motion.section>
  );
};

export default SelectionSection;

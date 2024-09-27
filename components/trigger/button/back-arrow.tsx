import { ParallaxLayer } from "@react-spring/parallax";
import { motion, Variants } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick: () => void;
  isShow: boolean;
  caption: string;
}

const BackButtonVariants: Variants = {
  showBackButton: {
    x: 0,
    opacity: 1,
    zIndex: 50,
  },
  hideBackButton: {
    x: "-10%",
    opacity: 0,
  },
};

const BackArrow: React.FC<Props> = ({ isShow, onClick, caption }) => {
  return (
    <motion.button
      variants={BackButtonVariants}
      initial="hideBackButton"
      animate={isShow ? "showBackButton" : "hideBackButton"}
      className={twMerge("flex flex-row gap-x-3 items-center cursor-pointer")}
      transition={{ duration: 0.2, delay: 0.5 }}
      onClick={onClick}
    >
      <IoMdArrowRoundBack size={20} />
      <p className="text-xl text-white">{caption}</p>
    </motion.button>
  );
};

export default BackArrow;

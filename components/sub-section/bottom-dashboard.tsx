import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";
import IconBox from "../trigger/box/icon-box";
import Image from "next/image";

interface Props {
  //   logoUrl: string;
  //   title: string;
  Masonry: React.FC;
  isShow: boolean;
}

const DASHBOARD_VARIANT: Variants = {
  hidden: { translateY: "100%" },
  visible: { translateY: "0%" },
};

const BottomDashboard: React.FC<Props> = ({ isShow, Masonry }) => {
  return (
    <motion.div
      variants={DASHBOARD_VARIANT}
      initial="hidden"
      animate={isShow ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={twMerge(
        "fixed bottom-0",
        "w-full h-fit",
        "py-8",
        "overflow-x-scroll overflow-y-clip",
        "bg-black",
        "border-t-2 border-white"
      )}
    >
      <div className={twMerge("w-fit h-fit", "flex flex-row gap-x-3", "px-5")}>
        <Masonry />
      </div>
    </motion.div>
  );
};

export default BottomDashboard;

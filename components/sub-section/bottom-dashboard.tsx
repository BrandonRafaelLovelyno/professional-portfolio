import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";
import IconBox from "../trigger/box/icon-box";
import Image from "next/image";
import BottomDashboardHeader from "./bottom-dashboard-header";
import { CLIENT_EXP } from "@/data/client/client-data";
import BottomDashboardBody from "./bottom-dashboard-body";

interface Props {
  //   logoUrl: string;
  //   title: string;
  Masonry: React.FC;
  isShow: boolean;
}

const DASHBOARD_VARIANT: Variants = {
  hidden: { translateY: "100%" },
  visible: { translateY: "0%", zIndex: 100 },
};

const BottomDashboard: React.FC<Props> = ({ isShow, Masonry }) => {
  return (
    <motion.div
      variants={DASHBOARD_VARIANT}
      initial="hidden"
      animate={isShow ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={twMerge("fixed bottom-0", "w-full h-fit")}
    >
      <div className={twMerge("flex flex-col w-full", "bg-scrollbar")}>
        <BottomDashboardHeader
          imageUrl={CLIENT_EXP[0].images.logo}
          title={CLIENT_EXP[0].client.name}
        />
        <BottomDashboardBody Masonry={Masonry} />
      </div>
    </motion.div>
  );
};

export default BottomDashboard;

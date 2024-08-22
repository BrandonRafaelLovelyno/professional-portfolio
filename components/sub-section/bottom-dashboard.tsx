import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import BottomDashboardHeader from "./bottom-dashboard-header";
import BottomDashboardBody from "./bottom-dashboard-body";

interface Props {
  logoUrl: string;
  title: string;
  isShow: boolean;
  titleColor: string;
  children: React.ReactNode;
}

const DASHBOARD_VARIANT: Variants = {
  hidden: { translateY: "100%" },
  visible: { translateY: "0%", zIndex: 100 },
};

const BottomDashboard: React.FC<Props> = ({
  isShow,
  children,
  logoUrl,
  title,
  titleColor,
}) => {
  return (
    <motion.div
      variants={DASHBOARD_VARIANT}
      initial="hidden"
      animate={isShow ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={twMerge("fixed bottom-0", "w-full h-fit")}
    >
      <div className={twMerge("flex flex-col w-full")}>
        <BottomDashboardHeader
          titleColor={titleColor}
          imageUrl={logoUrl}
          title={title}
        />
        <BottomDashboardBody>{children}</BottomDashboardBody>
      </div>
    </motion.div>
  );
};

export default BottomDashboard;

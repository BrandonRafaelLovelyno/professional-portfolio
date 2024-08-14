import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  isShow: boolean;
  children: React.ReactNode;
}

const detailVariant: Variants = {
  isShow: {
    y: 10,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.4 },
  },
  isNotShow: { y: 0, opacity: 0, transition: { duration: 0.4 } },
};

const DetailSection: React.FC<Props> = ({ isShow, children }) => {
  return (
    <motion.section
      variants={detailVariant}
      className={twMerge("w-full h-full absolute", isShow ? "z-[20]" : "z-0")}
      animate={isShow ? "isShow" : "isNotShow"}
      initial={{ x: 0 }}
    >
      {children}
    </motion.section>
  );
};

export default DetailSection;

import { ExperienceContext } from "@/components/provider/experience-provider";
import { CLIENT_EXP } from "@/data/client/client-exp-data";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import LogoTooltip from "@/components/trigger/client-page/logo-tooltip";

const ClientSelectionSection = () => {
  const { setExperienceIndex, setIsSelectingExperience } =
    useContext(ExperienceContext);

  const completedClient = CLIENT_EXP.filter(
    (client) => client.status === "Completed"
  );

  const inProgressClient = CLIENT_EXP.filter(
    (client) => client.status === "In Progress"
  );

  const soonClient = CLIENT_EXP.filter((client) => client.status === "Soon");
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "pt-32 px-10",
        "flex flex-col gap-y-16"
      )}
    >
      <div className={twMerge("flex flex-col", "gap-y-[20px]")}>
        <h2 className="text-2xl font-bold">Completed</h2>
        <div>
          {completedClient.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: Math.random() * 0.5 }}
            >
              <LogoTooltip
                image={{
                  urL: client.logoUrl,
                  height: 100,
                  width: 100,
                }}
                onCLick={() => {
                  setExperienceIndex(index);
                  setIsSelectingExperience(false);
                }}
                title={client.client.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSelectionSection;

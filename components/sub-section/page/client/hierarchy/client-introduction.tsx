import Reveal from "@/components/animation/reveal";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import HierarchyIconLine from "@/components/trigger/container/hierarchy-icon-line";
import { CLIENT_EXP } from "@/data/client/client-data";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { IoMdPerson } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const getImageSize: (width: number) => string = (width) => {
  if (width > 1024) return "w-[100px] h-[100px]";
  if (width > 768) return "w-[80px] h-[80px]";
  return "w-[60px] h-[60px]";
};

const ClientIntroduction = () => {
  const { width } = useContext(PageTransitionContext);

  const clients = CLIENT_EXP;
  const imageSize = useMemo(() => getImageSize(width), [width]);

  return (
    <>
      <HierarchyIconLine lineColor={{ from: "purple", to: "green" }}>
        <IoMdPerson size={30} />
      </HierarchyIconLine>
      <Reveal>
        <div className={twMerge("flex flex-col gap-y-5", "md:pb-32 pb-20")}>
          <div className={twMerge("flex flex-col gap-y-3")}>
            <h3 className="font-bold text-xl text-gray-300">
              Who are my clients?
            </h3>
            <h2 className="font-bold text-3xl">
              Mostly they are
              <span className="text-purple-400"> startups</span>. The rest are
              <span className="text-purple-400"> college events</span>
            </h2>
          </div>
          <div className={twMerge("flex flex-row gap-x-3 w-full flex-wrap")}>
            {clients.map((client, index) => (
              <div className={twMerge("relative", imageSize)} key={index}>
                <Image
                  key={index}
                  alt={client.client.name}
                  src={client.logoUrl}
                  className="absolute"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default ClientIntroduction;

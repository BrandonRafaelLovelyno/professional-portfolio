import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Experience } from "@/data/experience/org-exp-data";
import React, { use, useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaRegFileVideo } from "react-icons/fa";
import EventDashboardSidebar from "@/components/trigger/experience-page/event/navigation/event-dashboard-navigation-dropdown";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import Masonry from "react-masonry-css";
import { PiTargetBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import PotraitMockup from "@/components/trigger/experience-page/event/other/potrait-mockup";
import EventDashboardBoxIcon from "@/components/trigger/experience-page/event/box/event-dashboard-box-icon";
import EventDashboardLineChart from "@/components/trigger/experience-page/event/chart/event-dashboard-line-chart";
import { VIDEOACTOR_DATA } from "@/data/experience/work-exp-data";
import EventDashboardBarChart from "@/components/trigger/experience-page/event/chart/event-dashboard-bar-chart";
import EventDashboardBoxText from "@/components/trigger/experience-page/event/box/event-dashboard-box-text";
import Image from "next/image";
import EventDashboardNavigationDropdown from "@/components/trigger/experience-page/event/navigation/event-dashboard-navigation-dropdown";
interface VideoActorEventDashboardSectionProps {
  experience: Experience;
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const VIDEO_EDITOR_DASHBOARD_ICONS: React.ReactNode[] = [
  <BsPersonBoundingBox size={17} key={"video actor"} />,
  <FaRegFileVideo size={17} key={"video editor"} />,
];

const VideoActorEventDashboardSection: React.FC<
  VideoActorEventDashboardSectionProps
> = ({ experience }) => {
  const { isSelectingExperience, setIsSelectingExperience } = useContext(
    ExperienceAndEventContext
  );

  return (
    <div
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col pt-8 px-5",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <EventDashboardBoxPlaceholder
          backgroundColor="bg-white"
          classname="w-full"
        >
          <EventDashboardBoxText
            Icon={
              <Image
                src={"/image/work-exp/video-production/assets/video.png"}
                width={30}
                height={30}
                alt="video"
              />
            }
            color="black"
            title="Select Jobs"
          >
            <EventDashboardNavigationDropdown experience={experience} />
          </EventDashboardBoxText>
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-black"
        >
          <EventDashboardBoxText
            Icon={
              <Image
                src={"/image/work-exp/video-production/assets/dart.png"}
                width={20}
                height={20}
                alt="goals"
              />
            }
            color="white"
            title="Goals"
          >
            <p>Lorem ipsum dolar sit amet lorem ipsum dolar set amet</p>
          </EventDashboardBoxText>
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-black"
          borderColor="border-workPrimary"
        >
          <EventDashboardBoxIcon
            Icon={<FaEye size={50} className="text-workPrimary" />}
            title={"Youtube Views"}
            titleColor="text-workPrimary"
            Value={
              <div className="w-[200px] relative h-[100px]">
                <EventDashboardLineChart
                  width={200}
                  height={100}
                  data={VIDEOACTOR_DATA}
                  dataKey={["line1"]}
                  axisColor="#29BD5A"
                  lineColor="#29BD5A"
                />
              </div>
            }
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-1.mp4" />
        </EventDashboardBoxPlaceholder>

        <EventDashboardBoxPlaceholder
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-2.mp4" />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-black"
        >
          <EventDashboardBoxText
            Icon={
              <Image
                src={"/image/work-exp/video-production/assets/youtube.png"}
                alt="employer"
                width={20}
                height={20}
              />
            }
            color="white"
            title="I Work For"
          >
            <div className={twMerge("flex flex-col items-center", "gap-y-5")}>
              <div className={twMerge("flex flex-col items-center", "gap-y-3")}>
                <div
                  className={twMerge(
                    "h-[40px] w-[40px]",
                    "relative rounded-full overflow-hidden"
                  )}
                >
                  <Image
                    src={
                      "/image/work-exp/video-production/assets/inspiratips.jpg"
                    }
                    alt="employer"
                    fill
                    objectFit="cover"
                  />
                </div>
                <p className={twMerge("font-bold")}>Inspiratips</p>
              </div>
              <p className="text-center">Lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
          </EventDashboardBoxText>
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-black"
          borderColor="border-workSecondary"
        >
          <EventDashboardBoxIcon
            Icon={<RiTeamFill size={50} className="text-workSecondary" />}
            titleColor="text-workSecondary"
            Value={
              <div className="w-[200px] relative h-[100px]">
                <EventDashboardBarChart
                  axisColor="#00A9BF"
                  data={VIDEOACTOR_DATA}
                  dataKey={["line1"]}
                  height={200}
                  barColor="#00A9BF"
                  width={100}
                />
              </div>
            }
            title="Inspiratips Subscribers"
          />
        </EventDashboardBoxPlaceholder>
      </Masonry>
    </div>
  );
};

export default VideoActorEventDashboardSection;

import { Experience } from "@/data/experience/org-exp-data";
import React from "react";
import { twMerge } from "tailwind-merge";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import { FaEye } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import PotraitMockup from "@/components/trigger/experience-page/event/other/potrait-mockup";
import EventDashboardBoxIcon from "@/components/trigger/experience-page/event/box/event-dashboard-box-icon";
import EventDashboardLineChart from "@/components/trigger/experience-page/event/chart/event-dashboard-line-chart";
import { VIDEOACTOR_DATA } from "@/data/experience/work-exp-data";
import EventDashboardBarChart from "@/components/trigger/experience-page/event/chart/event-dashboard-bar-chart";
import EventDashboardBoxText from "@/components/trigger/experience-page/event/box/event-dashboard-box-text";
import Image from "next/image";

const VideoActorDashboard: React.FC = () => {
  const index = 0;
  return [
    <EventDashboardBoxPlaceholder
      classname="w-full"
      backgroundColor="bg-black"
      key={index}
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
    </EventDashboardBoxPlaceholder>,

    <EventDashboardBoxPlaceholder
      classname="w-full"
      backgroundColor="bg-black"
      borderColor="border-workPrimary"
      key={index + 1}
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
    </EventDashboardBoxPlaceholder>,
    <EventDashboardBoxPlaceholder
      classname={twMerge("w-[225px] h-[400px]")}
      key={index + 2}
    >
      <PotraitMockup source="/video/work-exp/video-actor/video-1.mp4" />
    </EventDashboardBoxPlaceholder>,
    <EventDashboardBoxPlaceholder
      classname={twMerge("w-[225px] h-[400px]")}
      key={index + 3}
    >
      <PotraitMockup source="/video/work-exp/video-actor/video-2.mp4" />
    </EventDashboardBoxPlaceholder>,
    <EventDashboardBoxPlaceholder
      classname="w-full"
      backgroundColor="bg-black"
      key={index}
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
                src={"/image/work-exp/video-production/assets/inspiratips.jpg"}
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
    </EventDashboardBoxPlaceholder>,
    <EventDashboardBoxPlaceholder
      classname="w-full"
      backgroundColor="bg-black"
      borderColor="border-workSecondary"
      key={index}
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
    </EventDashboardBoxPlaceholder>,
  ];
};

export default VideoActorDashboard;

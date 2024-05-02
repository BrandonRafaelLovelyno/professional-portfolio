import EventDashboardBoxIcon from "@/components/trigger/experience-page/event/box/event-dashboard-box-icon";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import EventDashboardBoxText from "@/components/trigger/experience-page/event/box/event-dashboard-box-text";
import EventDashboardLineChart from "@/components/trigger/experience-page/event/chart/event-dashboard-line-chart";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { VIDEOACTOR_DATA } from "./work-exp-data";
import { twMerge } from "tailwind-merge";
import PotraitMockup from "@/components/trigger/experience-page/event/other/potrait-mockup";
import { RiTeamFill } from "react-icons/ri";
import EventDashboardBarChart from "@/components/trigger/experience-page/event/chart/event-dashboard-bar-chart";

const index = 0;

const WORK_EXP_DASHBOARD: React.ReactNode[] = [
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
        <div className="w-full relative h-[100px]">
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
          <Image
            src={"/image/work-exp/video-production/assets/inspiratips.jpg"}
            alt="employer"
            objectFit="cover"
            width={40}
            height={40}
            className="rounded-full"
          />
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
        <div className="w-full relative h-[100px]">
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

export default WORK_EXP_DASHBOARD;

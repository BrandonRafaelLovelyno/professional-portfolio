import EventDashboardBoxIcon from "@/components/trigger/experience-page/detail/box/dashboard-icon-box";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/detail/box/dashboard-placeholder-box";
import EventDashboardBoxText from "@/components/trigger/experience-page/detail/box/dashboard-text-box";
import EventDashboardLineChart from "@/components/trigger/experience-page/detail/chart/event-dashboard-line-chart";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { VIDEOACTOR_DATA } from "../../../../data/experience/work-exp/work-exp-data";
import { twMerge } from "tailwind-merge";
import PotraitMockup from "@/components/trigger/experience-page/detail/other/potrait-mockup";
import { RiTeamFill } from "react-icons/ri";
import EventDashboardBarChart from "@/components/trigger/experience-page/detail/chart/event-dashboard-bar-chart";

const index = 0;

const VIDEO_PRODUCTION_DASHBOARD: React.ReactNode[] = [
  <EventDashboardBoxPlaceholder
    classname="w-full"
    backgroundColor="bg-black"
    key={index}
  >
    <EventDashboardBoxText
      Icon={
        <Image
          src={"/image/work-exp/assets/why.png"}
          width={20}
          height={20}
          alt="goals"
        />
      }
      color="white"
      title="Why"
    >
      <p className="font-semibold">I want to share things in a fun way</p>
    </EventDashboardBoxText>
  </EventDashboardBoxPlaceholder>,
  <EventDashboardBoxPlaceholder
    classname="w-full"
    backgroundColor="bg-black"
    key={index}
  >
    <EventDashboardBoxText
      Icon={
        <Image
          src={"/image/work-exp/assets/how.png"}
          width={20}
          height={20}
          alt="goals"
        />
      }
      color="white"
      title="How"
    >
      <p className="font-semibold">I cover things in youtube shorts</p>
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
        <p className="text-center">Indonesian education youtube channel</p>
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

export default VIDEO_PRODUCTION_DASHBOARD;

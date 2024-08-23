import PlaceholderBox from "@/components/trigger/box/placeholder-box";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { LineChartData } from "../../../../../data/work-data";
import { twMerge } from "tailwind-merge";
import PotraitMockup from "@/components/trigger/display/potrait-mockup";
import { RiTeamFill } from "react-icons/ri";
import TextBox from "@/components/trigger/box/text-box";
import { BoxIcon } from "lucide-react";
import IconBox from "@/components/trigger/box/icon-box";
import LineChart from "@/components/trigger/chart/line-chart";
import BarChart from "@/components/trigger/chart/bar-chart";

const VIDEOACTOR_DATA: LineChartData[] = [
  {
    xValue: "Jan",
    line1: 300,
  },
  {
    xValue: "Feb",
    line1: 400,
  },
  {
    xValue: "Mar",
    line1: 350,
  },
  {
    xValue: "Apr",
    line1: 600,
  },
];

const index = 0;

const VIDEO_PRODUCTION_DASHBOARD: React.ReactNode[] = [
  <PlaceholderBox classname="w-full" backgroundColor="bg-black" key={index}>
    <TextBox
      Icon={
        <Image
          src={"/image/page/work/assets/why.png"}
          width={20}
          height={20}
          alt="goals"
        />
      }
      color="white"
      title="Why"
    >
      <p className="font-semibold">I want to share things in a fun way</p>
    </TextBox>
  </PlaceholderBox>,
  <PlaceholderBox classname="w-full" backgroundColor="bg-black" key={index}>
    <TextBox
      Icon={
        <Image
          src={"/image/page/work/assets/how.png"}
          width={20}
          height={20}
          alt="goals"
        />
      }
      color="white"
      title="How"
    >
      <p className="font-semibold">I cover things in youtube shorts</p>
    </TextBox>
  </PlaceholderBox>,

  <PlaceholderBox
    classname="w-full"
    backgroundColor="bg-black"
    borderColor="border-workPrimary"
    key={index + 1}
  >
    <IconBox
      Icon={<FaEye size={50} className="text-workPrimary" />}
      title={"Youtube Views"}
      titleColor="text-workPrimary"
      Value={
        <div className="w-full relative h-[100px]">
          <LineChart
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
  </PlaceholderBox>,
  <PlaceholderBox classname={twMerge("w-[225px] h-[400px]")} key={index + 2}>
    <PotraitMockup source="/video/work/video-actor/video-1.mp4" />
  </PlaceholderBox>,
  <PlaceholderBox classname={twMerge("w-[225px] h-[400px]")} key={index + 3}>
    <PotraitMockup source="/video/work/video-actor/video-2.mp4" />
  </PlaceholderBox>,
  <PlaceholderBox classname="w-full" backgroundColor="bg-black" key={index}>
    <TextBox
      Icon={
        <Image
          src={"/image/page/work/video-production/assets/youtube.png"}
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
            src={"/image/page/work/video-production/assets/inspiratips.jpg"}
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
    </TextBox>
  </PlaceholderBox>,
  <PlaceholderBox
    classname="w-full"
    backgroundColor="bg-black"
    borderColor="border-workSecondary"
    key={index}
  >
    <IconBox
      Icon={<RiTeamFill size={50} className="text-workSecondary" />}
      titleColor="text-workSecondary"
      Value={
        <div className="w-full relative h-[100px]">
          <BarChart
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
  </PlaceholderBox>,
];

export default VIDEO_PRODUCTION_DASHBOARD;

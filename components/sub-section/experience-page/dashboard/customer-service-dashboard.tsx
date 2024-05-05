import EventDashboardBoxIcon from "@/components/trigger/experience-page/detail/box/event-dashboard-box-icon";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/detail/box/event-dashboard-box-placeholder";
import EventDashboardBoxText from "@/components/trigger/experience-page/detail/box/event-dashboard-box-text";
import AnimatedNumber from "@/components/trigger/experience-page/detail/other/animated-number";
import NumberAnimation from "@/components/trigger/experience-page/detail/other/animated-number";
import Image from "next/image";
import React from "react";
import { TbClockHour5 } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const index = 0;

const CUSTOMER_SERVICE_DASHBOARD: React.ReactNode[] = [
  <EventDashboardBoxPlaceholder backgroundColor="bg-black" key={index}>
    <EventDashboardBoxText
      Icon={
        <Image
          src={"/image/work-exp/assets/why.png"}
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="Why"
    >
      <p>Upskill my communication skill and save some money</p>
    </EventDashboardBoxText>
  </EventDashboardBoxPlaceholder>,
  <EventDashboardBoxPlaceholder backgroundColor="bg-black" key={index}>
    <EventDashboardBoxText
      Icon={
        <Image
          src={"/image/work-exp/assets/how.png"}
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="How"
    >
      <p>I take 2 hours shifts a day for online shop</p>
    </EventDashboardBoxText>
  </EventDashboardBoxPlaceholder>,
  <EventDashboardBoxPlaceholder
    classname="w-full"
    backgroundColor="bg-black"
    borderColor="border-workPrimary"
    key={index + 1}
  >
    <EventDashboardBoxIcon
      Icon={<TbClockHour5 size={50} className="text-workPrimary" />}
      title={"Total shifts"}
      titleColor="text-workPrimary"
      Value={
        <div
          className={twMerge(
            "w-full h-fit",
            "flex flex-row justify-center items-end "
          )}
        >
          <div
            className={twMerge(
              "w-[130px] h-fit",
              "flex flex-row justify-center items-center"
            )}
          >
            <AnimatedNumber
              max={765}
              reset={5000}
              fontSize={50}
              className="font-extrabold text-workPrimary"
            />
          </div>
          <p className="text-xl font-bold text-workPrimary">Hours</p>
        </div>
      }
    />
  </EventDashboardBoxPlaceholder>,
];

export default CUSTOMER_SERVICE_DASHBOARD;

import IconBox from "@/components/trigger/box/icon-box";
import PlaceholderBox from "@/components/trigger/box/placeholder-box";
import TextBox from "@/components/trigger/box/text-box";
import AnimatedNumber from "@/components/trigger/display/animated-number";
import Image from "next/image";
import React from "react";
import { TbClockHour5 } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const index = 0;

const CUSTOMER_SERVICE_DASHBOARD: React.ReactNode[] = [
  <PlaceholderBox backgroundColor="bg-black" key={index}>
    <TextBox
      Icon={
        <Image
          src={
            "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/mwxtqkzng5bpbcxdrvpt.png"
          }
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="Why"
    >
      <p className="font-semibold">
        Upskill my communication skill and save some money
      </p>
    </TextBox>
  </PlaceholderBox>,
  <PlaceholderBox backgroundColor="bg-black" key={index + 1}>
    <TextBox
      Icon={
        <Image
          src={
            "https://res.cloudinary.com/dohewcyes/image/upload/v1724934237/image/page/work/assets/x3s0ml7ozvl5gbeiwoei.png"
          }
          width={30}
          height={30}
          alt="goals"
        />
      }
      color="white"
      title="How"
    >
      <p className="font-semibold">
        I take 2 hours shifts a day as customer service
      </p>
    </TextBox>
  </PlaceholderBox>,
  <PlaceholderBox
    classname="w-full"
    backgroundColor="bg-black"
    borderColor="border-workPrimary"
    key={index + 2}
  >
    <IconBox
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
  </PlaceholderBox>,
  <PlaceholderBox key={index + 3} backgroundColor="bg-black" classname="w-full">
    <TextBox
      Icon={
        <Image
          src={
            "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/experience/customer-service/assets/ljzbxvhwwzqowwe4rwpg.png"
          }
          alt="employer"
          width={25}
          height={25}
        />
      }
      color="white"
      title="I Work For"
    >
      <div className={twMerge("flex flex-col items-center", "gap-y-5")}>
        <div className={twMerge("flex flex-col items-center", "gap-y-3")}>
          <Image
            src={
              "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/experience/customer-service/assets/btrbarav3lhqiflexue8.png"
            }
            alt="employer"
            objectFit="cover"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className={twMerge("font-bold")}>Yovita Shop Collection</p>
        </div>
        <p className="text-center">Shopee and Lazada online shop which sells</p>
      </div>
    </TextBox>
  </PlaceholderBox>,
];

export default CUSTOMER_SERVICE_DASHBOARD;

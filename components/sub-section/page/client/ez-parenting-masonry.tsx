import InformationBox from "@/components/trigger/display/information-box";
import Image from "next/image";
import { MdTipsAndUpdates } from "react-icons/md";

const key = 0;

const EZPARENTINGMASONRIES: React.ReactNode[] = [
  <InformationBox
    key={key}
    identifier="development"
    Icon={<MdTipsAndUpdates size={20} className="text-white" />}
    title={{
      text: "More features to come",
      position: "right",
      className: "text-black",
    }}
    backgroundColor="bg-gradient-to-br from-[#E0E0E0] to-[#3A3A3A]"
    padding="px-5 pt-5 pb-12"
    image={
      <Image
        src={"/image/coding-pro/discord-clone/information/development.png"}
        className="absolute -left-[50px] -top-[80px] z-[1]"
        alt="development"
        width={480}
        height={480}
      />
    }
  >
    <p className="text-black text-right text-sm">
      I am planning to integrate
      <span className="font-bold text-black"> onboarding features</span> and
      <span className="font-bold text-black"> voting mechanism</span>
    </p>
  </InformationBox>,
  <InformationBox
    key={key + 1}
    identifier="development"
    Icon={<MdTipsAndUpdates size={20} className="text-white" />}
    title={{
      text: "More features to come",
      position: "right",
      className: "text-black",
    }}
    backgroundColor="bg-gradient-to-br from-[#E0E0E0] to-[#3A3A3A]"
    padding="px-5 pt-5 pb-12"
    image={
      <Image
        src={"/image/coding-pro/discord-clone/information/development.png"}
        className="absolute -left-[50px] -top-[80px] z-[1]"
        alt="development"
        width={480}
        height={480}
      />
    }
  >
    <p className="text-black text-right text-sm">
      I am planning to integrate
      <span className="font-bold text-black"> onboarding features</span> and
      <span className="font-bold text-black"> voting mechanism</span>
    </p>
  </InformationBox>,
  <InformationBox
    key={key + 2}
    identifier="development"
    Icon={<MdTipsAndUpdates size={20} className="text-white" />}
    title={{
      text: "More features to come",
      position: "right",
      className: "text-black",
    }}
    backgroundColor="bg-gradient-to-br from-[#E0E0E0] to-[#3A3A3A]"
    padding="px-5 pt-5 pb-12"
    image={
      <Image
        src={"/image/coding-pro/discord-clone/information/development.png"}
        className="absolute -left-[50px] -top-[80px] z-[1]"
        alt="development"
        width={480}
        height={480}
      />
    }
  >
    <p className="text-black text-right text-sm">
      I am planning to integrate
      <span className="font-bold text-black"> onboarding features</span> and
      <span className="font-bold text-black"> voting mechanism</span>
    </p>
  </InformationBox>,
];

export default EZPARENTINGMASONRIES;

import VIDEO_PRODUCTION_DASHBOARD from "@/components/sub-section/page/video-production-dashboard";
import { Event, Experience } from "../org-exp/org-exp-data";
import CUSTOMER_SERVICE_DASHBOARD from "@/components/sub-section/page/customer-service-dashboard";

export interface LineChartData {
  xValue: string;
  line1: number;
  line2?: number;
}

const VIDEO_EV: Event[] = [
  {
    video: "/video/work-exp/video-actor.mp4",
    eventName: "Inspiratips",
    position: "Video Actor",
    eventDesc:
      "Inspiratips is a YouTube channel with a primary focus on producing educational content that is easily understandable for the Indonesian audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
  },
];

const ONLINESHOP_EV: Event[] = [
  {
    img: "/image/work-exp/customer service.jpg",
    eventName: "Yovita Shop Collection",
    position: "Customer Service",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
  },
  {
    img: "/image/work-exp/admin.jpg",
    eventName: "Yovita Shop Collection",
    position: "Admin",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
  },
];

const WORK_EXP_DATA: Experience[] = [
  {
    position: "Video Production",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    events: VIDEO_EV,
    Heading: {
      title: "I take video for education",
      imageUrl: "/image/work-exp/video-production/Heading.png",
    },
    Dashboard: VIDEO_PRODUCTION_DASHBOARD,
  },
  {
    position: "Online Shop",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    events: ONLINESHOP_EV,
    Heading: {
      title: "I assist shop customer",
      imageUrl: "/image/work-exp/customer-service/Heading.png",
    },
    Dashboard: CUSTOMER_SERVICE_DASHBOARD,
  },
];

export default WORK_EXP_DATA;

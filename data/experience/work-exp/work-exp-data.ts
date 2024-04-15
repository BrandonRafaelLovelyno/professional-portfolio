import { Event, Experience } from "../org-exp/org-exp-data";

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
  {
    video: "/video/work-exp/video-editor.mp4",
    eventName: "You Know",
    position: "Video Editor",
    eventDesc:
      "You Know is a YouTube channel with a primary focus on producing educational content that is easily understandable for the English audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
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
  },
  {
    position: "Online Shop",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    events: ONLINESHOP_EV,
  },
];

export const VIDEOACTOR_DATA: LineChartData[] = [
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

export default WORK_EXP_DATA;

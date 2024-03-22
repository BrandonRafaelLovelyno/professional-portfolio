import { Event, Experience } from "./org-exp-section-data";

const VIDEO_EV: Event[] = [
  {
    video: "/video/work-exp/video-actor.mp4",
    eventName: "Inspiratips",
    position: "Staff",
    eventDesc:
      "Inspiratips is a YouTube channel with a primary focus on producing educational content that is easily understandable for the Indonesian audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
  },
  {
    video: "/video/work-exp/video-editor.mp4",
    eventName: "You Know",
    position: "Staff",
    eventDesc:
      "You Know is a YouTube channel with a primary focus on producing educational content that is easily understandable for the English audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
  },
];

const ONLINESHOP_EV: Event[] = [
  {
    img: "/image/work-exp/customer service.jpg",
    eventName: "Yovita Shop Collection",
    position: "Staff",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
  },
  {
    img: "/image/work-exp/admin.jpg",
    eventName: "Yovita Shop Collection",
    position: "Staff",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
  },
];

const WORK_EXP: Experience[] = [
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

export default WORK_EXP;

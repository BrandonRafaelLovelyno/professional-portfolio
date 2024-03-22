import { Event, Experience } from "./org-exp-section-data";

const VIDEOACTOR_EV: Event[] = [
  {
    video: "/video/work-exp/video-actor.mp4",
    eventName: "Inspiratips",
    position: "Staff",
    eventDesc:
      "Inspiratips is a YouTube channel with a primary focus on producing educational content that is easily understandable for the Indonesian audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
  },
];

const VIDEOEDITOR_EV: Event[] = [
  {
    video: "/video/work-exp/video-editor.mp4",
    eventName: "You Know",
    position: "Staff",
    eventDesc:
      "You Know is a YouTube channel with a primary focus on producing educational content that is easily understandable for the English audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
  },
];

const CUSTOMERSERVICE_EV: Event[] = [
  {
    img: "/image/work-exp/customer service.jpg",
    eventName: "Yovita Shop Collection",
    position: "Staff",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
  },
];

const ONLINEADMIN_EV: Event[] = [
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
    events: VIDEOACTOR_EV,
    position: "Video Actor",
  },
  {
    events: VIDEOEDITOR_EV,
    position: "Video Editor",
  },
  {
    events: CUSTOMERSERVICE_EV,
    position: "Customer Service",
  },
  {
    events: ONLINEADMIN_EV,
    position: "E-commerce Admin",
  },
];

export default WORK_EXP;

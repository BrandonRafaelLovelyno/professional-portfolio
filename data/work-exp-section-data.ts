import { Event, Experience } from "./org-exp-section-data";

const VIDEOACTOR_EV: Event[] = [
  {
    date: "August 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Inspiratips",
    position: "Staff",
    eventDesc:
      "Inspiratips is a YouTube channel with a primary focus on producing educational content that is easily understandable for the Indonesian audience. This channel is dedicated to creating informative and accessible videos that cater to the learning needs of the general public",
    eventRole: [
      "Specialize in delivering bite‑sized, engaging content.",
      "Explore intriguing and informative subjects.",
      "Aim to captivate audiences and make complex topics accessible in brief and entertaining videos",
    ],
  },
];

const CUSTOMERSERVICE_EV: Event[] = [
  {
    date: "April 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yovita Shop Collection",
    position: "Staff",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
    eventRole: [
      "Role as an online shop customer service representative",
      "Responsibility for providing prompt and effective assistance",
      "Aim to deliver exceptional service for enhanced customer satisfaction",
      "Foster positive relationships with customers.",
    ],
  },
];

const ONLINEADMIN_EV: Event[] = [
  {
    date: "October 2022 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yovita Shop Collection",
    position: "Staff",
    eventDesc:
      "YovitaOnlineShopCollection is an online store based in West Jakarta that specializes in selling cosmetic products. This platform serves as a convenient hub for customers to access and purchase a variety of cosmetic essentials.",
    eventRole: [
      "Responsibilities include updating product stocks and enhancing the product catalog.",
      "Addition of new products to the inventory.",
      "Meticulous management of stock levels using Microsoft Excel.",
      "Ensure accurate information for effective E-commerce product management.",
    ],
  },
];

const WORK_EXP: Experience[] = [
  {
    events: VIDEOACTOR_EV,
    position: "Video Actor",
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

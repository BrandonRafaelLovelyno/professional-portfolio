import { Event, Experience } from "./org-exp-section-data";

const SCHOLARS_EV: Event[] = [
  {
    date: "January 2023",
    position: "",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "TELADAN Scholarship",
  },
];

const WEBSITE_EV: Event[] = [
  {
    date: "November 2023",
    position: "First Winner",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "TETI Programming Week",
  },
];

const CERTIFICATE_EXP: Experience[] = [
  {
    events: SCHOLARS_EV,
    position: "Scholarship",
  },
  {
    events: WEBSITE_EV,
    position: "Website Development",
  },
];

export default CERTIFICATE_EXP;

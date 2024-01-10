import { Event, Experience } from "./org-exp-section-data";

const SCHOLARS_EV: Event[] = [
  {
    date: "January 2023",
    position: "Scholars",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "TELADAN Scholarship",
    eventDesc:
      "Program TELADAN (Transformasi Edukasi untuk melahirkan Pemimpin Masa Depan) is one of Tanoto Foundation's initiatives aimed at building an excellent generation and resilient future leaders who can contribute to bringing positive impacts to Indonesia.This program is designed to transform the education landscape, fostering the development of capable and visionary individuals who possess the skills and mindset to make positive contributions to society. ",
  },
];

const WEBSITE_EV: Event[] = [
  {
    date: "November 2023",
    position: "First Winner",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "TETI Programming Week",
    eventDesc:
      "TETI Programming Week is an internal competition within DTETI FT UGM that centers around Information Technology. This event is specifically designed to challenge and showcase the programming skills and expertise of students within the Department of Electrical Engineering and Information Technology. ",
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

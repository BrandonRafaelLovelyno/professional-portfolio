import { Event, Experience } from "./org-exp-section-data";

const SCHOLARS_EV: Event[] = [
  {
    data: {
      date: "January 2023",
      position: "Scholars",
      video: "https://youtu.be/akHtxjYZIzQ?si=dY2A-tIUB35u65xF",
      eventName: "TELADAN Scholarship",
      eventDesc:
        "Program TELADAN (Transformasi Edukasi untuk melahirkan Pemimpin Masa Depan) is one of Tanoto Foundation's initiatives aimed at building an excellent generation and resilient future leaders who can contribute to bringing positive impacts to Indonesia.This program is designed to transform the education landscape, fostering the development of capable and visionary individuals who possess the skills and mindset to make positive contributions to society. ",
    },
    gridHeigth: 3,
  },
];

const WEBSITE_EV: Event[] = [
  {
    data: {
      date: "November 2023",
      position: "First Winner",
      img: "/image/certif/tpw.jpg",
      eventName: "TETI Programming Week",
      eventDesc:
        "TETI Programming Week is an internal competition within DTETI FT UGM that centers around Information Technology. This event is specifically designed to challenge and showcase the programming skills and expertise of students within the Department of Electrical Engineering and Information Technology. ",
    },
    gridHeigth: 3,
  },
];

const ENGLISH_EV: Event[] = [
  {
    data: {
      date: "November 2023",
      position: "920/990 TOEIC Score",
      img: "/image/certif/toeic.jpg",
      eventName: "TOEIC Test",
      eventDesc:
        "The Test of English for International Communication (TOEIC) is an international standardized test of English language proficiency for non-native speakers. It is intentionally designed to measure the everyday English skills of people working in an international environment.",
    },
    gridHeigth: 3,
  },
];

const CERTIFICATE_EXP: Experience[] = [
  {
    events: SCHOLARS_EV,
    position: "Scholarship",
  },
  {
    events: ENGLISH_EV,
    position: "Language",
  },
  {
    events: WEBSITE_EV,
    position: "Website Development",
  },
];

export default CERTIFICATE_EXP;

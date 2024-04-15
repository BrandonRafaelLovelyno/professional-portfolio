import { Event, Experience } from "../org-exp/org-exp-data";

const WEBSITE_DEVELOPER_EV: Event[] = [
  {
    img: "/image/coding experience/nesco.jpg",
    eventName: "NESCO UGM 2023",
    position: "Staff",
    eventDesc:
      "National Electrical Power System Competition is a national contest focusing on high-voltage electricity, aimed at improving Indonesia's power sector. Through innovation and knowledge sharing, the competition strives to enhance skills and contribute to the development of a more reliable and efficient electrical grid for the nation's future.",
  },
  {
    img: "/image/coding experience/findit.jpg",
    eventName: "Find IT! UGM 2023",
    position: "Staff",
    eventDesc:
      "Future Innovations and Discovery IT is a national competition in the field of Information Technology. Its aim is to enhance public interest and exposure to IT through education and innovation.",
  },
  {
    img: "/image/coding experience/kpu.jpg",
    eventName: "General Elections Commisions of Engineering Faculty",
    position: "Staff",
    eventDesc:
      "KPUFT UGM 2023 is an event dedicated to the election of the Student Executive Board (BEM) chairman for the Faculty of Engineering at Gadjah Mada University in 2023. It serves as a platform for students to participate in the democratic process and choose a leader who will represent their interests and contribute to the betterment of the engineering community within the university.",
  },
];

const CODING_EXP_DATA: Experience[] = [
  {
    events: WEBSITE_DEVELOPER_EV,
    position: "Website Developer",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
  },
];

export default CODING_EXP_DATA;

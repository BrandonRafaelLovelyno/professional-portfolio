import { Event, Experience } from "./org-exp-section-data";

const FULLSTACK_EV: Event[] = [
  {
    data: {
      date: "September 2023 - Present",
      img: "/coding experience/findit.jpg",
      eventName: "Find IT! UGM 2023",
      position: "Staff",
      eventDesc:
        "Future Innovations and Discovery IT is a national competition in the field of Information Technology. Its aim is to enhance public interest and exposure to IT through education and innovation.",
      eventRole: [
        "Specializing in React for dynamic user interface development.",
        "Proficient in server-side logic using Node.js with Express",
      ],
    },
    gridHeigth: 3,
  },
  {
    data: {
      date: "October 2023 - November 2023",
      img: "/coding experience/kpu.jpg",
      eventName: "General Elections Commisions of Engineering Faculty",
      position: "Staff",
      eventDesc:
        "KPUFT UGM 2023 is an event dedicated to the election of the Student Executive Board (BEM) chairman for the Faculty of Engineering at Gadjah Mada University in 2023. It serves as a platform for students to participate in the democratic process and choose a leader who will represent their interests and contribute to the betterment of the engineering community within the university.",
      eventRole: [
        "Develop server‑side logic using programming language Javascript",
        "Design and manage databases to store election‑related data.",
        "Integrate third‑party services for features such as authentication and notifcations",
        "Implement security protocols to safeguard election data and user information ",
      ],
    },
    gridHeigth: 3,
  },
];

const BACKEND_EV: Event[] = [
  {
    data: {
      date: "September 2023 - Present",
      img: "/coding experience/nesco.jpg",
      eventName: "NESCO UGM 2023",
      position: "Staff",
      eventDesc:
        "National Electrical Power System Competition is a national contest focusing on high-voltage electricity, aimed at improving Indonesia's power sector. Through innovation and knowledge sharing, the competition strives to enhance skills and contribute to the development of a more reliable and efficient electrical grid for the nation's future.",
      eventRole: [
        "Working with Typescript for CRUD action",
        "Specializing on server-side logic using Node.js with Express",
        "Contributing in server-side authentication using Node.js with Express",
      ],
    },
    gridHeigth: 3,
  },
];

const CODING_EXP: Experience[] = [
  {
    events: FULLSTACK_EV,
    position: "Full-stack Developer",
  },
  {
    events: BACKEND_EV,
    position: "Back-end Developer",
  },
];

export default CODING_EXP;

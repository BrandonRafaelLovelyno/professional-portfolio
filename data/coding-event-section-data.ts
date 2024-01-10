import { Event, Experience } from "./org-exp-section-data";

const FULLSTACK_EV: Event[] = [
  {
    date: "September 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "NESCO UGM 2023",
    position: "Staff",
    eventDesc:
      "National Electrical Power System Competition is a national contest focusing on high-voltage electricity, aimed at improving Indonesia's power sector. Through innovation and knowledge sharing, the competition strives to enhance skills and contribute to the development of a more reliable and efficient electrical grid for the nation's future.",
    eventRole: [
      "Specializing in React for dynamic user interface development.",
      "Proficient in server-side logic using Node.js with Express",
    ],
  },
  {
    date: "September 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Find IT! UGM 2023",
    position: "Staff",
    eventDesc:
      "Future Innovations and Discovery IT is a national competition in the field of Information Technology. Its aim is to enhance public interest and exposure to IT through education and innovation.",
    eventRole: [
      "Specializing in React for dynamic user interface development.",
      "Proficient in server-side logic using Node.js with Express",
    ],
  },
  {
    date: "October 2023 - November 2023",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "General Elections Commisions of Engineering Faculty",
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
];

const CODING_EXP: Experience[] = [
  {
    events: FULLSTACK_EV,
    position: "Full-stack Developer",
  },
];

export default CODING_EXP;

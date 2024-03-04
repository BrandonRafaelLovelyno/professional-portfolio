import { Event, Experience } from "./org-exp-section-data";

export interface Team {
  person: Person[];
}

export interface Person {
  name: string;
  position: string;
  img?: string;
}

export const EZPARENTING: Event = {
  date: "January 2024 - February 2024",
  video: "https://youtu.be/on5_h2MxR6M?si=Tl8DRAJQtyjMGCo7",
  name: "Content Management System",
  position: "Full-stack developer",
  link: "/coding-pro/discord-clone",
  eventDesc:
    "My team and I have handled a project for EZ Parenting Indonesia. In our project, we have crafted a fully-functional Content Management System. We hope, in our collaboration with EZ Parenting, that parents would find parenting easier with the relevant website",
  eventRole: [
    "Craft the dashboard page",
    "Build the backend of EZ Parenting website",
    "Integrate React Quill for Content Management System",
    "Integrate Google Drive for image upload",
  ],

  team: {
    person: [
      {
        name: "Muhammad Dzaki Hilmi Wismadi",
        position: "Delegator",
        img: "/client experience/ez parenting/team/hilmi.jpg",
      },
      {
        name: "Yitzhak Edmund Tio Manalu",
        position: "Project Manager",
        img: "/client experience/ez parenting/team/yitzhak.jpg",
      },
      {
        name: "Benaya Imanuela",
        position: "Front End Developer",
        img: "/client experience/ez parenting/team/benaya.jpg",
      },
      {
        name: "Brandon Rafael Lovelyno",
        position: "Full-stack Developer",
      },
    ],
  },
};

export const CLIENT_EXP: Experience[] = [
  {
    events: [EZPARENTING],
    position: "EZ Parenting",
  },
];

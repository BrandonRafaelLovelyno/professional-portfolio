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
  team: {
    person: [
      {
        name: "Brandon Rafael Lovelyno",
        position: "Full-stack Developer",
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

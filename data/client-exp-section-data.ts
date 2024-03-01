import { Event, Experience } from "./org-exp-section-data";

export interface Team {
  person: Person[];
  organization?: Organization[];
}

export interface Person {
  name: string;
  position: string;
}

export interface Organization {
  name: string;
  bio: string;
}

export const EZPARENTING: Event = {
  date: "January 2024 - February 2024",
  video: "https://youtu.be/on5_h2MxR6M?si=Tl8DRAJQtyjMGCo7",
  name: "Content Management System",
  position: "Full-stack developer",
  link: "/coding-pro/discord-clone",
};

export const CLIENT_EXP: Experience[] = [
  {
    events: [EZPARENTING],
    position: "EZ Parenting",
  },
];

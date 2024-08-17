export interface LandingPageSection {
  firstWord: string;
  secondWord: string;
  parallaxImage: string[];
  parallaxSpeed: number[];
  link: string;
  titlePosition: "left" | "right";
}

export const HEROTITLE: string[] = [
  "IT Enthusiast",
  "Information Technology Undergraduate",
  "Full-Stack learner",
  "Tanoto Scholars",
];

export const LANDINGPAGESECTIONDATA: LandingPageSection[] = [
  {
    link: "/project",
    firstWord: "Coding",
    secondWord: "Projects",
    parallaxImage: [
      "/image/page/home/project/background.png",
      "/image/page/home/project/laptop.png",
      "/image/page/home/project/book.png",
    ],
    titlePosition: "left",
    parallaxSpeed: [0, 0.2, 0.3],
  },
  {
    link: "/client",
    firstWord: "Client",
    secondWord: "Experience",
    parallaxImage: [
      "/image/page/home/client/background.png",
      "/image/page/home/client/laptop.png",
      "/image/page/home/client/glass.png",
      "/image/page/home/client/phone.png",
    ],
    parallaxSpeed: [0, 0.2, 0.1, 0.3],
    titlePosition: "right",
  },
  {
    link: "/work",
    firstWord: "Work",
    secondWord: "Experience",
    parallaxImage: [
      "/image/page/home/work/background.jpeg",
      "/image/page/home/work/camera.png",
      "/image/page/home/work/photo.png",
    ],
    parallaxSpeed: [0, 0.2, 0.3],
    titlePosition: "left",
  },
];

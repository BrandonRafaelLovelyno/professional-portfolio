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
    link: "/project/coding",
    firstWord: "Coding",
    secondWord: "Projects",
    parallaxImage: [
      "/image/landing-page/coding-project-section/background.png",
      "/image/landing-page/coding-project-section/laptop.png",
      "/image/landing-page/coding-project-section/book.png",
    ],
    titlePosition: "left",
    parallaxSpeed: [0, 0.2, 0.3],
  },
  {
    link: "experience/client-exp",
    firstWord: "Client",
    secondWord: "Experience",
    parallaxImage: [
      "/image/landing-page/client-experience-section/background.png",
      "/image/landing-page/client-experience-section/laptop.png",
      "/image/landing-page/client-experience-section/glass.png",
      "/image/landing-page/client-experience-section/phone.png",
    ],
    parallaxSpeed: [0, 0.2, 0.1, 0.3],
    titlePosition: "right",
  },
  {
    link: "experience/work-exp",
    firstWord: "Work",
    secondWord: "Experience",
    parallaxImage: [
      "/image/landing-page/work-experience-section/background.jpeg",
      "/image/landing-page/work-experience-section/camera.png",
      "/image/landing-page/work-experience-section/photo.png",
    ],
    parallaxSpeed: [0, 0.2, 0.3],
    titlePosition: "left",
  },
];

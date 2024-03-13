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
    link: "/coding-pro",
    firstWord: "Coding",
    secondWord: "Projects",
    parallaxImage: [
      "/landing-page/coding-project-section/background.png",
      "/landing-page/coding-project-section/laptop.png",
      "/landing-page/coding-project-section/book.png",
    ],
    titlePosition: "left",
    parallaxSpeed: [0.2, 0.4, 0.3],
  },
  {
    link: "/client-exp",
    firstWord: "Client",
    secondWord: "Experience",
    parallaxImage: [
      "/landing-page/client-experience-section/background.png",
      "/landing-page/client-experience-section/laptop.png",
      "/landing-page/client-experience-section/glass.png",
      "/landing-page/client-experience-section/phone.png",
    ],
    parallaxSpeed: [0.1, 0.4, 0.3, 0.15],
    titlePosition: "left",
  },
  // {
  //   link: "/coding-ev",
  //   firstWord: "Coding",
  //   secondWord: "Events",
  //   parallaxImage: [
  //     "/images/landing-page/section/coding-ev/1.jpg",
  //     "/images/landing-page/section/coding-ev/2.jpg",
  //     "/images/landing-page/section/coding-ev/3.jpg",
  //   ],
  //   parallaxSpeed: [0.5, 0.7, 0.9],
  // },
  {
    link: "/work-exp",
    firstWord: "Work",
    secondWord: "Experience",
    parallaxImage: [
      "/images/landing-page/section/work-exp/1.jpg",
      "/images/landing-page/section/work-exp/2.jpg",
      "/images/landing-page/section/work-exp/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
    titlePosition: "left",
  },
  {
    link: "/certif",
    firstWord: "Certifications",
    secondWord: "& Awwards",
    parallaxImage: [
      "/images/landing-page/section/certif/1.jpg",
      "/images/landing-page/section/certif/2.jpg",
      "/images/landing-page/section/certif/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
    titlePosition: "left",
  },

  {
    link: "/org-exp",
    firstWord: "Organizational",
    secondWord: "Experience",
    parallaxImage: [
      "/images/landing-page/section/org-exp/1.jpg",
      "/images/landing-page/section/org-exp/2.jpg",
      "/images/landing-page/section/org-exp/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
    titlePosition: "left",
  },
];

export interface LandingPageSection {
  firstWord: string;
  secondWord: string;
  parallaxImage: string[];
  parallaxSpeed: number[];
  link: string;
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
      "/images/landing-page/section/coding-pro/1.jpg",
      "/images/landing-page/section/coding-pro/2.jpg",
      "/images/landing-page/section/coding-pro/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
  },
  {
    link: "/client-exp",
    firstWord: "Client",
    secondWord: "Experience",
    parallaxImage: [
      "/images/landing-page/section/client-exp/1.jpg",
      "/images/landing-page/section/client-exp/2.jpg",
      "/images/landing-page/section/client-exp/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
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
    link: "/certif",
    firstWord: "Certifications",
    secondWord: "& Awwards",
    parallaxImage: [
      "/images/landing-page/section/certif/1.jpg",
      "/images/landing-page/section/certif/2.jpg",
      "/images/landing-page/section/certif/3.jpg",
    ],
    parallaxSpeed: [0.5, 0.7, 0.9],
  },
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
  },
];

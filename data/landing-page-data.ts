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
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934233/image/page/home/project/nflzxwfg86vqj5ztgnwp.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934233/image/page/home/project/q87ebgyrj3v2qhhgznr0.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934233/image/page/home/project/bhqbjp4qxyaxhmvk54i8.png",
    ],
    titlePosition: "left",
    parallaxSpeed: [0, 0.2, 0.3],
  },
  {
    link: "/client",
    firstWord: "Client",
    secondWord: "Experience",
    parallaxImage: [
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/home/client/nct23maxc3pm5i2teh8s.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934231/image/page/home/client/er0avl5huiga7blvuuod.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/home/client/ejwrpvxcfnsisoj9kaj8.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934231/image/page/home/client/roel5kgjlvey0n3fgitx.png",
    ],
    parallaxSpeed: [0, 0.2, 0.1, 0.3],
    titlePosition: "right",
  },
  {
    link: "/work",
    firstWord: "Work",
    secondWord: "Experience",
    parallaxImage: [
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934253/image/page/home/work/ldglggbeeoblmznycfix.jpg",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934234/image/page/home/work/dmfcm8dxki6gtry2ymsh.png",
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934234/image/page/home/work/bs03zyn16jsqdy4t1ezc.png",
    ],
    parallaxSpeed: [0, 0.2, 0.3],
    titlePosition: "left",
  },
];

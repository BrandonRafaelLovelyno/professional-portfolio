import EZPARENTINGMASONRIES from "@/components/sub-section/page/client/bottom-dashboard/ez-parenting-dashboard";
import { TechStack } from "../project/project-data";
import { BENAYA, HILMI, YITZHAK } from "./person-data";
import {
  MONGODB,
  NEXTAUTH,
  NEXTJS,
  PRISMA,
  REACT,
  UPLOADTHING,
} from "../tech-stack-data";

export interface Client {
  usage: string;
  client: { name: string; desc: string };
  role: string;
  team: Person[];
  deployment: string;
  ilnkedInPost?: string;
  techStack: TechStack[];
  Masonries: React.FC;
  images: {
    logo: string;
    card: string;
  };
  color: {
    from: string;
    to: string;
  };
}

export interface Team {
  person: Person[];
}

export interface Person {
  name: string;
  position: string;
  img: string;
}

export const EZPARENTING: Client = {
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia",
  },
  role: "Full-stack developer",
  team: [HILMI, YITZHAK, BENAYA],

  images: {
    logo: "/image/page/client/experience/ez-parenting/logo.png",
    card: "/image/page/client/experience/ez-parenting/background.jpg",
  },
  color: {
    from: "#fb923c",
    to: "#c2410c",
  },
  usage:
    "Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [REACT, NEXTJS, NEXTAUTH, PRISMA, MONGODB, UPLOADTHING],
  Masonries: EZPARENTINGMASONRIES,
};

export const NESCO: Client = {
  deployment: "https://www.ezparenting.id",
  client: {
    name: "NESCO",
    desc: "NESCO is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
  },
  role: "Full-stack developer",
  team: [HILMI, YITZHAK, BENAYA],

  images: {
    logo: "/image/page/client/experience/nesco/logo.svg",
    card: "/image/page/client/experience/ez-parenting/background.jpg",
  },
  color: {
    from: "#fb923c",
    to: "#c2410c",
  },
  usage:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  Masonries: EZPARENTINGMASONRIES,
};

export const POLIBATAM: Client = {
  deployment: "https://www.ezparenting.id",
  client: {
    name: "Polibatam",
    desc: "Polibatam is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
  },
  role: "Full-stack developer",
  team: [HILMI, YITZHAK, BENAYA],

  images: {
    logo: "/image/page/client/experience/silam-polibatam/logo.png",
    card: "/image/page/client/experience/ez-parenting/background.jpg",
  },
  color: {
    from: "#fb923c",
    to: "#c2410c",
  },
  usage:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  Masonries: EZPARENTINGMASONRIES,
};

export const KOLOSAL: Client = {
  deployment: "https://www.ezparenting.id",
  client: {
    name: "Genta",
    desc: "Genta is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
  },
  role: "Full-stack developer",
  team: [HILMI, YITZHAK, BENAYA],

  images: {
    logo: "/image/page/client/experience/kolosal/logo.jpeg",
    card: "/image/page/client/experience/ez-parenting/background.jpg",
  },
  color: {
    from: "#fb923c",
    to: "#c2410c",
  },
  usage:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  Masonries: EZPARENTINGMASONRIES,
};

export const FINDIT: Client = {
  deployment: "https://www.ezparenting.id",
  client: {
    name: "FindIT",
    desc: "FindIT is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
  },
  role: "Full-stack developer",
  team: [HILMI, YITZHAK, BENAYA],

  images: {
    logo: "/image/page/client/experience/find-it/logo.svg",
    card: "/image/page/client/experience/ez-parenting/background.jpg",
  },
  color: {
    from: "#fb923c",
    to: "#c2410c",
  },
  usage:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  Masonries: EZPARENTINGMASONRIES,
};

export const CLIENT_EXP: Client[] = [
  EZPARENTING,
  NESCO,
  POLIBATAM,
  KOLOSAL,
  FINDIT,
];

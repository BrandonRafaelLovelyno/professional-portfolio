import EZPARENTINGMASONRIES from "@/components/sub-section/page/client/ez-parenting-masonry";
import { TechStack } from "../project/project-data";
import { BENAYA, HILMI, YITZHAK } from "./person-data";

export interface Client {
  definition: string;
  client: { name: string; desc: string; imageUrl: string };
  role: string;
  team: Team;
  deployment: string;
  ilnkedInPost?: string;
  techStack: TechStack[];
  backgroundUrl: string;
  status: "In Progress" | "Completed" | "Soon";
  logoUrl: string;
  Masonries: React.ReactNode[];
}

export interface Team {
  person: Person[];
}

export interface Person {
  name: string;
  position: string;
  img?: string;
}

export const EZPARENTING: Client = {
  logoUrl: "/image/page/client/ez-parenting/logo.png",
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
    imageUrl: "/image/page/client/ez-parenting/logo.png",
  },
  role: "Full-stack developer",
  team: {
    person: [HILMI, YITZHAK, BENAYA],
  },
  backgroundUrl: "/image/page/client/ez-parenting/background.jpg",
  definition:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  status: "Completed",
  Masonries: EZPARENTINGMASONRIES,
};

export const NESCO: Client = {
  logoUrl: "/image/page/client/ez-parenting/logo.png",
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
    imageUrl: "/image/page/client/ez-parenting/logo.png",
  },
  role: "Full-stack developer",
  team: {
    person: [HILMI, YITZHAK, BENAYA],
  },
  backgroundUrl: "/image/page/client/ez-parenting/background.jpg",
  definition:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  status: "Completed",
  Masonries: EZPARENTINGMASONRIES,
};

export const POLIBATAM: Client = {
  logoUrl: "/image/page/client/ez-parenting/logo.png",
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
    imageUrl: "/image/page/client/ez-parenting/logo.png",
  },
  role: "Full-stack developer",
  team: {
    person: [HILMI, YITZHAK, BENAYA],
  },
  backgroundUrl: "/image/page/client/ez-parenting/background.jpg",
  definition:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  status: "Completed",
  Masonries: EZPARENTINGMASONRIES,
};

export const KOLOSAL: Client = {
  logoUrl: "/image/page/client/ez-parenting/logo.png",
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
    imageUrl: "/image/page/client/ez-parenting/logo.png",
  },
  role: "Full-stack developer",
  team: {
    person: [HILMI, YITZHAK, BENAYA],
  },
  backgroundUrl: "/image/page/client/ez-parenting/background.jpg",
  definition:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  status: "Completed",
  Masonries: EZPARENTINGMASONRIES,
};

export const FINDIT: Client = {
  logoUrl: "/image/page/client/ez-parenting/logo.png",
  deployment: "https://www.ezparenting.id",
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
    imageUrl: "/image/page/client/ez-parenting/logo.png",
  },
  role: "Full-stack developer",
  team: {
    person: [HILMI, YITZHAK, BENAYA],
  },
  backgroundUrl: "/image/page/client/ez-parenting/background.jpg",
  definition:
    "EZParenting website is a content management system that allows the admin to manage the content of the website. Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [
    {
      description: "React",
      image: "/image/tech-stack/react.png",
      name: "React",
    },
  ],
  status: "Completed",
  Masonries: EZPARENTINGMASONRIES,
};

export const CLIENT_EXP: Client[] = [EZPARENTING];

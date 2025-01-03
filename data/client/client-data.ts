import { TechStack } from "../project/project-data";
import {
  ADJI,
  ADZKA,
  ANANTA,
  ARKA,
  BENAYA,
  DEREN,
  HILMI,
  JOHAN,
  WAFI,
  YITZHAK,
} from "./person-data";
import {
  EXPRESS,
  MONGODB,
  NEXTAUTH,
  NEXTJS,
  NODEJS,
  POSTGRE,
  PRISMA,
  REACT,
  SUPABASE,
  UPLOADTHING,
} from "../tech-stack-data";

export interface Client {
  usage: string;
  name: string;
  client: { name: string; desc: string };
  role: string;
  team: {
    main: Person[];
    other?: { name: string; person: Person[] };
    logoImage?: string;
  };
  link?: {
    deployment?: string;
    linkedIn?: string;
  };
  techStack: TechStack[];
  images: {
    logo: string;
    card: string;
  };
  color: {
    gradient: {
      from: string;
      to: string;
    };
    text: string;
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
  name: "EZParenting",
  link: {
    deployment: "https://www.ezparenting.id",
  },
  client: {
    name: "EZParenting",
    desc: "EZParenting is a startup company that provides parenting solutions for parents in Indonesia",
  },
  role: "Full-stack developer",
  team: { main: [HILMI, YITZHAK, BENAYA] },
  images: {
    logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/client/experience/ez-parenting/krymh79qurgh4jscisrq.png",
    card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934230/image/page/client/experience/ez-parenting/wtbyqc5p1k0hzdzrfu8d.jpg",
  },
  color: {
    gradient: {
      from: "#fb923c",
      to: "#c2410c",
    },
    text: "white",
  },
  usage:
    "Admin can create, update, and delete articles. The website also has allow parents to access the written articles",
  techStack: [REACT, NEXTJS, NEXTAUTH, PRISMA, MONGODB, UPLOADTHING],
};

export const NESCO: Client = {
  name: "NESCO",
  link: {
    deployment: "https://nescougm.id",
  },
  client: {
    name: "NESCO",
    desc: "A competition held by the Electrical and Information Engineering Student Association of Gadjah Mada University.",
  },
  role: "Back-end developer",
  team: {
    main: [ANANTA],
    other: { name: "7 other developers", person: [JOHAN, DEREN] },
    logoImage:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/ys21f8ki67w75v4fcune.png",
  },

  images: {
    logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/client/experience/nesco/d1fj0q448z22nf7cy3yw.svg",
    card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/client/experience/nesco/dsasrsin6luc0eboafou.jpg",
  },
  color: {
    gradient: {
      from: "#d0f0c0",
      to: "#bbd8ac",
    },
    text: "black",
  },
  usage:
    "A website that provides information about the competition, allows participants to register, and allows the admin to manage the competition",
  techStack: [REACT, NEXTJS, MONGODB, EXPRESS, NODEJS],
};

export const POLIBATAM: Client = {
  name: "Silam",
  client: {
    name: "Polibatam",
    desc: "A university in Batam hosting vocational programs in engineering field.",
  },
  role: "Full-stack developer",
  team: { main: [HILMI, YITZHAK, WAFI] },
  images: {
    logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934229/image/page/client/experience/silam-polibatam/twlskxhheyzhveu0vkvv.png",
    card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/client/experience/silam-polibatam/dkc3wlosp0f5itniuocs.jpg",
  },
  color: {
    gradient: {
      from: "#0047ab",
      to: "#1E90FF",
    },
    text: "white",
  },
  usage:
    "A website that helps Polibatam in managing PKM (Program Kreativitas Mahasiswa) competition",
  techStack: [REACT, EXPRESS, POSTGRE, NEXTJS],
};

export const KOLOSAL: Client = {
  name: "Kolosal",
  link: {
    deployment: "https://www.ezparenting.id",
    linkedIn:
      "https://www.linkedin.com/posts/brandon-rafael-749187246_webdevelopment-backenddeveloper-supabase-activity-7227739337877024768-Ylz1?utm_source=share&utm_medium=member_desktop",
  },
  client: {
    name: "Genta",
    desc: "Genta is a startup company that provides parenting solutions for parents in Indonesia. They provide a platform for parents to learn about parenting and to share their experiences with other parents.",
  },
  role: "Full-stack developer",
  team: { main: [HILMI, YITZHAK, BENAYA] },

  images: {
    logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934232/image/page/client/experience/kolosal/gypmbeqkgqvssncyw3tu.png",
    card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934231/image/page/client/experience/kolosal/ssutol1dsnlhtt9tfixn.jpg",
  },
  color: {
    gradient: {
      from: "#0047ab",
      to: "#1E90FF",
    },
    text: "white",
  },
  usage:
    "Kolosal is an AI platform that allows user to ask questions in text or files and get answers from the AI.",
  techStack: [REACT, NEXTJS, POSTGRE, SUPABASE],
};

export const FINDIT: Client = {
  name: "FindIT",
  link: {
    deployment: "https://find-it.id",
  },
  client: {
    name: "FindIT",
    desc: "A competition held by the Electrical and Information Engineering Student Association of Gadjah Mada University.",
  },
  role: "Full-stack developer",
  team: {
    main: [ARKA],
    other: { name: "7 other developers", person: [ADJI, ADZKA] },
    logoImage:
      "https://res.cloudinary.com/dohewcyes/image/upload/v1724934238/image/page/work/assets/ys21f8ki67w75v4fcune.png",
  },

  images: {
    logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934246/image/page/client/experience/find-it/dx1gdrmio5ih1msmexlp.svg",
    card: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934231/image/page/client/experience/find-it/wfqyrweeheu2szduvsxv.jpg",
  },
  color: {
    gradient: {
      from: "#1E90FF",
      to: "#00BFFF",
    },
    text: "white",
  },
  usage:
    "A website that provides information about the competition, allows participants to register, and allows the admin to manage the competition",
  techStack: [REACT, NEXTJS, MONGODB, EXPRESS, NODEJS],
};

export const CLIENT_EXP: Client[] = [EZPARENTING, NESCO, KOLOSAL, FINDIT];

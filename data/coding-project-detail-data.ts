export interface Feature {
  title: string;
  desc: string;
  pcVideo: string;
}

export interface TechStack {
  name: string;
  image: string;
}

export interface Project {
  deployment: string;
  features: Feature[];
  title: string;
  techStack: TechStack[];
  description: string;
  repository: string;
}

export const SPOTIFY_PRO: Project = {
  deployment: "/",
  repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
  features: [
    {
      desc: "Create an account with your email address",
      pcVideo: "https://youtu.be/z8hNS2sxfgc",
      title: "Email login",
    },
    {
      desc: "Create an account with your github account",
      pcVideo: "https://youtu.be/Vm4ghlfJpKo",
      title: "Github login",
    },
    {
      desc: "Add song locally from your computer or phone",
      pcVideo: "https://youtu.be/fS6vcdoWJ_c",
      title: "Add song",
    },
    {
      desc: "Play uploaded song by all users",
      pcVideo: "https://youtu.be/_UEcz0OZC2c",
      title: "Play song",
    },
  ],
  title: "Spotify Clone",
  techStack: [
    {
      image: "/tech-stack/typescript.png",
      name: "TypeScript",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};

export const TWITTER_PRO: Project = {
  deployment: "/",
  repository: "https://github.com/BrandonRafaelLovelyno/spotify_PRO",
  features: [
    {
      desc: "Create an account with your email address",
      pcVideo: "https://youtu.be/z8hNS2sxfgc",
      title: "Email login",
    },
    {
      desc: "Create an account with your github account",
      pcVideo: "https://youtu.be/Vm4ghlfJpKo",
      title: "Github login",
    },
    {
      desc: "Add song locally from your computer or phone",
      pcVideo: "https://youtu.be/fS6vcdoWJ_c",
      title: "Add song",
    },
    {
      desc: "Play uploaded song by all users",
      pcVideo: "https://youtu.be/_UEcz0OZC2c",
      title: "Play song",
    },
  ],
  title: "Spotify Clone",
  techStack: [
    {
      image: "/tech-stack/typescript.png",
      name: "TypeScript",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};

export const DISCORD_PRO: Project = {
  deployment: "/",
  repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
  features: [
    {
      desc: "Create an account with your email address",
      pcVideo: "https://youtu.be/z8hNS2sxfgc",
      title: "Email login",
    },
    {
      desc: "Create an account with your github account",
      pcVideo: "https://youtu.be/Vm4ghlfJpKo",
      title: "Github login",
    },
    {
      desc: "Add song locally from your computer or phone",
      pcVideo: "https://youtu.be/fS6vcdoWJ_c",
      title: "Add song",
    },
    {
      desc: "Play uploaded song by all users",
      pcVideo: "https://youtu.be/_UEcz0OZC2c",
      title: "Play song",
    },
  ],
  title: "Spotify Clone",
  techStack: [
    {
      image: "/tech-stack/typescript.png",
      name: "TypeScript",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};

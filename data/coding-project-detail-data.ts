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
  repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
  features: [
    {
      desc: "Create an account with your email address",
      pcVideo: "https://youtu.be/z8hNS2sxfgc",
      title: "Email login",
    },
  ],
  title: "Twitter Clone",
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
  repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
  features: [
    {
      desc: "Create an account with your google account",
      pcVideo: "https://youtu.be/MRDod9ZUBdk",
      title: "Google login",
    },
    {
      desc: "Select your theme preferences",
      pcVideo: "https://youtu.be/z8hNS2sxfgc",
      title: "Change discord theme",
    },
    {
      desc: "Create server with title and image",
      pcVideo: "https://youtu.be/Nw-SxS8ur54",
      title: "Create server",
    },
    {
      desc: "Delete server",
      pcVideo: "https://youtu.be/t57FVn5wL7A",
      title: "Delete server",
    },
    {
      desc: "Edit server icon or server name",
      pcVideo: "https://youtu.be/G0mDrpfLX0M",
      title: "Edit server",
    },
    {
      desc: "Invite another user to a server",
      pcVideo: "https://youtu.be/mUf6zn9Y8xA",
      title: "Invite friends",
    },
    {
      desc: "Manage server members role or kick server members",
      pcVideo: "https://youtu.be/sK2ETwh-AAU",
      title: "Manage server members",
    },
    {
      desc: "Create text channel on a server",
      pcVideo: "https://youtu.be/RP3DdzrSnRA",
      title: "Create text channel",
    },
    {
      desc: "Real-time chat with websocket or refetch on 50ms interval",
      pcVideo: "https://youtu.be/uhPLc9Neto4",
      title: "Real-time chat",
    },
  ],
  title: "Discord Clone",
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

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
  deployment?: string;
  features: Feature[];
  title: string;
  techStack: TechStack[];
  description: string;
  repository: string;
}

export const SPOTIFY_PRO: Project = {
  deployment:
    "https://spotify-clone-g28on8ooz-brandon-rafael-lovelynos-projects.vercel.app",
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
      image: "/tech-stack/react.png",
      name: "React",
    },
    {
      image: "/tech-stack/supabase.png",
      name: "Supabase",
    },
    {
      image: "/tech-stack/postgre.svg",
      name: "Postgre",
    },
    {
      image: "/tech-stack/nextjs.svg",
      name: "Next.js",
    },
    {
      image: "/tech-stack/nextauth.png",
      name: "NextAuth.js",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "Welcome to my Next.js-powered Spotify clone, a crafted music streaming experience that mirrors the magic of Spotify itself. With a sleek and responsive design, this app invites you to dive into a world of endless musical possibilities. Explore new musics, share your music, all while enjoying the seamless and lightning-fast performance delivered by Next.js. ",
};

export const TWITTER_PRO: Project = {
  deployment:
    "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
  repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
  features: [
    {
      desc: "Create an account with a random email address",
      pcVideo: "https://youtu.be/nPA8TZq_UlI",
      title: "Email login",
    },
    {
      desc: "Edit your user profile",
      pcVideo: "https://youtu.be/vzWAddBqTWc",
      title: "Edit user",
    },
    {
      desc: "Follow other user on twitter clone",
      pcVideo: "https://youtu.be/4EPkRwx2KRQ",
      title: "Follow user",
    },
    {
      desc: "Post your tweet on real-time fetching",
      pcVideo: "https://youtu.be/wVdxbtaMOps",
      title: "Real-time tweet",
    },
    {
      desc: "Like and comment twitter tweet",
      pcVideo: "https://youtu.be/s0sycKBvJPU",
      title: "Engage in tweets",
    },
    {
      desc: "Receive notification about followers and tweet",
      pcVideo: "https://youtu.be/JX3PkDKzS-M",
      title: "Real-time notification",
    },
  ],
  title: "Twitter Clone",
  techStack: [
    {
      image: "/tech-stack/typescript.png",
      name: "TypeScript",
    },
    {
      image: "/tech-stack/react.png",
      name: "React",
    },
    {
      image: "/tech-stack/mongo.png",
      name: "Mongo",
    },
    {
      image: "/tech-stack/nextjs.svg",
      name: "Next.js",
    },
    {
      image: "/tech-stack/nextauth.png",
      name: "NextAuth.js",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "Dive into the world of real-time conversations and trending topics with my Next.js-powered Twitter clone. With a user-friendly interface and robust features, users can explore timelines, connect with followers, and stay informed on the latest happenings—all powered by the efficiency and speed of Next.js.",
};

export const DISCORD_PRO: Project = {
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
    {
      desc: "Real-time audio meeting",
      pcVideo: "https://youtu.be/06z7W5bH35M",
      title: "Audio meeting",
    },
    {
      desc: "Real-time video meeting",
      pcVideo: "https://youtu.be/JoXgv_7kqqs",
      title: "Video meeting",
    },
  ],
  title: "Discord Clone",
  techStack: [
    {
      image: "/tech-stack/typescript.png",
      name: "TypeScript",
    },
    {
      image: "/tech-stack/react.png",
      name: "React",
    },
    {
      image: "/tech-stack/mongo.png",
      name: "Mongo",
    },
    {
      image: "/tech-stack/nextjs.svg",
      name: "Next.js",
    },
    {
      image: "/tech-stack/nextauth.png",
      name: "NextAuth.js",
    },
    {
      image: "/tech-stack/tailwind.svg",
      name: "Tailwind",
    },
  ],
  description:
    "This application seamlessly mirrors the functionalities of Discord, offering users a dynamic and responsive platform for text and voice conversations. Dive into vibrant chat channels, create and join servers, and connect with friends in a secure and visually immersive environment.",
};

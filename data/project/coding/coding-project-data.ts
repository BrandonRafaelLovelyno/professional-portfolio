import SpotifyProjectInformation from "@/components/sub-section/page/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./coding-project-feature-data";
import TwitterProjectInformation from "@/components/sub-section/page/twitter-project-information";
import DiscordProjectInformation from "@/components/sub-section/page/discord-project-information";

export interface TechStack {
  name: string;
  image: string;
  description: string;
}

export interface Project {
  name: string;
  logoImage: string;
  cardImage: string;
  backgroundImage: string;
  Heading: {
    image: {
      topRight: string;
      bottomLeft: string;
    };
    techStack: TechStack[];
  };
  Information: () => JSX.Element;
  deployment: string;
  repository: string;
  Dashboard: { features: Feature[]; textColor: string };
}

const CODING_PRO: Project[] = [
  {
    name: "Spotify Clone",
    logoImage: "/image/coding-pro/spotify-clone/information/logo.png",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      image: {
        topRight: "/image/coding-pro/spotify-clone/heading/top-right.png",
        bottomLeft: "/image/coding-pro/spotify-clone/heading/bottom-left.png",
      },
      techStack: [
        {
          name: "NextJS",
          image:
            "/image/coding-pro/spotify-clone/information/tech-stack/nextjs.svg",
          description: "full-stack framework",
        },
        {
          name: "PostgreSQL",
          image:
            "/image/coding-pro/spotify-clone/information/tech-stack/postgresql.svg",
          description: "database",
        },
        {
          name: "Supabase",
          image:
            "/image/coding-pro/spotify-clone/information/tech-stack/supabase.png",
          description: "authentication",
        },
      ],
    },
    Information: SpotifyProjectInformation,
    deployment: "https://brandon-spotify-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    Dashboard: { features: SPOTIFY_FEAT, textColor: "#1DB954" },
  },
  {
    name: "Discord Clone",
    logoImage: "/image/coding-pro/discord-clone/information/logo.png",

    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      image: {
        topRight: "/image/coding-pro/discord-clone/heading/top-right.png",
        bottomLeft: "/image/coding-pro/discord-clone/heading/bottom-left.png",
      },
      techStack: [
        {
          name: "NextJS",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/nextjs.svg",
          description: "full-stack framework",
        },
        {
          name: "Livekit",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/livekit.png",
          description: "video call cloud",
        },
        {
          name: "Prisma",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/prisma.svg",
          description: "object relational mapping",
        },
        {
          name: "MongoDB",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/mongodb.svg",
          description: "database",
        },
        {
          name: "NextAuth",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/next-auth.png",
          description: "authentication",
        },
        {
          name: "Uploadthing",
          image:
            "/image/coding-pro/discord-clone/information/tech-stack/upload-thing-react.svg",
          description: "file upload",
        },
      ],
    },
    Information: DiscordProjectInformation,
    deployment: "https://brandon-discord-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    Dashboard: { features: DISCORD_FEAT, textColor: "#7E61AB" },
  },
  {
    name: "Twitter Clone",
    logoImage: "/image/coding-pro/twitter-clone/information/logo.png",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      image: {
        topRight: "/image/coding-pro/twitter-clone/heading/top-right.png",
        bottomLeft: "/image/coding-pro/twitter-clone/heading/bottom-left.png",
      },
      techStack: [
        {
          name: "NextJS",
          image:
            "/image/coding-pro/spotify-clone/information/tech-stack/nextjs.svg",
          description: "full-stack framework",
        },
        {
          name: "MongoDB",
          image:
            "/image/coding-pro/twitter-clone/information/tech-stack/mongodb.svg",
          description: "database",
        },
        {
          name: "Prisma",
          image:
            "/image/coding-pro/twitter-clone/information/tech-stack/prisma.svg",
          description: "object relational mapping",
        },
      ],
    },
    Information: TwitterProjectInformation,
    deployment: "https://brandon-twitter-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    Dashboard: { features: TWITTER_FEAT, textColor: "#1DA1F2" },
  },
];

export default CODING_PRO;

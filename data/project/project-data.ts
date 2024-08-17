import SpotifyProjectInformation from "@/components/sub-section/page/project/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./project-feature-data";
import TwitterProjectInformation from "@/components/sub-section/page/project/twitter-project-information";
import DiscordProjectInformation from "@/components/sub-section/page/project/discord-project-information";
import {
  LIVEKIT,
  MONGODB,
  NEXTAUTH,
  NEXTJS,
  POSTGRE,
  PRISMA,
  SUPABASE,
  UPLOADTHING,
} from "../tech-stack-data";

export interface TechStack {
  name: string;
  image: string;
  description: string;
}

export interface Project {
  name: string;
  logoImage: string;
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
    logoImage: "/image/page/project/spotify-clone/information/logo.png",
    Heading: {
      image: {
        topRight: "/image/page/project/spotify-clone/heading/top-right.png",
        bottomLeft: "/image/page/project/spotify-clone/heading/bottom-left.png",
      },
      techStack: [NEXTJS, POSTGRE, SUPABASE],
    },
    Information: SpotifyProjectInformation,
    deployment: "https://brandon-spotify-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    Dashboard: { features: SPOTIFY_FEAT, textColor: "#1DB954" },
  },
  {
    name: "Discord Clone",
    logoImage: "/image/page/project/discord-clone/information/logo.png",
    Heading: {
      image: {
        topRight: "/image/page/project/discord-clone/heading/top-right.png",
        bottomLeft: "/image/page/project/discord-clone/heading/bottom-left.png",
      },
      techStack: [NEXTJS, LIVEKIT, PRISMA, MONGODB, NEXTAUTH, UPLOADTHING],
    },
    Information: DiscordProjectInformation,
    deployment: "https://brandon-discord-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    Dashboard: { features: DISCORD_FEAT, textColor: "#7E61AB" },
  },
  {
    name: "Twitter Clone",
    logoImage: "/image/page/project/twitter-clone/information/logo.png",
    Heading: {
      image: {
        topRight: "/image/page/project/twitter-clone/heading/top-right.png",
        bottomLeft: "/image/page/project/twitter-clone/heading/bottom-left.png",
      },
      techStack: [NEXTJS, MONGODB, PRISMA, NEXTAUTH],
    },
    Information: TwitterProjectInformation,
    deployment: "https://brandon-twitter-clone.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    Dashboard: { features: TWITTER_FEAT, textColor: "#1DA1F2" },
  },
];

export default CODING_PRO;

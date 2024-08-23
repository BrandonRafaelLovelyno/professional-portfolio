import SpotifyProjectInformation from "@/components/sub-section/page/project/information/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./project-feature-data";
import TwitterProjectInformation from "@/components/sub-section/page/project/information/twitter-project-information";
import DiscordProjectInformation from "@/components/sub-section/page/project/information/discord-project-information";
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
  image: {
    logo: string;
    background: string;
    Heading: {
      topRight: string;
      bottomLeft: string;
    };
  };
  link: {
    deployment: string;
    repository: string;
  };
  techStack: TechStack[];
  Component: {
    Information: () => JSX.Element;
    Dashboard: { features: Feature[]; textColor: string };
  };
}

const CODING_PRO: Project[] = [
  {
    name: "Spotify Clone",
    image: {
      logo: "/image/page/project/experience/spotify-clone/information/logo.png",
      background: "/image/page/project/experience/spotify-clone/background.jpg",
      Heading: {
        topRight:
          "/image/page/project/experience/spotify-clone/heading/top-right.png",
        bottomLeft:
          "/image/page/project/experience/spotify-clone/heading/bottom-left.png",
      },
    },
    techStack: [NEXTJS, POSTGRE, SUPABASE],
    Component: {
      Information: SpotifyProjectInformation,
      Dashboard: { features: SPOTIFY_FEAT, textColor: "#1DB954" },
    },
    link: {
      deployment: "https://brandon-spotify-clone.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    },
  },
  {
    name: "Discord Clone",
    image: {
      logo: "/image/page/project/experience/discord-clone/information/logo.png",
      background: "/image/page/project/experience/discord-clone/background.jpg",
      Heading: {
        topRight:
          "/image/page/project/experience/discord-clone/heading/top-right.png",
        bottomLeft:
          "/image/page/project/experience/discord-clone/heading/bottom-left.png",
      },
    },
    techStack: [NEXTJS, LIVEKIT, PRISMA, MONGODB, NEXTAUTH, UPLOADTHING],
    Component: {
      Information: DiscordProjectInformation,
      Dashboard: { features: DISCORD_FEAT, textColor: "#7E61AB" },
    },
    link: {
      deployment: "https://brandon-discord-clone.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    },
  },
  {
    name: "Twitter Clone",
    image: {
      logo: "/image/page/project/twitter-clone/information/logo.png",
      background: "/image/page/project/twitter-clone/background.jpg",
      Heading: {
        topRight: "/image/page/project/twitter-clone/heading/top-right.png",
        bottomLeft: "/image/page/project/twitter-clone/heading/bottom-left.png",
      },
    },
    techStack: [NEXTJS, MONGODB, PRISMA, NEXTAUTH],
    Component: {
      Information: TwitterProjectInformation,
      Dashboard: { features: TWITTER_FEAT, textColor: "#1DA1F2" },
    },
    link: {
      deployment: "https://brandon-twitter-clone.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    },
  },
];

export default CODING_PRO;

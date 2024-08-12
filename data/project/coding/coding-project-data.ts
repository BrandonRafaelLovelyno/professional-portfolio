import SpotifyProjectInformation from "@/components/sub-section/project-page/information/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./coding-project-feature-data";
import TwitterProjectInformation from "@/components/sub-section/project-page/information/twitter-project-information";

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
    deployment:
      "https://spotify-clone-g28on8ooz-brandon-rafael-lovelynos-projects.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    Dashboard: { features: SPOTIFY_FEAT, textColor: "text-green-500" },
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
            "/image/coding-pro/spotify-clone/information/tech-stack/nextjs.svg",
          description: "full-stack framework",
        },
      ],
    },
    Information: SpotifyProjectInformation,
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    Dashboard: { features: DISCORD_FEAT, textColor: "text-purple-500" },
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
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    Dashboard: { features: TWITTER_FEAT, textColor: "text-blue-500" },
  },
];

export default CODING_PRO;

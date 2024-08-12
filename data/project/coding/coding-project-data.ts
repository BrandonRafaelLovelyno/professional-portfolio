import SpotifyProjectInformation from "@/components/sub-section/project-page/information/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./coding-project-feature-data";

export interface TechStack {
  name: string;
  image: string;
  description: string;
}

export interface Project {
  name: string;
  cardImage: string;
  backgroundImage: string;
  heading: {
    image: {
      topRight: string;
      bottomLeft: string;
    };
    techStack: TechStack[];
  };
  Information: () => JSX.Element;
  deployment: string;
  repository: string;
  feature: Feature[];
}

const CODING_PRO: Project[] = [
  {
    name: "Spotify Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
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
    feature: SPOTIFY_FEAT,
  },
  {
    name: "Discord Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
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
      ],
    },
    Information: SpotifyProjectInformation,
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    feature: DISCORD_FEAT,
  },
  {
    name: "Twitter Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
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
      ],
    },
    Information: SpotifyProjectInformation,
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    feature: TWITTER_FEAT,
  },
];

export default CODING_PRO;

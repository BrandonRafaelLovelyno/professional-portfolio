import SPOTIFY_PROJECT_INFORMATION from "@/components/sub-section/project-page/information/spotify-project-information";
import { Event } from "../experience/org-exp/org-exp-data";

export interface Project {
  name: string;
  cardImage: string;
  backgroundImage: string;
  heading: {
    icon: {
      topRight: string;
      bottomLeft: string;
    };
    Information: React.ReactNode[];
  };
  Dashboard: React.ReactNode[];
  deployment: string;
  repository: string;
}

const CODING_PRO: Project[] = [
  {
    name: "Spotify Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
      icon: {
        topRight: "/image/temp-card-image.jpg",
        bottomLeft: "/image/temp-card-image.jpg",
      },
      Information: SPOTIFY_PROJECT_INFORMATION,
    },
    deployment:
      "https://spotify-clone-g28on8ooz-brandon-rafael-lovelynos-projects.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    Dashboard: SPOTIFY_PROJECT_INFORMATION,
  },
  {
    name: "Discord Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
      icon: {
        topRight: "/image/temp-card-image.jpg",
        bottomLeft: "/image/temp-card-image.jpg",
      },
      Information: SPOTIFY_PROJECT_INFORMATION,
    },
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    Dashboard: SPOTIFY_PROJECT_INFORMATION,
  },
  {
    name: "Twitter Clone",
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    heading: {
      icon: {
        topRight: "/image/temp-card-image.jpg",
        bottomLeft: "/image/temp-card-image.jpg",
      },
      Information: SPOTIFY_PROJECT_INFORMATION,
    },
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    Dashboard: SPOTIFY_PROJECT_INFORMATION,
  },
];

export default CODING_PRO;

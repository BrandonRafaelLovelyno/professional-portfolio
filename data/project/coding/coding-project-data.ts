import SPOTIFY_PROJECT_DASHBOARD from "@/components/sub-section/project-page/dashboard/spotify-project-dashboard";
import SpotifyProjectInformation from "@/components/sub-section/project-page/information/spotify-project-information";

export interface Project {
  name: string;
  cardImage: string;
  backgroundImage: string;
  heading: {
    image: {
      topRight: string;
      bottomLeft: string;
    };
    Information: () => React.JSX.Element;
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
      image: {
        topRight: "/image/coding-pro/spotify-clone/heading/top-right.png",
        bottomLeft: "/image/coding-pro/spotify-clone/heading/bottom-left.png",
      },
      Information: SpotifyProjectInformation,
    },
    deployment:
      "https://spotify-clone-g28on8ooz-brandon-rafael-lovelynos-projects.vercel.app",
    repository: "https://github.com/BrandonRafaelLovelyno/spotify_clone",
    Dashboard: SPOTIFY_PROJECT_DASHBOARD,
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
      Information: SpotifyProjectInformation,
    },
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/discord_clone",
    Dashboard: SPOTIFY_PROJECT_DASHBOARD,
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
      Information: SpotifyProjectInformation,
    },
    deployment:
      "https://twitter-clone-pv09fjmlo-brandon-rafael-lovelynos-projects.vercel.app/",
    repository: "https://github.com/BrandonRafaelLovelyno/twitter-clone",
    Dashboard: SPOTIFY_PROJECT_DASHBOARD,
  },
];

export default CODING_PRO;

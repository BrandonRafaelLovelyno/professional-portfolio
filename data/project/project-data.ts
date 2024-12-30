import SpotifyProjectInformation from "@/components/sub-section/page/project/information/spotify-project-information";
import {
  DISCORD_FEAT,
  Feature,
  OUTFITAI_FEAT,
  SPOTIFY_FEAT,
  TWITTER_FEAT,
} from "./project-feature-data";
import TwitterProjectInformation from "@/components/sub-section/page/project/information/twitter-project-information";
import DiscordProjectInformation from "@/components/sub-section/page/project/information/discord-project-information";
import {
  DOCKER,
  FRAMER_MOTION,
  LIVEKIT,
  MONGODB,
  NEXTAUTH,
  NEXTJS,
  POSTGRE,
  PRISMA,
  PYTORCH,
  SUPABASE,
  UPLOADTHING,
} from "../tech-stack-data";
import OutfitAIProjectInformation from "@/components/sub-section/page/project/information/outfitai-project-information";

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
      logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934236/image/page/project/experience/spotify-clone/information/bbtnyztihwlzfb4ruzqw.png",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1724934235/image/page/project/experience/spotify-clone/bbsgm6bi5kx8iz1uivkh.jpg",
      Heading: {
        topRight:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934235/image/page/project/experience/spotify-clone/heading/tlhtcsqkxp3j8jybgrmn.png",
        bottomLeft:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934235/image/page/project/experience/spotify-clone/heading/jmturzkpya8r2otzxj7v.png",
      },
    },
    techStack: [NEXTJS, POSTGRE, SUPABASE],
    Component: {
      Information: SpotifyProjectInformation,
      Dashboard: { features: SPOTIFY_FEAT, textColor: "#1DB954" },
    },
    link: {
      deployment: "https://brandon-spotify-clone.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/spotify-clone",
    },
  },
  {
    name: "Discord Clone",
    image: {
      logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934235/image/page/project/experience/discord-clone/information/pv68kvltbyjexrxva9ka.png",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1724934234/image/page/project/experience/discord-clone/ulnw8spno2wvhedn6of4.jpg",
      Heading: {
        topRight:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934234/image/page/project/experience/discord-clone/heading/kjau4rimnae3tpw2mtjj.png",
        bottomLeft:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934234/image/page/project/experience/discord-clone/heading/ikkg6q3xvskkkamrvsrr.png",
      },
    },
    techStack: [NEXTJS, LIVEKIT, PRISMA, MONGODB, NEXTAUTH, UPLOADTHING],
    Component: {
      Information: DiscordProjectInformation,
      Dashboard: { features: DISCORD_FEAT, textColor: "#7E61AB" },
    },
    link: {
      deployment: "https://brandon-discord-clone.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/discord-clone",
    },
  },
  {
    name: "Twitter Clone",
    image: {
      logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1724934237/image/page/project/experience/twitter-clone/information/sckndnjhc3yuio9k3ylv.png",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1724934236/image/page/project/experience/twitter-clone/vp3rrmnufpyhno65iqha.jpg",
      Heading: {
        topRight:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934236/image/page/project/experience/twitter-clone/heading/micu9not6r8xfrbkwwjj.png",
        bottomLeft:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1724934236/image/page/project/experience/twitter-clone/heading/tke2mqfpphnkkcpacaon.png",
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
  {
    name: "Outfit.AI",
    image: {
      logo: "https://res.cloudinary.com/dohewcyes/image/upload/v1735539986/image/page/project/experience/outfitai/information/uawb219uqghcwaoyaqxk.png",
      background:
        "https://res.cloudinary.com/dohewcyes/image/upload/v1735538534/image/page/project/experience/outfitai/vmcpbgcz3ijbvua43g0l.png",
      Heading: {
        topRight:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1735568633/image/page/project/experience/outfitai/heading/v4m5uljgoqtewelhlegm.svg",
        bottomLeft:
          "https://res.cloudinary.com/dohewcyes/image/upload/v1735537924/image/page/project/experience/outfitai/heading/qbykyfjznbazruxebehh.svg",
      },
    },
    techStack: [PYTORCH, DOCKER, FRAMER_MOTION, NEXTJS],
    Component: {
      Information: OutfitAIProjectInformation,
      Dashboard: { features: OUTFITAI_FEAT, textColor: "#1DA1F2" },
    },
    link: {
      deployment: "https://brandon-outfit-ai.vercel.app",
      repository: "https://github.com/BrandonRafaelLovelyno/outfit-ai-docker",
    },
  }
];

export default CODING_PRO;

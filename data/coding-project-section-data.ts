import { Event, Experience } from "./org-exp-section-data";

const MUSIC_APP: Event[] = [
  {
    date: "",
    img: "/coding project/spotify.jpg",
    name: "Spotify Clone",
    position: "",
    link: "/coding-pro/spotify-clone",
  },
];

const CHAT_APP: Event[] = [
  {
    date: "",
    img: "/coding project/discord.jpg",
    name: "Discord Clone",
    position: "",
    link: "/coding-pro/discord-clone",
  },
];

const SOCIAL_APP: Event[] = [
  {
    date: "",
    img: "/coding project/twitter.png",
    name: "Twitter Clone",
    position: "",
    link: "/coding-pro/twitter-clone",
  },
];

const CODING_PRO: Experience[] = [
  { events: MUSIC_APP, position: "Music App" },
  { events: CHAT_APP, position: "Chat App" },
  { events: SOCIAL_APP, position: "Social App" },
];

export default CODING_PRO;

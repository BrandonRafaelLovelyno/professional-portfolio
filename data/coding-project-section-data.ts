import { Event, Experience } from "./org-exp-section-data";

const MUSIC_APP: Event[] = [
  {
    video: "/video/spotify.mp4",
    eventName: "Spotify Clone",
    position: "",
    eventDesc: "",
  },
];

const CHAT_APP: Event[] = [
  {
    video: "/video/discord.mp4",
    eventName: "Discord Clone",
    position: "",
    eventDesc: "",
  },
];

const SOCIAL_APP: Event[] = [
  {
    video: "/video/twitter.mp4",
    eventName: "Twitter Clone",
    position: "",
    eventDesc: "",
  },
];

const CODING_PRO: Experience[] = [
  { events: MUSIC_APP, position: "Music App" },
  { events: CHAT_APP, position: "Chat App" },
  { events: SOCIAL_APP, position: "Social App" },
];

export default CODING_PRO;

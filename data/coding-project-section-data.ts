import { Event, Experience } from "./org-exp-section-data";

const MUSIC_APP: Event[] = [
  {
    data: {
      date: "",
      video: "/video/spotify.mp4",
      eventName: "Spotify Clone",
      position: "",
      link: "/coding-pro/spotify-clone",
    },
    gridHeigth: 2,
  },
];

const CHAT_APP: Event[] = [
  {
    data: {
      date: "",
      video: "/video/discord.mp4",
      eventName: "Discord Clone",
      position: "",
      link: "/coding-pro/discord-clone",
    },
    gridHeigth: 3,
  },
];

const SOCIAL_APP: Event[] = [
  {
    data: {
      date: "",
      video: "/video/twitter.mp4",
      eventName: "Twitter Clone",
      position: "",
      link: "/coding-pro/twitter-clone",
    },
    gridHeigth: 3,
  },
];

const CODING_PRO: Experience[] = [
  { events: MUSIC_APP, position: "Music App" },
  { events: CHAT_APP, position: "Chat App" },
  { events: SOCIAL_APP, position: "Social App" },
];

export default CODING_PRO;

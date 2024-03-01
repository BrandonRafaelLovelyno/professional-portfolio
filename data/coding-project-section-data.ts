import { Event, Experience } from "./org-exp-section-data";

const MUSIC_APP: Event[] = [
  {
    date: "",
    video: "https://youtu.be/jYo6yAQ8mvU?si=BAioex32g43J33k-",
    name: "Spotify Clone",
    position: "",
    link: "/coding-pro/spotify-clone",
  },
];

const CHAT_APP: Event[] = [
  {
    date: "",
    video: "https://youtu.be/on5_h2MxR6M?si=Tl8DRAJQtyjMGCo7",
    name: "Discord Clone",
    position: "",
    link: "/coding-pro/discord-clone",
  },
];

const SOCIAL_APP: Event[] = [
  {
    date: "",
    video: "https://youtu.be/-kfZH9zbFqw?si=SdLZY7OT170Gg647",
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

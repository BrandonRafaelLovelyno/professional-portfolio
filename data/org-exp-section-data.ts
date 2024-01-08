export interface Event {
  img: string;
  name: string;
  date: string;
  position: string;
  link?: string;
  eventDesc?: string;
  eventRole?: string[];
}

export interface Experience {
  position: string;
  events: Event[];
}

const LIAISON_EV: Event[] = [
  {
    date: "January 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Staff",
    name: "Lustrum DTETI 2023",
  },
  {
    date: "February 2023 - June 2023",
    img: "https://plus.unsplash.com/premium_photo-1669749352287-3a7e249059cb?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Staff",
    name: "Find IT! UGM 2023",
  },
];

const PUBLICRELATION_EV: Event[] = [
  {
    date: "February 2023 - November 2023",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Coordinator",
    name: "Social Project TSA UGM 2023",
  },
  {
    date: "November 2022 - November 2023",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Coordinator",
    name: "Panitia Wisuda DTETI UGM 2023",
  },
];

const UNITYINITIATIVE_EV: Event[] = [
  {
    date: "December 2023 - Present",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Manager",
    name: "Tanoto Scholars Association UGM",
  },
  {
    date: "February 2023 - December 2023",
    img: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Staff",
    name: "Tanoto Scholars Association UGM",
  },
];

const ORG_EXP: Experience[] = [
  {
    position: "Liaison Officer",
    events: LIAISON_EV,
  },
  {
    position: "Public Relation",
    events: PUBLICRELATION_EV,
  },
  {
    position: "Unity Initiative",
    events: UNITYINITIATIVE_EV,
  },
];

export default ORG_EXP;

import VIDEO_PRODUCTION_DASHBOARD from "@/components/sub-section/page/page/video-production-dashboard";

export interface Event {
  img?: string;
  video?: string;
  eventName: string;
  position: string;
  eventDesc: string;
}

export interface Experience {
  position: string;
  cardImage: string;
  backgroundImage: string;
  events: Event[];
  Heading: {
    title: string;
    imageUrl: string;
  };
  Dashboard: React.ReactNode[];
}

const EXTERNAL_NETWORKING_EV: Event[] = [
  {
    video: "https://youtu.be/d62miS1gurc?si=L4aUDV8Lv3RUq3o9",
    position: "Coordinator",
    eventName: "Panitia Wisuda DTETI UGM 2023",
    eventDesc:
      "Panitia Wisuda is an event organized by DTETI UGM, specifically dedicated to the graduation ceremony of students from the Faculty of Engineering at Gadjah Mada University.",
  },
  {
    img: "/image/organizational experience/public relation/sospro.jpg",
    position: "Coordinator",
    eventName: "Social Project TSA UGM 2023",
    eventDesc:
      "The Social Project is an event organized by TSA UGM 2023, with a primary focus on Sustainable Development Goals (SDGs). This initiative aims to address and contribute to the achievement of specific SDGs, fostering positive impacts within the community.",
  },
  {
    video: "https://www.youtube.com/live/RoCH_oP6BfM?si=mcNpL9Q51wZnzMbk",
    position: "Staff",
    eventName: "Lustrum DTETI 2023",
    eventDesc:
      "LUSTRUM DTETI 2023 is a lustrum celebration for DTETI FT UGM. This milestone occasion brings together students, faculty, alumni, and distinguished guests to reflect on half a decade of academic excellence, growth, and community building",
  },
  {
    video: "https://youtu.be/wWH6ADsUjDs?si=XYrN7IlauU6scLJH",
    position: "Staff",
    eventName: "Find IT! UGM 2023",
    eventDesc:
      "Future Innovations and Discovery IT is a national competition in the field of Information Technology. Its aim is to enhance public interest and exposure to IT through education and innovation.",
  },
];

const INTERNAL_NETWORKING_EV: Event[] = [
  {
    img: "/image/organizational experience/unity initiative/manager.jpg",
    position: "Manager",
    eventName: "Tanoto Scholars Association UGM",
    eventDesc:
      "The Unity Initiative is a division within TSA UGM that centers its efforts on fostering solidarity and a sense of kinship among Tanoto Scholars. This initiative is dedicated to creating a supportive community where scholars can connect, share experiences, and build strong bonds with one another.",
  },
  {
    img: "/image/organizational experience/unity initiative/staff.jpg",
    position: "Staff",
    eventName: "Tanoto Scholars Association UGM",
    eventDesc:
      "The Unity Initiative is a division within TSA UGM that centers its efforts on fostering solidarity and a sense of kinship among Tanoto Scholars. This initiative is dedicated to creating a supportive community where scholars can connect, share experiences, and build strong bonds with one another.",
  },
];

const ORG_EXP_DATA: Experience[] = [
  {
    position: "External Networking",
    events: EXTERNAL_NETWORKING_EV,
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      title: "I take video for education",
      imageUrl: "/image/work-exp/video-production/Heading.png",
    },
    Dashboard: VIDEO_PRODUCTION_DASHBOARD,
  },
  {
    position: "Internal Networking",
    events: INTERNAL_NETWORKING_EV,
    cardImage: "/image/temp-card-image.jpg",
    backgroundImage: "/image/temp-back-image.jpg",
    Heading: {
      title: "I take video for education",
      imageUrl: "/image/work-exp/video-production/Heading.png",
    },
    Dashboard: VIDEO_PRODUCTION_DASHBOARD,
  },
];

export default ORG_EXP_DATA;

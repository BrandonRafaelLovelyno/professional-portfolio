import { Team } from "./client-exp-section-data";

export interface Event {
  data: {
    img?: string;
    video?: string;
    eventName: string;
    date: string;
    position: string;
    link?: string;
    eventDesc?: string;
    eventRole?: string[];
    team?: Team;
  };
  gridHeigth: number;
}

export interface Experience {
  position: string;
  events: Event[];
}

const LIAISON_EV: Event[] = [
  {
    data: {
      date: "January 2023 - Present",
      video: "https://www.youtube.com/live/RoCH_oP6BfM?si=mcNpL9Q51wZnzMbk",
      position: "Staff",
      eventName: "Lustrum DTETI 2023",
      eventDesc:
        "LUSTRUM DTETI 2023 is a lustrum celebration for DTETI FT UGM. This milestone occasion brings together students, faculty, alumni, and distinguished guests to reflect on half a decade of academic excellence, growth, and community building",
      eventRole: [
        "Act as a liaison between college lecturers and external individuals, including competition participants.",
        "Coordinate interactions and information exchange between the college and external participants.     ",
        "Act as a master ceremony of Data Science competition final",
      ],
    },
    gridHeigth: 2,
  },
  {
    data: {
      date: "February 2023 - June 2023",
      video: "https://youtu.be/wWH6ADsUjDs?si=XYrN7IlauU6scLJH",
      position: "Staff",
      eventName: "Find IT! UGM 2023",
      eventDesc:
        "Future Innovations and Discovery IT is a national competition in the field of Information Technology. Its aim is to enhance public interest and exposure to IT through education and innovation.",
      eventRole: [
        "Act as a liaison between college lecturers and external individuals, including competition participants.",
        "Ensure a seamless experience for competition participants through proactive communication and support",
      ],
    },
    gridHeigth: 2,
  },
];

const PUBLICRELATION_EV: Event[] = [
  {
    data: {
      date: "November 2022 - November 2023",
      video: "https://youtu.be/d62miS1gurc?si=L4aUDV8Lv3RUq3o9",
      position: "Coordinator",
      eventName: "Panitia Wisuda DTETI UGM 2023",
      eventDesc:
        "Panitia Wisuda is an event organized by DTETI UGM, specifically dedicated to the graduation ceremony of students from the Faculty of Engineering at Gadjah Mada University.",
      eventRole: [
        "Led the Public Relations division for the DTETI UGM 2023 Graduation Event",
        "Ensured engaging and informative communication for graduates.",
        "Collaborated with team members to coordinate and execute public relations plans, such as graduates invitation and reminder",
      ],
    },
    gridHeigth: 3,
  },
  {
    data: {
      date: "February 2023 - November 2023",
      img: "/image/organizational experience/public relation/sospro.jpg",
      position: "Coordinator",
      eventName: "Social Project TSA UGM 2023",
      eventDesc:
        "The Social Project is an event organized by TSA UGM 2023, with a primary focus on Sustainable Development Goals (SDGs). This initiative aims to address and contribute to the achievement of specific SDGs, fostering positive impacts within the community.",
      eventRole: [
        "Lead the Public Relations division for the Social Project at TSA UGM 2023",
        "Collaborate with team members to ensure coordinated and consistent messaging.",
        "Engage in effective communication with external collaborators.    ",
      ],
    },
    gridHeigth: 3,
  },
];

const UNITYINITIATIVE_EV: Event[] = [
  {
    data: {
      date: "December 2023 - Present",
      img: "/image/organizational experience/unity initiative/manager.jpg",
      position: "Manager",
      eventName: "Tanoto Scholars Association UGM",
      eventDesc:
        "The Unity Initiative is a division within TSA UGM that centers its efforts on fostering solidarity and a sense of kinship among Tanoto Scholars. This initiative is dedicated to creating a supportive community where scholars can connect, share experiences, and build strong bonds with one another.",
      eventRole: [
        "Coordinate engaging events and initiatives designed to strengthen interpersonal relationships among scholars.",
        "Collaborate with other divisions and departments to create synergies and maximize the impact of joint initiatives.",
        "Conduct engaging events to foster solidarity among scholars, creating memorable experiences and meaningful connections",
      ],
    },
    gridHeigth: 3,
  },
  {
    data: {
      date: "February 2023 - December 2023",
      img: "/image/organizational experience/unity initiative/staff.jpg",
      position: "Staff",
      eventName: "Tanoto Scholars Association UGM",
      eventDesc:
        "The Unity Initiative is a division within TSA UGM that centers its efforts on fostering solidarity and a sense of kinship among Tanoto Scholars. This initiative is dedicated to creating a supportive community where scholars can connect, share experiences, and build strong bonds with one another.",
      eventRole: [
        "Main responsibility is to enhance solidarity and camaraderie among scholars.Explore intriguing and informative subjects.",
        "Coordinates activities aimed at fostering a sense of togetherness.",
      ],
    },
    gridHeigth: 3,
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

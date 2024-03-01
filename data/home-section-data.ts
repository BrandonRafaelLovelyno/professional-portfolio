interface Section {
  firstWord: string;
  secondWord: string;
  position: string[];
  firstIcon: string;
  secondIcon: string;
  thirdIcon: string;
  fourthIcon: string;
  description: string;
  link: string;
}

export const HEROTITLE: string[] = [""];

export const HOMESECTIONDATA: Section[] = [
  {
    firstWord: "Work",
    secondWord: "Experience",
    firstIcon: "/work experience/parallax/briefcase.png",
    secondIcon: "/work experience/parallax/chair.png",
    thirdIcon: "/work experience/parallax/employee.png",
    fourthIcon: "/work experience/parallax/time.png",
    description:
      "As a freelancer, I have provided exceptional customer support, manage online retail operations efficiently, and deliver engaging performances on camera.",
    position: [
      "Customer Service",
      "E-commerce Admin",
      "Video actor",
      "Video Editor",
    ],
    link: "/work-exp",
  },
  {
    description:
      "As an undergraduate , I've played roles in Public Relation, Unity Initiative and Liaison Officer, showcasing adept communication and relationship-building skills.",
    firstWord: "Organization",
    secondWord: "Experience",
    position: ["Public Relation", "Unity Initiatiive", "Liaison Officer"],
    firstIcon: "/organizational experience/parallax/collaboration.png",
    secondIcon: "/organizational experience/parallax/hierarchy.png",
    thirdIcon: "/organizational experience/parallax/team.png",
    fourthIcon: "/organizational experience/parallax/organization.png",
    link: "/org-exp",
  },
  {
    description:
      "This collection serves as a testament to my effort in positioning myself to venture into the realm of website freelancing with confidence and expertise",
    firstWord: "Client",
    secondWord: "Experience",
    position: ["Ez Parenting"],
    link: "/client-exp",
    firstIcon: "/coding experience/parallax/code.png",
    secondIcon: "/coding experience/parallax/api.png",
    thirdIcon: "/coding experience/parallax/database.png",
    fourthIcon: "/coding experience/parallax/developer.png",
  },
  {
    description:
      "I've contributed in building websites for a number of events. These experiences reflect my ability and dedication to build a website as a team",
    firstWord: "Coding",
    secondWord: "Event",
    position: ["Find IT! UGM", "NESCO UGM", "KPU FT UGM"],
    link: "/coding-ev",
    firstIcon: "/coding experience/parallax/code.png",
    secondIcon: "/coding experience/parallax/api.png",
    thirdIcon: "/coding experience/parallax/database.png",
    fourthIcon: "/coding experience/parallax/developer.png",
  },

  {
    description:
      "I've undertaken ambitious coding projects in becoming a full-stack developer. These projects reflect my dedication to mastering diverse aspects of web development",
    firstWord: "Coding",
    secondWord: "Project",
    position: ["Discord", "Spotify", "Twitter", "more"],
    firstIcon: "/coding project/parallax/twitter.png",
    secondIcon: "/coding project/parallax/discord.png",
    thirdIcon: "/coding project/parallax/project.png",
    fourthIcon: "/coding project/parallax/spotify.png",
    link: "/coding-pro",
  },
  {
    description:
      "These accolades collectively emphasize my commitment to excellence, showcasing a versatile skill set that spans both technical and language domains.",
    firstWord: "Certificate",
    secondWord: "& Awards",
    position: ["Tanoto Scholars", "Web Programming", "TOIEC English Test"],
    firstIcon: "/awards/parallax/trophy.png",
    secondIcon: "/awards/parallax/medal.png",
    thirdIcon: "/awards/parallax/achievement.png",
    fourthIcon: "/awards/parallax/winner.png",
    link: "/certif",
  },
];

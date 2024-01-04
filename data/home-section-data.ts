interface Section {
  firstWord: string;
  secondWord: string;
  position: string[];
  firstIcon: string;
  secondIcon: string;
  thirdIcon: string;
  fourthIcon: string;
  description: string;
}

const homeSectionData: Section[] = [
  {
    firstWord: "Work",
    secondWord: "Experience",
    firstIcon: "/work experience/parallax/briefcase.png",
    secondIcon: "/work experience/parallax/chair.png",
    thirdIcon: "/work experience/parallax/employee.png",
    fourthIcon: "/work experience/parallax/time.png",
    description:
      "Experienced in customer service, e-commerce administration, and video acting. Have provided exceptional customer support, manage online retail operations efficiently, and deliver engaging performances on camera. A versatile professional with a blend of interpersonal, organizational in dynamic work environments.",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],
  },
  {
    description:
      "As an undergraduate , I've played roles in Public Relation, Unity Initiative and Liaison Officer, showcasing adept communication and relationship-building skills. Actively contributing to fostering unity, I exhibit adaptability, teamwork, and a commitment to community connections.",
    firstWord: "Organization",
    secondWord: "Experience",
    position: ["Public Relation", "Unity Initiatiive", "Liaison Officer"],
    firstIcon: "/organizational experience/parallax/collaboration.png",
    secondIcon: "/organizational experience/parallax/hierarchy.png",
    thirdIcon: "/organizational experience/parallax/team.png",
    fourthIcon: "/organizational experience/parallax/organization.png",
  },
  {
    description:
      "As a volunteer full-stack developer for college events like Find IT! UGM, Nesco UGM, and KPU FT UGM, I've played a key role in crafting websites. Proficient in both front and back-end, I've contributed technical expertise to enhance user experiences. My involvement underscores a commitment to leveraging coding skills for effective event promotion and execution.",
    firstWord: "Coding",
    secondWord: "Event",
    position: ["Find IT! UGM", "NESCO UGM", "KPU FT UGM"],

    firstIcon: "/coding experience/parallax/code.png",
    secondIcon: "/coding experience/parallax/api.png",
    thirdIcon: "/coding experience/parallax/database.png",
    fourthIcon: "/coding experience/parallax/developer.png",
  },
  {
    description:
      "Embarking on the journey of becoming a full-stack web developer, I've undertaken ambitious coding projects. Notably, I've successfully created clones of popular platforms like Spotify, Twitter, Threads, and Discord. These projects reflect my dedication to mastering diverse aspects of web development, showcasing proficiency in both front and back-end technologies.",
    firstWord: "Coding",
    secondWord: "Project",
    position: ["Discord", "Spotify", "Twitter", "more"],
    firstIcon: "/coding project/parallax/twitter.png",
    secondIcon: "/coding project/parallax/discord.png",
    thirdIcon: "/coding project/parallax/project.png",
    fourthIcon: "/coding project/parallax/spotify.png",
  },
  {
    description:
      "Honored as a Tanoto Foundation Scholarship awardee, I've distinguished myself in web programming, clinching the top spot in my department's competition. Complementing my technical achievements is a noteworthy 920 TOEIC score, highlighting linguistic proficiency. These accolades collectively emphasize my commitment to excellence, showcasing a versatile skill set that spans both technical and language domains.",
    firstWord: "Certificate",
    secondWord: "& Awards",
    position: ["Tanoto Scholars", "Web Programming", "TOIEC English Test"],
    firstIcon: "/awards/parallax/trophy.png",
    secondIcon: "/awards/parallax/medal.png",
    thirdIcon: "/awards/parallax/achievement.png",
    fourthIcon: "/awards/parallax/winner.png",
  },
];

export default homeSectionData;

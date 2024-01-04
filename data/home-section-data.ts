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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    firstWord: "Organization",
    secondWord: "Experience",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],
    firstIcon: "/organizational experience/parallax/collaboration.png",
    secondIcon: "/organizational experience/parallax/hierarchy.png",
    thirdIcon: "/organizational experience/parallax/team.png",
    fourthIcon: "/organizational experience/parallax/organization.png",
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    firstWord: "Coding",
    secondWord: "Event",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],

    firstIcon: "/coding experience/parallax/code.png",
    secondIcon: "/coding experience/parallax/api.png",
    thirdIcon: "/coding experience/parallax/database.png",
    fourthIcon: "/coding experience/parallax/developer.png",
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    firstWord: "Coding",
    secondWord: "Project",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],
    firstIcon: "/coding project/parallax/twitter.png",
    secondIcon: "/coding project/parallax/discord.png",
    thirdIcon: "/coding project/parallax/project.png",
    fourthIcon: "/coding project/parallax/spotify.png",
  },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    firstWord: "Certificate",
    secondWord: "& Awards",
    position: ["Customer Service", "E-commerce Admin", "Video actor"],
    firstIcon: "/awards/parallax/trophy.png",
    secondIcon: "/awards/parallax/medal.png",
    thirdIcon: "/awards/parallax/achievement.png",
    fourthIcon: "/awards/parallax/winner.png",
  },
];

export default homeSectionData;

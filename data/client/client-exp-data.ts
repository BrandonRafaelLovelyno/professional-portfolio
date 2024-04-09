export interface Client {
  video: string;
  link: string;
  clientName: string;
  clientDesc: string;
  position: string;
  team: Team;
}

export interface Team {
  person: Person[];
}

export interface Person {
  name: string;
  position: string;
  img?: string;
}

export const EZPARENTING: Client = {
  video: "https://youtu.be/qjHpBDUEa1o",
  link: "https://google.com",
  clientName: "EZ Parenting",
  position: "Full-stack developer",
  clientDesc:
    "My team and I have handled a project for EZ Parenting Indonesia. In our project, we have crafted a fully-functional Content Management System. We hope, in our collaboration with EZ Parenting, that parents would find parenting easier with the relevant website",

  team: {
    person: [
      {
        name: "Muhammad Dzaki Hilmi Wismadi",
        position: "Delegator",
        img: "/image/client experience/ez parenting/team/hilmi.jpg",
      },
      {
        name: "Yitzhak Edmund Tio Manalu",
        position: "Project Manager",
        img: "/image/client experience/ez parenting/team/yitzhak.jpg",
      },
      {
        name: "Benaya Imanuela",
        position: "Front End Developer",
        img: "/image/client experience/ez parenting/team/benaya.jpg",
      },
      {
        name: "Brandon Rafael Lovelyno",
        position: "Full-stack Developer",
      },
    ],
  },
};

export const CLIENT_EXP: Client[] = [EZPARENTING];

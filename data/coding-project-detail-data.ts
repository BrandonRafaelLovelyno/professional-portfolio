export interface Feature {
  title: string;
  desc: string;
  pcVideo: string;
  phoneVideo: string;
}

export interface TechStack {
  name: string;
  image: string;
}

export interface Project {
  deployment: string;
  features: Feature[];
  title: string;
  techStack: TechStack[];
  description: string;
}

const SPOTIFY_PRO: Project = {
  deployment: "",
  features: [
    {
      desc: "Add song locally from your computer or phone",
      pcVideo: "",
      phoneVideo: "",
      title: "Add song",
    },
  ],
  title: "Spotify Clone",
  techStack: [
    {
      image: "",
      name: "TypeScript",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};

export default SPOTIFY_PRO;

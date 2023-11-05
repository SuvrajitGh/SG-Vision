interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const projectdata: Project[] = [
  {
    id: 1,
    image:"/YT.jpg",
    title: "Youtube Clone",
    subtitle: "React,Tailwind CSS,Typescript,Material UI",
  },
  {
    id: 2,
    image:"/ecom1.jpg",
    title: "CartSystem",
    subtitle: "Next Js,Tailwind CSS,Typescript",
  },
  {
    id: 3,
    image:"/spotify.jpg",
    title: "Spotify Clone",
    subtitle: "React,Typescript,Tailwind CSS,Redux,Rapid Api",
  },
  {
    id: 4,
    image:"/Netflix.png",
    title: "Netflix Clone",
    subtitle: "React ,Typescirpt,Tailwind CSS",
  }
];

export default projectdata;

// import icons
import { FaRegClock } from "react-icons/fa";

// import images
import Project1 from "./images/project1.jpg";
import Project2 from "./images/project2.jpg";
import Project3 from "./images/project3.jpg";

import OurTeam1 from "./images/ourteam1.jpg";
import OurTeam2 from "./images/ourteam2.jpg";
import OurTeam3 from "./images/ourteam3.jpg";
import OurTeam4 from "./images/ourteam4.jpg";

export const navLinks = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/about",
    text: "about us",
  },
  {
    path: "/ourteam",
    text: "our team",
  },
  {
    // our research
    path: "/research",
    text: "research",
  },
  // {
  //   path: "/blogs",
  //   text: "blogs",
  // },
  {
    path: "/contact",
    text: "contact",
  },
];

export const recentProjects = [
  {
    image: Project1,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "African History",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam, Sit Tenetur Doloribus Quod Rerum Voluptatibus Nisi Illo Neque Corporis Doloremque Perspiciatis Velit. Error Necessitatibus Soluta Et Enim, Sapiente Nobis Quas Quo!",
    readMore: "read more",
  },
  {
    image: Project2,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "African Culture",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam, Sit Tenetur Doloribus Quod Rerum Voluptatibus Nisi Illo Neque Corporis Doloremque Perspiciatis Velit. Error Necessitatibus Soluta Et Enim, Sapiente Nobis Quas Quo!",
    readMore: "read more",
  },
  {
    image: Project3,
    icon: <FaRegClock />,
    time: "Jan 01.2023",
    title: "African Tradition",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam, Sit Tenetur Doloribus Quod Rerum Voluptatibus Nisi Illo Neque Corporis Doloremque Perspiciatis Velit. Error Necessitatibus Soluta Et Enim, Sapiente Nobis Quas Quo!",
    readMore: "read more",
  },
];

export const ourteam = [
  {
    image: OurTeam1,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
  {
    image: OurTeam2,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
  {
    image: OurTeam3,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
];

// have to creat an object for our team page with four contents
export const ourteamAll = [
  {
    image: OurTeam1,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
  {
    image: OurTeam2,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
  {
    image: OurTeam3,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
  {
    image: OurTeam4,
    name: "hon. Adomako Mensah",
    title: "President",
    text: "Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ipsa Placeat Laborum Voluptatum Quaerat, Numquam Blanditiis Ad Voluptates, Veniam",
  },
];

// Have to create three objects for each of the research pages with ID's and use USE PARAMS to access them

import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const routes = [
  {
    key: "home",
    href: "#home",
    title: "Home",
    component: Home,
  },
  {
    key: "skills",
    href: "#skills",
    title: "Skills",
    component: Skills,
  },
  {
    key: "projects",
    href: "#projects",
    title: "Projects",
    component: Projects,
  },
  {
    key: "certifications",
    href: "#certifications",
    title: "Certifications",
    component: Certifications,
  },
  {
    key: "contact",
    href: "#contact",
    title: "Contact",
    component: Contact,
  },
];

export default routes;

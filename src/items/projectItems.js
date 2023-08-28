import dataVisualization from "../assets/data-visualization.svg";
import handGesture from "../assets/one-finger-gesture.svg";

const projects = [
  {
    name: "Hand Gesture Recognition",
    icon: handGesture,
    technologies: [
      "C#",
      "Image Processing",
      "Artificial Intelligence",
      "Windows",
    ],
    link: "https://github.com/Venkate5h/hand-gesture-recognition",
    description:
      "A windows forms based system for real-time Indian Sign Language gesture recognition to facilitate communication between hearing-impaired individuals and the general public.",
  },
  {
    name: "DSA Visualizer",
    icon: dataVisualization,
    technologies: ["Javascript", "React", "Data Structures", "Algorithms"],
    link: "https://venkate5h.github.io/sorting-visualizer/",
    description:
      "Creating an interactive Data Structures and Algorithms visualizer to aid learners in understanding complex concepts through visual representation and step-by-step animations.",
  },
];

export default projects;

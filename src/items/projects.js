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
    description:
      "A windows forms based system for real-time Indian Sign Language gesture recognition to facilitate communication between hearing-impaired individuals and the general public.",
  },
  {
    name: "DSA Visualizer",
    icon: dataVisualization,
    technologies: [
      "Javascript",
      "React",
      "ECharts",
      "Data Structures",
      "Algorithms",
    ],
    description:
      "Creating an interactive Data Structures and Algorithms visualizer to aid learners in understanding complex concepts through visual representation and step-by-step animations.",
  },
];

export default projects;

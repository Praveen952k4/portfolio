import React from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Technology",
    institution: "Sri Sai Ram Engineering College, Chennai",
    duration: "2026 - Present",
    cgpa: "In Progress (current 8.38)",
    cgpaLabel: "CGPA",
    details: [
      "Computer Science and Technology",
      "Specialization in AI & ML",
      "Key courses: Data Structures, Algorithms, Machine Learning",
      "Projects(live-in-lab) in Full stack Web Development",
    ],
  },
  {
    title: "12th Standard",
    institution:
      "Annai Velankanni Matric Hr-Sec School, Pavoorchatram, Tenkasi",
    duration: "2021 - 2022",
    cgpa: "83.6%",
    cgpaLabel: "Percentage",
    details: [
      "Physics, Maths, Chemistry, Computer Science",
      "State Board of Tamil Nadu Completion",
      "Mathematics and Computer Science",
    ],
  },
  {
    title: "10th Standard",
    institution:
      "Annai Velankanni Matric Hr-Sec School, Pavoorchatram, Tenkasi",
    duration: "2019 - 2020",
    cgpa: "98.8%",
    cgpaLabel: "Percentage",
    details: [
      "Tamil, English, Maths, Science, Social Science",
      "State Board of Tamil Nadu Completion",
      "Strong foundation in Science",
    ],
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">My Academic Journey</h1>
      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <div key={index} className="academic-card">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <p className="academic-duration">{edu.duration}</p>
            <p className="academic-cgpa">
              {edu.cgpaLabel}: {edu.cgpa}
            </p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;

import React, { Component } from "react";
import "./index.css";
import { FaCogs, FaChartLine, FaTasks } from "react-icons/fa";

const frameworkData = [
  {
    id: 1,
    icon: <FaCogs className="framework-icon" />,
    title: "360° Solution",
    description:
      "A complete user tracking software with a wide range of modules to meet all needs for effective team management and operations.",
  },
  {
    id: 2,
    icon: <FaChartLine className="framework-icon" />,
    title: "Skill-Gap Analysis",
    description:
      "Bridges the skill-gap with the accurate productivity insights by uncovering the actively disengaged employees that create friction for your high performers.",
  },
  {
    id: 3,
    icon: <FaTasks className="framework-icon" />,
    title: "Agile Task Management",
    description:
      "Standard practices are baked-in so you can work on meeting your goals and stop worrying about things being skipped.",
  },
];

class ResearchBackedFramework extends Component {
  render() {
    return (
      <div className="framework-section">
        <div className="framework-header">
          <span className="framework-tagline">
            Organizational Efficiency Simplified
          </span>
          <h2 className="framework-title">Research-Backed Framework</h2>
          <p className="framework-subtext">
            Empower Your Management Operations With Enterprise-Grade Convenience
          </p>
        </div>

        <div className="framework-cards">
          {frameworkData.map((item) => (
            <div key={item.id} className="framework-card">
              <div className="framework-card-icon">{item.icon}</div>
              <h3 className="framework-card-title">{item.title}</h3>
              <p className="framework-card-desc">{item.description}</p>
              <button className="framework-btn">Try It Out</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ResearchBackedFramework;

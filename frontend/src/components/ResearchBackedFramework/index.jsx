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
      <>
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
      <div className="empmonitor-section">
        <div className="empmonitor-content">
          <span className="badge">Build-In Transparency Mode</span>
          <h2 className="title">
            Discover Teams’ Best Abilities With{" "}
            <span className="highlight">Detailed Analysis</span>
          </h2>
          <p className="subtitle">
            Get a clear picture of your workforce with{" "}
            <span className="link">EmpMonitor</span>
          </p>
          <button className="sign-up-btn">Sign Up Now!</button>
        </div>
        <div className="empmonitor-image">
          <img
            src="https://empmonitor.com/wp-content/uploads/2024/05/img-3.webp"
            alt="EmpMonitor dashboard preview"
          />
        </div>
      </div>
</>
    );
  }
}

export default ResearchBackedFramework;

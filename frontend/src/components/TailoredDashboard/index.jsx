import React, { Component } from "react";
import "./index.css";
import { IoLogIn } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { FaPlug, FaDatabase, FaBell, FaBuilding } from "react-icons/fa";
import { FaCogs, FaChartBar, FaCodeBranch } from "react-icons/fa";

class DashboardCard extends Component {
  render() {
    const { id, icon, tagline, description } = this.props;
    return (
      <div className="card">
        <div className="card-id">{id < 10 ? `0${id}` : id}</div>
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{tagline}</h3>
        <p className="card-desc">{description}</p>
        <button className="try-btn">Try It Now</button>
      </div>
    );
  }
}


class FlipCard extends Component {
  render() {
    const { icon, title, description } = this.props;
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front homepage-card">
            <div className="homepage-icon">{icon}</div>
            <div className="homepage-card-title">{title}</div>
          </div>
          <div className="flip-card-back homepage-card">
            <div className="homepage-card-title" style={{ color: "#47c2ff" }}>
              {title}
            </div>
            <p
              className="homepage-card-desc"
              style={{ color: "#d1e7ff", padding: "0 14px" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// --- Dashboard Data ---
const tailoredDashboardData = [
  {
    id: 1,
    icon: <IoLogIn className="icon" size={40}/>,
    tagline: "Manager Login",
    description:
      "Empower managers with complete access to team data including detailed time and activity logs. Customize productivity labels effortlessly to optimize workflows.",
  },
  {
    id: 2,
    icon: <FiUserCheck className="icon" size={40}/>,
    tagline: "Employee Login",
    description:
      "Provide employees with comprehensive access to view their performance data and effortlessly apply for leave from the same dashboard.",
  },
  {
    id: 3,
    icon: <FaPlug className="icon" size={40}/>,
    tagline: "API Integration",
    description:
      "Seamlessly integrates with any software to bolster monitoring capabilities. Effortlessly track time spent on each application and categorize it as productive or neutral.",
  },
  {
    id: 4,
    icon: <FaDatabase className="icon" size={40}/>,
    tagline: "Raw Data",
    description:
      "Access and analyze raw timesheet and productivity data for advanced insights.",
  },
  {
    id: 5,
    icon: <FaBell className="icon" size={40}/>,
    tagline: "Custom Alerts",
    description:
      "Stay informed with customizable instant alerts related to productivity levels and activity logs.",
  },
  {
    id: 6,
    icon: <FaBuilding className="icon" size={40}/>,
    tagline: "Employer Benefits",
    description:
      "Gain valuable workforce insights to streamline HR operations and boost efficiency.",
  },
];

// --- Flip Card Data ---
const flipCardData = [
  {
    icon: <FaCogs className="homepage-icon" />,
    title: "Implementation",
    description:
      "Transform strategies into action with tailored execution plans that ensure optimal adoption and measurable outcomes across your organization.",
  },
  {
    icon: <FaChartBar className="homepage-icon" />,
    title: "Insights",
    description:
      "We unwind opportunities for managing employees via detailed insights that lead to translating the data into concrete initiatives that drive productivity.",
  },
  {
    icon: <FaCodeBranch className="homepage-icon" />,
    title: "Custom Solutions",
    description:
      "Build specialized frameworks for your unique needs, with our expert team delivering innovative, scalable, and industry-compliant solutions.",
  },
];

// --- Main Class Component ---
class TailoredDashboard extends Component {
  render() {
    return (
      <>
      <div className="tailored-dash common-padding">
        {/* Header Section */}
        <div className="tail-header">
          <h1 className="tailored-head">Tailored Dashboard</h1>
          <h2>Perfect Setup Crafted Just For You</h2>
          <p>
            Functionalities that give you seamless control and comprehensive
            oversight.
          </p>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          {tailoredDashboardData.map((item) => (
            <DashboardCard key={item.id} {...item} />
          ))}
        </div>
   </div>
        {/* Homepage Section */}
        <div className="homepage-root">
          <div className="homepage-header">
            <button className="homepage-scan-btn">
              Scan Your Organization's Pulse
            </button>
            <h1>
              Conquer Your Chaos With <br />
              <span className="homepage-blue-accent">
                Our Seamless Approach!
              </span>
            </h1>
            <p className="homepage-subtext">
              From the big picture to granular details, we got you covered
            </p>
          </div>

          {/* Flip Cards */}
          <div className="homepage-cards">
            {flipCardData.map((card, index) => (
              <FlipCard key={index} {...card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default TailoredDashboard;

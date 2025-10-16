import React, { Component } from "react";
import "./index.css";
import { FaChartLine, FaCheck } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactForm from "../Contactform";
import { FaInstagram } from "react-icons/fa6";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }

  features = [
    "Attendance Management",
    "Data Security",
    "GPS Monitoring",
    "Web Usage History",
    "Time Tracking",
    "App Usage History",
    "Project Monitoring",
    "Keystroke Logger",
    "Detailed Reports",
  ];

  toggleNav = () => {
    this.setState((prev) => ({ navOpen: !prev.navOpen }));
  };

  closeNav = () => {
    this.setState({ navOpen: false });
  };

  render() {
    const { navOpen } = this.state;

    return (
      <>
        <header className="header">
          {/* Navigation */}
          <nav className="navbar-co">
            <div className="nav-mob">
              <img
                src="https://empmonitor.com/wp-content/uploads/2023/04/emp-logo-w.webp"
                className="logo"
                alt="EmpMonitor Logo"
              />
              <GiHamburgerMenu
                color="white"
                size={26}
                id="burger"
                onClick={this.toggleNav}
              />
            </div>

            {/* Desktop Menu */}
            <div className="nav-se">
              <p>About</p>
              <p>Features</p>
              <p>Products</p>
              <p>Pricing</p>
              <p>Resources</p>
              <p>Contact Us</p>
              <p>Want Demo</p>
              <button className="login-btn">Login</button>
            </div>

            {/* Mobile Menu with Transition */}
            <div
              className={`mobile-menu ${navOpen ? "open" : ""}`}
              onClick={this.closeNav}
            >
              <p>About</p>
              <p>Features</p>
              <p>Products</p>
              <p>Pricing</p>
              <p>Resources</p>
              <p>Contact Us</p>
              <p>Want Demo</p>
              <button className="login-btn">Login</button>
            </div>
          </nav>

          {/* Main Hero Section */}
          <div className="main-head common-padding">
            <div className="hero-content">
              <div className="mini-cont">
                <FaChartLine color="#fff" />
                <p>Leading With Brilliance</p>
              </div>

              <h1>Employee Monitoring Software</h1>
              <p className="fusion-title">
                Take Control of Your Workforce:
                <span> Monitor, Optimize, Succeed</span>
              </p>

              <ul className="features">
                {this.features.map((item, index) => (
                  <li key={index}>
                    <div className="ft-co">
                      <FaCheck className="ft" size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <img
                src="https://empmonitor.com/wp-content/uploads/2024/08/badges-768x144.webp"
                className="ft-img"
                alt="Badges"
              />
              <br />
              <button className="butn">Start Your Free Trial</button>
              <p className="para">No Credit Card Required*</p>
            </div>
            <ContactForm />
          </div>
        </header>
      </>
    );
  }
}

export default Header;

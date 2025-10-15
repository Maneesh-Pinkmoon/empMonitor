import React, { Component } from "react";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Features */}
          <div className="footer-column">
            <h3>Features</h3>
            <ul>
              <li>Employee Monitoring Software</li>
              <li>User Activity Monitoring</li>
              <li>Workforce Productivity Software</li>
              <li>Time Tracking Software</li>
              <li>Attendance Tracking Software</li>
              <li>Project Management Software</li>
              <li>Data Loss Prevention Software</li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>All Features</li>
              <li>Pricing</li>
              <li>Why EmpMonitor</li>
              <li>Testimonials</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Employee Monitoring Blog</li>
            </ul>
          </div>

          {/* Links */}
          <div className="footer-column">
            <h3>Links</h3>
            <ul>
              <li>Productivity Measurement Tool</li>
              <li>Track In-Office Employees</li>
              <li>Employee Screenshot Monitoring</li>
              <li>Time Tracking Software</li>
              <li>Team Productivity Tools</li>
              <li>Application Usage Tracking</li>
            </ul>
          </div>

          {/* Comparisons */}
          <div className="footer-column">
            <h3>Comparisons</h3>
            <ul>
              <li>EmpMonitor vs Timecamp</li>
              <li>EmpMonitor vs Hubstaff</li>
              <li>EmpMonitor vs ActivTrak</li>
              <li>EmpMonitor vs DeskTime</li>
              <li>EmpMonitor vs Time Doctor</li>
              <li>EmpMonitor vs Clockify</li>
              <li>EmpMonitor vs Workstatus</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="footer-column contact">
            <h3>Get In Touch</h3>
            <ul>
              <li>📞 +1 888-845-5256</li>
              <li>📧 support@empmonitor.com</li>
              <li>🌐 empmonitor.com</li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EmpMonitor. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

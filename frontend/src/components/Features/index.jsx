import React from 'react';
import './index.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {/* Header */}
      <div className="headee">
        <span className="tag-1">Our Product Suite</span>
        <h2 className="title">
          Features That Power
          <div>
            Emp<span className="highlight">Monitor</span>
          </div>
        </h2>
        <p className="description">
          Unleash a suite of monitoring solutions to manage your workforce more effectively and in a more informed manner
        </p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Features Column */}
        <div className="features-column">
          <div className="feature-card">Stealth Mode</div>
          <div className="feature-card">Chat Monitoring</div>
          <div className="feature-card">Detailed Reports</div>
          <div className="feature-card">Data Security</div>
          <div className="feature-card">Web App Usage</div>
          <div className="feature-card">Browser History</div>
          <div className="feature-card">Intelligent Alert Mechanism</div>
          <div className="feature-card">Project Management</div>
        </div>

        {/* Right Column - Image and Button */}
        <div className="image-column">
          <div className="image-container">
            <img
              src="https://empmonitor.com/wp-content/uploads/2024/06/Projects.webp"
              alt="EmpMonitor UI"
            />
          </div>
          <button className="nt">Try It Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

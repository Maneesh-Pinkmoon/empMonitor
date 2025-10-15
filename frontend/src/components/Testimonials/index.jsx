import React, { Component } from "react";
import "./index.css";

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-section">
        <div className="section-header">
          <button className="badge">Words Of Appreciation</button>
          <h2>How Our Employee Monitoring Software Empowers Teams</h2>
        </div>

        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <h3>EmpMonitor</h3>
            <p>
              Simplified the management of the entire workforce by 80% in terms
              of manpower, time, and effort. Also, the productivity at my
              workplace has never been this great. Now my team works more
              efficiently, and I can work more productively on other priorities.
            </p>
            <div className="testimonial-footer">
              <img
                src="https://empmonitor.com/wp-content/uploads/2024/01/1-1.webp"
                alt="user"
              />
              <div>
                <h4>Davide Paul</h4>
                <span>Associate Vice President</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <h3>Great EmpMonitor!</h3>
            <p>
              EmpMonitor’s advanced analytics offer profound insights into
              employee performance, driving data-driven and efficiency
              improvements that have truly transformed our business; highly
              recommend!
            </p>
            <div className="testimonial-footer">
              <img
                src="https://empmonitor.com/wp-content/uploads/2024/01/1-1.webp"
                alt="user"
              />
              <div>
                <h4>James George</h4>
                <span>HR Manager</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <h3>Fast & Reliable EmpMonitor!</h3>
            <p>
              EmpMonitor’s flexible features seamlessly align with our unique
              workforce requirements, leading to improved productivity and
              operational efficiency. We’re impressed with the results!
            </p>
            <div className="testimonial-footer">
              <img
                src="https://empmonitor.com/wp-content/uploads/2024/01/1-1.webp"
                alt="user"
              />
              <div>
                <h4>John Smith</h4>
                <span>IT Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;

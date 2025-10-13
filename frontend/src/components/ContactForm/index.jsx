import React, { Component } from "react";
import "./index.css";
import { FaFlag } from "react-icons/fa";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      orgName: "",
      email: "",
      employees: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", this.state);
    alert("Form submitted!");
  };

  render() {
    return (
      <div className="form-container">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label>
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
            required
          />

          <label>
            Organization Name <span>*</span>
          </label>
          <input
            type="text"
            name="orgName"
            placeholder="Enter Organization Name"
            value={this.state.orgName}
            onChange={this.handleChange}
            required
          />

          <label>
            Your Work Email Id <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Work Email Id"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <label>
            Total Number of Employees <span>*</span>
          </label>
          <select
            name="employees"
            value={this.state.employees}
            onChange={this.handleChange}
            required
          >
            <option value="">Select Total Number of Employees</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-100">51–100</option>
            <option value="100+">100+</option>
          </select>

          <label>
            Mobile No. <span>*</span>
          </label>
          <div className="phone-input">
            <div className="flag-box">
              <span role="img" aria-label="India">
                🇮🇳
              </span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="081234 56789"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

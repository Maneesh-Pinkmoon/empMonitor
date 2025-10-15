import React, { Component } from "react";
import "./index.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      orgName: "",
      email: "",
      employees: "",
      phone: "",
      phoneError: "", // To hold phone validation error message
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters
      const numericValue = value.replace(/\D/g, "");

      // Phone number validation
      let phoneError = "";
      if (numericValue.length > 10) {
        phoneError = "Phone number cannot exceed 10 digits.";
      } else if (numericValue.length < 10 && numericValue.length > 0) {
        phoneError = "Phone number must be 10 digits long.";
      }

      this.setState({ phone: numericValue, phoneError });
      return;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Extra validation before submit
    if (this.state.phone.length !== 10) {
      this.setState({ phoneError: "Phone number must be exactly 10 digits." });
      return;
    }

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
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit mobile number"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* Error Message Display */}
          {this.state.phoneError && (
            <p className="error-message">{this.state.phoneError}</p>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

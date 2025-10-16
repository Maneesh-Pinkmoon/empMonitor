import React, { Component } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import "./index.css";

const FeatureSection = [
  {
    question: "What Is EmpMonitor Employee Monitoring Software?",
    answer:
      "EmpMonitor Employee Monitoring Software is a powerful tool designed to help businesses monitor and manage employee activities in the workplace. It provides comprehensive insights into employee productivity, compliance, and security.",
  },
  {
    question: "How Does EmpMonitor Employee Monitoring Software Work?",
    answer:
      "EmpMonitor Employee Monitoring Software works by tracking employee activities on company-owned devices, such as computers and laptops. It records data on websites visited, applications used, time spent on tasks, and more, providing employers with valuable insights into employee behavior and productivity.",
  },
  {
    question:
      "How Does EmpMonitor Employee Monitoring Software Ensure Employee Privacy?",
    answer:
      "EmpMonitor Employee Monitoring Software prioritizes employee privacy by focusing on monitoring work-related activities only. It does not track personal data or activities outside of work-related tasks, respecting employees’ privacy rights.",
  },
  {
    question: "Is Employee Monitoring Software Easy To Implement And Use?",
    answer:
      "Yes, it’s easy to install and use. The dashboard and reports are designed for user convenience.",
  },
  {
    question:
      "How Does EmpMonitor Employee Monitoring Software Benefit Businesses?",
    answer:
      "EmpMonitor Employee Monitoring Software offers several benefits to businesses, including increased productivity, improved compliance with company policies and regulations, enhanced security against insider threats, and better resource allocation.",
  },
];

class FAQSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: null,
    };
  }

  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };

  render() {
    const { openIndex } = this.state;

    return (
      <div className="faq-container common-padding">
        {/* Decorative background circles */}
        <div className="faq-bg-circle circle1"></div>
        <div className="faq-bg-circle circle2"></div>
        <div className="faq-bg-circle circle3"></div>

        {/* Left Section */}
        <div className="faq-left">
          <div className="faq-header">Untangle Your Queries</div>

          <h2 className="faq-title">Frequently Asked Questions</h2>

          <p className="faq-description">
            Find answers to all your questions, learn about our software, its
            working and other related information instantly.
          </p>

          <div className="faq-list">
            {FeatureSection.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => this.toggleFAQ(index)}
                  className="faq-button"
                >
                  <div className="faq-button-inner">
                    {openIndex === index ? (
                      <FaMinusSquare className="faq-icon" />
                    ) : (
                      <FaPlusSquare className="faq-icon" />
                    )}
                    <span>{faq.question}</span>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="faq-right">
          <img
            src="https://empmonitor.com/wp-content/uploads/2024/06/Frame-2062.webp"
            alt="EmpMonitor illustration"
            className="faq-image"
          />
        </div>
      </div>
    );
  }
}

export default FAQSection;

import React, { Component } from "react";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";

class SlidingNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="main-container">
       
        <nav className="navbar">
         <img src='https://empmonitor.com/wp-content/uploads/2023/04/emp-logo-w.webp' className="logo"/>
          <button className="menu-btn" onClick={this.toggleMenu}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>

        <div className={`sidebar-right ${open ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>       
      </div>
    );
  }
}

export default SlidingNavbar;

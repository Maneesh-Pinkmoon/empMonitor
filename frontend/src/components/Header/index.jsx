import './index.css'
import { FaChartLine } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ContactForm from '../Contactform';
import { GiHamburgerMenu } from "react-icons/gi";

// import SlidingNavbar from '../SlidingNavbar';

const features = [
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

const Header = ()=>{
    return (
        <>  
        <img src='https://empmonitor.com/wp-content/uploads/2023/04/Emp-webp14x-scaled.webp' id='gitex'/>
        <div className='header'>
           <nav className='navbar-co'>
            <div className='nav-mob'><img src='https://empmonitor.com/wp-content/uploads/2023/04/emp-logo-w.webp' className='logo'/>
            <GiHamburgerMenu color="white" size={28} id='burger'/></div>
            <div className='nav-se'>
              <p>
              About
            </p>
            <p>
              Features
            </p>
           <p>Products</p>
           <p>Pricing</p>
           <p>Resources</p>
           <p>Contact Us</p>
           <p>Want Demo</p>
           <buton className="login-btn">Login</buton>
           <GiHamburgerMenu color="white" size={28} />
            </div>
            
            {/* <SlidingNavbar/> */}
            </nav>
           <div className='main-head'>
        <div>
           <div className='mini-cont'>
                <FaChartLine color='#fff' margin="10px"/>
                 <p>Leading With Brilliance</p>
            </div>
            <h1>Employee Monitoring Software</h1>
            <p className='fusion-title'>Take Control of Your Workforce: <span>
                Monitor, Optimize, Succeed
                </span></p>
    <div>
      <ul className='features'>
        {features.map((item, index) => (
          <li key={index}>
            <div className='ft-co'>
              <FaCheck className='ft' size={14} />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {/* <ul className='ftr-desk'>
        <li>
          <div className='ft-co'>
              <FaCheck className='ft' size={14} />
            </div>
            <span>Attendance Management</span>
        </li>
      </ul> */}
    </div>
    <img src='https://empmonitor.com/wp-content/uploads/2024/08/badges-768x144.webp' className='ft-img'/><br/>
    <button className='butn'>Start Your Free Trial</button>
    <p className='para'>No Credit Card Required*</p>
    </div>
     <ContactForm/>
     </div>
    </div>
    </>
    )
}
export default Header
import { Component } from "react";
import Header from "../Header";
import { BiSolidLogInCircle } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import MyCarousel from "../MyCrousel";
import FeatureSection from "../Features";
import './index.css'

class Home extends Component{
    render(){
        return (
            <>
            <Header/>
            <div className="section2" id="section2">
                <div className="ref"><p>Refining Excellence Together</p></div>
                <h1>Our Valuable Clients & Resellers Across The Globe</h1>
                <img src="https://empmonitor.com/wp-content/uploads/2025/06/partnership-logos-emp-1536x595.webp" className="part-img"/>
                <img src="https://empmonitor.com/wp-content/uploads/2025/06/Mobile-Clients-Logo-768x641.webp" className="part-imgg"/>
            </div>
            <div id="section3" className="section3">
               <div className="sec3-sub">
               <div className="ref"><p>Level-Up in Minutes</p></div>
               <h1>Manage It All In Just A Few Steps!</h1>
               <button className="butn">Get Started Now! </button>
               </div>
               <div className="sec3-sub1">
                   <div className="sec3-sub-cont">
                     <div className="sec3-icon">
                        <BiSolidLogInCircle size={30} color="#fff"/>
                        </div>
                        <p>Login In To Your Dashboard</p>
                   </div>
                   <div className="sec3-sub-cont">
                     <div className="sec3-icon">
                        <BsGraphUpArrow size={30} color="#fff"/>
                        </div>
                        <p>Go To The Employee Insights</p>
                   </div>
                   <div className="sec3-sub-cont">
                     <div className="sec3-icon">
                        <GrPersonalComputer size={30} color="#fff"/>
                        </div>
                        <p>Get Centralized Data Monitor Seamlessly</p>
                   </div>
               </div>
               
            </div>
            <div className="enh-cont">
            <div className="reff"><p>Enchoes in Satisfaction</p></div>
              <h1 className="enh">The heart of our Journey</h1>
               </div>
               <MyCarousel/>
               <FeatureSection/>
            </>
        )
    }
}
export default Home
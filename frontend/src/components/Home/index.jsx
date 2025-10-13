import { Component } from "react";
import Header from "../Header";
import './index.css'

class Home extends Component{
    render(){
        return (
            <>
            <Header/>
            <div className="section2">
                <div className="ref"><p>Refining Excellence Together</p></div>
                <h1>Our Valuable Clients & Resellers Across The Globe</h1>
                <img src="https://empmonitor.com/wp-content/uploads/2025/06/partnership-logos-emp-1536x595.webp" className="part-img"/>
            </div>
            </>
        )
    }
}
export default Home
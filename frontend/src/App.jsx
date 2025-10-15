import { Component } from "react";
import Home from './components/Home'
import TailoredDashboard from "./components/TailoredDashboard";
import ResearchBackedFramework from "./components/ResearchBackedFramework";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css'
import FAQSection from "./components/FAQSection";
class App extends Component{
  render()
  {
    return(
      <>
      <Home/>
      <TailoredDashboard/>
      <ResearchBackedFramework/>
      <Testimonials/>
      <FAQSection/>
      <Footer/>
      </>
    )
  }
}
export default App
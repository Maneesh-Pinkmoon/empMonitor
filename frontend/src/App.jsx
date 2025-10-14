import { Component } from "react";
import Home from './components/Home'
import TailoredDashboard from "./components/TailoredDashboard";
import ResearchBackedFramework from "./components/ResearchBackedFramework";
import './App.css'

class App extends Component{
  render()
  {
    return(
      <>
      <Home/>
      <TailoredDashboard/>
      <ResearchBackedFramework/>
      </>
    )
  }
}
export default App
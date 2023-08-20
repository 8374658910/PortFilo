import Nav from "./Nav";
import './App.css';
import {  Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Services from "./Services";
import "./Home.css";

function App() {
  return (
    
      <div className="color">
     
    <Nav/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/Services"  element={<Services/>}  />   
      <Route path="/skills"  element={<Skills/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      
    </Routes>
    

  
    </div>
    
   
    
  )
}

export default App;

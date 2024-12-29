import Navbar from "./ALLComp/Navbar"
import './App.css'
import Home from "./ALLComp/Home"
import Contactus from "./ALLComp/Contactus";
import Offer from "./ALLComp/Offer";
import Clients from "./ALLComp/Clients";
import Projects from "./ALLComp/Projects";
import Footer from "./ALLComp/Footer";
import Aboutus from "./ALLComp/Aboutus";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
          Aos.init({ duration: 2000 });
        }, []);
  return (
    <>
    <div class="container">
    <Navbar/>
    <Home/>
    <Clients/>
    <Offer/>
    <Projects/>
    <Contactus/>
    <Aboutus/>
    <Footer/>
    </div>

    

    
    </>
  );
}

export default App;

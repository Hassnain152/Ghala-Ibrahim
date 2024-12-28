import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import nav1 from "./IMGs/3.jpg"
import wood from "./IMGs/WoodW.jpg"
import clad from "./IMGs/clad.png"
import cntr from "./IMGs/cntr.jpg"
import doris from "./IMGs/dooris.png"
import ciel from "./IMGs/ciel.jpg"
import part from "./IMGs/part.jpg"
import slide from "./IMGs/slide.jpg"
import cons from "./IMGs/cons.jpg"
import "./Ofr.css"



function Offer() {
    
   
     
  return (

    
    <section id ="offer">
      <div data-aos="flip-up"> 
    <div class="container text-center mt-5">
        <div class="row">
        <h1  class="col-md-12 text-center"  data-aos="zoom-in-left">What We Offer</h1>
            <div/>
       
       <div  class="col-md-4" >

        <img  className="ser"  style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={nav1} alt="img" />
      
        <p style={{color:"#4e382a"}}  data-aos="zoom-in-right" class="col-md-12 text-center" >➤ Elevator Cladding</p> 

        

       </div>

       <div class="col-md-4">
       <img   className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={wood} alt="img" />

        
        <p  style={{color:"#4e382a"}}>➤ Wood Work</p>
       </div>
       <div class="col-md-4">
       <img   className="ser" style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={clad} alt="img" />

        <p   style={{color:"#4e382a"}}  data-aos="zoom-in-right">➤ Wall Cladding</p>
       </div>

            
    
      
    </div>

    <div class="row">
        
            <div/>
       
       <div  class="col-md-4">
       <img  className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={cntr} alt="img" />

        <p  style={{color:"#4e382a"}}  data-aos="zoom-in-right">➤ Wooden Counter</p>
       </div>
       <div class="col-md-4">
       <img   className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={doris} alt="img" />

        <p  style={{color:"#4e382a"}}>➤ Wooden Hidden Door</p>
       </div>

       <div class="col-md-4">
       <img   className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={ciel} alt="img" />
 
        <p   style={{color:"#4e382a"}}  data-aos="zoom-in-right">➤ Wood Cieling</p>
       </div>

            
    
      
    </div>

    <div class="row">
        
            <div/>
       
       <div  class="col-md-4">
       <img  className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={part} alt="img" />

        <p  style={{color:"#4e382a"}}>➤ decorative Partition</p>
       </div>
       <div class="col-md-4">
       <img   className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={slide} alt="img" />

        <p  style={{color:"#4e382a"}}>➤ Wood Sliding Door</p>
       </div>
       <div class="col-md-4">
       <img  className="ser"   style={{width: "150px",height: "150px", border: '3px solid #4e382a', borderRadius: '15px',}} src={cons} alt="img" />

        <p   style={{color:"#4e382a"}}  data-aos="zoom-in-right">➤ Tv Console</p>
       </div>

            
    
      
    </div>





    </div>
    </div>
    </section>
  )
}

export default Offer

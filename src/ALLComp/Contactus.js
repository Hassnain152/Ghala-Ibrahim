import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lopo from "./IMGs/49643.jpg"
import whtsapp from"./IMGs/bbv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



import "./whtsap.css"
function Contactus() {
  const googleMapsUrl = `https://maps.app.goo.gl/WFCBSiLiaEgiCbXy8?g_st=ic`;
   
  return (
    <>
    <section id="Contactus">
      <div class="container mt-5 text-center " >
        <h1
          class="col-md-12 text-center"
          style={{fontSize:50, color:"#4e382a"}}
          data-aos="zoom-in-right"
        >
          Contact Us
        </h1>
        <div class="row">
          <div class="col-md-6">
           <img style={{width:"500px", height:"500px"}} src={lopo}/>
          </div>


          <div class="col-md-6 mt-5 text-center" data-aos="zoom-in"  >


        
         <h3>Arif Sattar</h3>
         <h3>Position</h3>
         <FontAwesomeIcon style={{color:"blue"}} icon={faEnvelope}  bounce />
         <p style={{color:"blue"}}> arifsattar@ghalaibrahimalr.com</p>
         <br/>
         <br/>

         <h3>M.Nouman</h3>
         <h3>Position</h3>
         <FontAwesomeIcon style={{color:"blue"}} icon={faEnvelope}  bounce />
         <p style={{color:"blue"}}>  mohammed.nauman1987@ghalaibrahimalr.com  </p>

         
        
         

         

         
            
          </div>
          
        </div>
       
      <div class ="row text-center">
      <h1 style={{ color:"#4e382a"}}  data-aos="zoom-in-right">Locate Us</h1>
       
      </div>
      <iframe style={{ width:"100%" ,height:"450" , allowfullscreen:"1" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.657479566626!2d46.7158017!3d24.5319318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0dfcbc0ea71b%3A0xb7f027293c0e8370!2z2YXZiNiz2LPYqSDYutmE2KfYp9io2LHYp9mH2YrZhSDZhdit2YXYr9in2YTYsdin2LTYrw!5e0!3m2!1sen!2ssa!4v1735141270324!5m2!1sen!2ssa" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>



        <div className="call">
        <a href="https://wa.me/+966590752215 ">
          <img class="text-center" style={{ width: 50 }} src={whtsapp}  />
        </a>
        <p style={{ fontWeight: "bold", color: "black" }}></p>
      </div>
      </div>
      </section>
    </>

  
  );
}

export default Contactus;





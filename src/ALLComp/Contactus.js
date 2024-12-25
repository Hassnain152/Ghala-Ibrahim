import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lopo from "./IMGs/49643.jpg"
import whtsapp from"./IMGs/bbv.png";
import "./whtsap.css"
function Contactus() {
  const googleMapsUrl = `https://maps.app.goo.gl/WFCBSiLiaEgiCbXy8?g_st=ic`;
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
  return (
    <>
    <section id="Contactus">
      <div class="container mt-5 " >
        <h1
          class="col-md-12 text-center"
          style={{fontSize:50, color:"#4e382a"}}
          data-aos="zoom-in-right"
        >
          Contact Us
        </h1>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <h3 class="heading mt-4">Let's talk about everything!</h3>
              

                <p>
                  <img
                    data-aos="zoom-in"
                    src={lopo}
                    alt="Image"
                    class="img-fluid text-center"
                  />
                </p>
              </div>
              <div class="col-md-6">
                <form
                  class="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      <input
                        data-aos="zoom-in"
                        style={{ backgroundColor: "#4e382a",color:"white" }}
                        type="button"
                        value="Send Meessage"
                        class="btn  rounded-4 py-2 px-4"
                      />
                      <span class="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                
              </div>
            </div>
          </div>
        </div>
      <div class ="row text-center">
      <h1 style={{ color:"#4e382a"}}  data-aos="zoom-in-right">Locate Us</h1>
       
      </div>
      <iframe style={{ width:"100%" ,height:"450" , allowfullscreen:"1" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.657479566626!2d46.7158017!3d24.5319318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0dfcbc0ea71b%3A0xb7f027293c0e8370!2z2YXZiNiz2LPYqSDYutmE2KfYp9io2LHYp9mH2YrZhSDZhdit2YXYr9in2YTYsdin2LTYrw!5e0!3m2!1sen!2ssa!4v1735141270324!5m2!1sen!2ssa" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>



        <div className="call">
        <a href="https://wa.me/+923176279223 ">
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





import slide1 from "./IMGs/mnb.webp"
import slide2 from "./IMGs/lop.jpg"
import slide3 from  "./IMGs/opop.png"
import Six from "./IMGs/6.jpg"
import one from "./IMGs/1.jpg";
import seven from "./IMGs/7.jpg"
import vectt from "./IMGs/Vect.jpeg"
import new4 from "./IMGs/n4.jpg"
import nav1 from "./IMGs/nav11.png"
import nav2n from "./IMGs/nav22.png"
import new1 from "./IMGs/n1.jpg"
import new2 from "./IMGs/n2.jpg"
import new3 from "./IMGs/n3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



import React from "react";


function Home() {
  return (
    <Carousel>
                <div>
                    <img src= {nav1}/>
                    
                </div>
                <div>
                    <img src={one} />
                   
                </div>
                <div>
                    <img src={nav2n} />
                  
                </div>

                <div>
                    <img src={new3} />
                  
                </div>
            </Carousel>
    // <>
    //  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>

    
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img style={{
    //               width: "100%",
    //               height: "650px",
    //             }}
    //         src={nav1}
    //         className="d-block w-100"
    //         alt="Slide 1"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img style={{
    //               width: "100%",
    //               height: "650px",
    //             }}
    //          src={one}
    //         className="d-block w-100"
    //         alt="Slide 2"
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img style={{
    //               width: "100%",
    //               height: "650px",
    //             }}
    //         src={seven}
    //         className="d-block w-100"
    //         alt="Slide 3"
    //       />
    //     </div>

    //     <div className="carousel-item">
    //       <img style={{
    //               width: "100%",
    //               height: "650px",
    //             }}
    //         src={nav2}
    //         className="d-block w-100"
    //         alt="Slide 3"
    //       />
    //     </div>

    //   </div>

     
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  
    // </>
  );
}

export default Home;

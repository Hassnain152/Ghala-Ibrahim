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
    
  );
}

export default Home;

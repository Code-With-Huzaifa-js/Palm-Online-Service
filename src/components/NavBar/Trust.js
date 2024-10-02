import "./Trust.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React} from "react";
gsap.registerPlugin(ScrollTrigger);

function Trust(){

    useGSAP(()=>{
      gsap.from(".cont .box", {
        scale:0,
        duration:1,
        opacity:0,
        scrollTrigger:{
          trigger:".cont",
          scroller:"body",
          // markers:true,
          start:"top 60%"
        }
      })
    })
  
    return (
        <>
          <div className="cont">

            <div className="box">

              <div className="text">
                  <h1 id="head">Trusted by 30+ businesses for <br/> exceptional social media branding.</h1>
              </div>
              
              <div className="img">
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/inventify.webp" alt=""></img>
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/Sturdy-Fitness-1.webp" alt=""></img>
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/AV-Fitness.webp" alt=""></img>
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/SR-Eskilltech.webp" alt=""></img>
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/Decor-Engineers.webp" alt=""></img>
                  <img src="https://filmuix.com/wp-content/uploads/2024/05/Logo.png" alt=""></img>
              </div> 

              </div>

          </div>

        </>
    )
};

export default Trust;
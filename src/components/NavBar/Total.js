import "./Total.css";
import ExtraThing from "./ExtraThing";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React} from "react";
gsap.registerPlugin(ScrollTrigger);


function Total(){


  
//  useEffect(()=>{
//   let scroller = (event)=>{
//     if(window.pageYOffset > 1288){
//       let increment = 0 ;
//       let timer = setInterval(()=>{

//         increment = increment + 1;
//         //  document.getElementById("pro").innerHTML= increment;

//         setIncrease(increment)
  
//          if(increment === 250){
//           clearInterval(timer);
//          }
//         },20)

//         let inc = 0;
//         let timer2 = setInterval(()=>{

//           inc++;
//           // document.getElementById("pro2").innerHTML = inc;

//           if(inc === 50){
//             clearInterval(timer2)
//           }
         
//         },100)

//         let inc2 = 0  ;
//         let timer3= setInterval(()=>{

//           inc2 = inc2 + 1;
//           // document.getElementById("pro3").innerHTML = inc2;

//           if(inc2 === 5){
//             clearInterval(timer3)
//           }
         
//         },900)
//         let inc3 = 0;
//         let timer4= setInterval(()=>{

//           inc3 = inc3 + 1;
//           // document.getElementById("pro4").innerHTML = inc3;

//           if(inc3 === 7){
//             clearInterval(timer4)
//           }
         
//         },700)

//     window.removeEventListener("scroll", scroller)
//     };
//  }

//  window.addEventListener("scroll",scroller);
// })


  useGSAP(()=>{
    gsap.from(".body .content", {
      x:500,
      duration:1.5,
      opacity:0,
      scrollTrigger:{
        trigger:".body",
        scroller:"body",
        // markers:true,
        start:"top 60%"
      }
    });

    gsap.from(".body .bar", {
      opacity:0,
      scale:0,
      duration:1,
      scrollTrigger:{
        trigger:".body",
        scroller:"body",
        // markers:true,
        start:"top 60%"
      }
    })
  })

    return (
        <>
          <div className="body">

             <div className="content">

                <p id="p1">WHY CHOOSE US?</p>

                <h1>Experience Unmatched <br/> Creativity and Excellence </h1>

                <p id="tex">Choose Undefined for innovative storytelling, creative excellence, and results that make your brand stand out in the digital landscape.</p>

                <button className="btn a">KNOW MORE!</button>
             </div>




              <ExtraThing/>
               
        </div>

        </>
    )
};

export default Total;
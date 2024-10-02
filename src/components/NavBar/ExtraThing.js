import "./ExtraThing.css";
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React, useEffect, useRef} from "react";
gsap.registerPlugin(ScrollTrigger);
function ExtraThing(){
    let dom1 = useRef();
    let dom2 = useRef();
    let dom3 = useRef();
    let dom4 = useRef();
  
  
    useEffect(()=>{
        let id1 = dom1.current;
        let id2 = dom2.current;
        let id3 = dom3.current;
        let id4 = dom4.current;
    
      const scroller = (e)=>{
        if(window.scrollY >= 1288){ 
          
          let increment = 0 ;
          let timer = setInterval(()=>{
    
            increment = increment + 1;
            id1.innerHTML = increment;
      
            if(increment === 120){
              clearInterval(timer);
            }
          },20);
  
            let inc = 0;
            let timer2 = setInterval(()=>{
              
              inc++;
              id2.innerHTML = inc;
              
              if(inc === 56){
                clearInterval(timer2)
              }
                     
            },50);
  
            let inc2 = 0;
            let timer3= setInterval(()=>{
      
                inc2 = inc2 + 1;
                id3.innerHTML = inc2;
      
              if(inc2 === 5){
                clearInterval(timer3)
              }
                
            },450);
  
            let inc3 = 0;
            let timer4= setInterval(()=>{
  
            inc3 = inc3 + 1;
            id4.innerHTML = inc3;
  
            if(inc3 === 7){
              clearInterval(timer4)
            }
           
          },320);
          
          window.removeEventListener("scroll", scroller);
  
        }
    
      };
  
  
      window.addEventListener("scroll", scroller);
  
    },[])
    return (
        <>
           <div className="bar">
                <div className="box">
                   <div>
                       <h1 ref = {dom1} id = "pro">0</h1>
                       <p>PROJECT DONE</p>
                   </div>

                   <div>
                       <h1 ref={dom2} id="pro2">0</h1>
                       <p>TOTAL CLIENTS</p>
                   </div>

                   <div>
                       <h1 ref={dom3} id="pro3">0</h1>
                       <p>CLIENT RATINGS</p>
                   </div>

                   <div>
                       <h1 ref={dom4} id="pro4">0</h1>
                       <p>YEARS OF EXPERIENCE</p>
                   </div>
                </div> 
            </div>
        </>
    )
}

export default ExtraThing;
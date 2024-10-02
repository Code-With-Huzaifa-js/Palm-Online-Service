import "./AboutHeader.css";
import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function AboutHeader(props){

    useGSAP(()=>{
        gsap.fromTo(".backBlur",{
            scale:0,
            duration:1
        },
        {
            scale:1,
            duration:1
        }
        );
    })
    return(
        <>

          <div className="backBlur">
              <div className="HeadersDes"> 
                 <h1 id="Headi">{props.Heading}</h1>

                 <h3>{props.des}</h3>
              </div>
          </div>
        </>
    )
}

export default AboutHeader;
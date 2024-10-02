import "./Evalution.css";

import ReUse from "./reUse";
import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Evalution(){

    useGSAP(()=>{
        gsap.from(".boxy",{
            opacity:0,
            scale:1.5,
            duration:1,
            stagger:0.2,
            scrollTrigger:{
                trigger:".main1",
                scroller:"body",
                start:"top 60%",
                // markers:true,
            }
        })
    })

    return (
        <>
          <div className = "outer">

            <p id = "wht">WHAT WE OFFER</p>

            <h1 id = "lan">From Launch to Evolution</h1>
               
            <div className="main1">

                <ReUse img = {"fa-solid fa-laptop-code"} heading = "Web Development" text = "We will Create a powerful online presence with our custom website development services, offering responsive and user-friendly designs tailored to your business needs."/>

                <ReUse img = {"fa-solid fa-photo-film"} heading = "Video Editing" text = "Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms. "/>

                <ReUse img = {"fa-solid fa-photo-film"} heading = "Video Editing" text = "Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms. "/>

                <ReUse img = {"fa-solid fa-photo-film"} heading = "Video Editing" text = "Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms. "/>

                <ReUse img = {"fa-solid fa-photo-film"} heading = "Video Editing" text = "Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms. "/>

                <ReUse img = {"fa-solid fa-photo-film"} heading = "Video Editing" text = "Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms. "/>

            </div>
          </div>
        </>
    )
}

export default Evalution;
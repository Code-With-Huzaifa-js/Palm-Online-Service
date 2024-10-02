import "./ClientsProject.css";

import Clients from "./Clients";
import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ClientsProject(){

    useGSAP(()=>{
        gsap.from(".ClientsCards",{
            scale:0,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:".heading4",
                scroller:"body",
                start:"top 40%",
                // markers:true
            }
    })
    })

    return (
        <>
           <div className="ClientsMain">

                <div className="ctext">
                    <p className="para4">FEATURED PROJECTS</p>
                    <h1 className="heading4">Discover the Success Stories of Our <br/> Valued Clients</h1>
                </div>
                
                <div className="ClientsCards">
                    <Clients title = {"Hello"}/>
                    <Clients title = {"Hello"}/>
                    <Clients title = {"Hello"}/>
                    <Clients title = {"Hello"}/>
                    <Clients title = {"Hello"}/>
                    <Clients title = {"Hello"}/>
                </div>

           </div>
        </>
    )
}

export default ClientsProject;
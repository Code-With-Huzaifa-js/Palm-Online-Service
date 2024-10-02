import "./ReviewsCon.css";

import Review from "./Review";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React} from "react";
gsap.registerPlugin(ScrollTrigger);

function ReviewsCon(){

    useGSAP(()=>{
        gsap.from(".ReviewBody",{
            x:-4000,
            duration:10,
            scrollTrigger:{
                trigger:".ReviewContainer",
                scroller:"body",
                start:" top 100%",
                end:"bottom 0%",
                // markers:true,
                pin:true,
                scrub:5
            }
        })
    })


    return (
        <>
           <div className="ReviewContainer">

            <div className="RText">
                <p id="Testim">
                  Testimonial
                </p>
                <h1 className="Feed">
                  Client Feedback & Reviews
                </h1>
            </div>

            <div className="ReviewBody">
                <div className="Rbox">
                    <Review/>
                </div>

                <div className="Rbox R1">
                    <Review/>
                </div>

                <div className="Rbox">
                    <Review/>
                </div>

                <div className="Rbox R1">
                    <Review/>
                </div>

                <div className="Rbox">
                    <Review/>
                </div>

                <div className="Rbox R1">
                    <Review/>
                </div>

            </div>

           </div>

        </>
    )
}

export default ReviewsCon;
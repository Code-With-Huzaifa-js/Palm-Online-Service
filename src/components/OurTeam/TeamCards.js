import "./TeamCards.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React} from "react";
gsap.registerPlugin(ScrollTrigger);
function TeamCards(props){

    useGSAP(()=>{
        gsap.fromTo(".SAcc", {
          duration:1,
          opacity:0,
          stagger:0.2
        },{
            duration:1,
            opacity:1,
            stagger:0.3,
            scrollTrigger:{
                trigger:".AccText",
                scroller:"body",
                start:"top 60%"
              }
        })
      })

    return(
        <>
            <div className="SAcc">

                <img alt="/" src="https://filmuix.com/wp-content/uploads/2024/08/8.webp"></img>
                <h2>{props.Name}</h2>
                <h3>{props.Skill}</h3>

                <div className="Acc">
                <i className="fa-brands fa-instagram fi"></i>
                <i className="fa-brands fa-linkedin-in fi"></i>
                <i className="fa-brands fa-youtube"></i>
                </div>

            </div>
        </>
    )
}

export default TeamCards;
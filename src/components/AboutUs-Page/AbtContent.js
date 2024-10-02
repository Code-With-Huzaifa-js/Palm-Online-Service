import "./AbtContent.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function AbtContent(){
    useGSAP(()=>{
        gsap.fromTo(".Founder", {
            opacity:0,
            x:-400,
            duration:0.8,
        },
        {
            opacity:1,
            x:0,
            duration:0.8,
            delay:0.5
        });

        gsap.fromTo(".AbtBody .FounC",{
            opacity:0,
            x:400,
            duration:0.8,
        },
        {
            opacity:1,
            x:0,
            duration:0.8,
            delay:1
        } )
    })
    return (
        <>
           <div className="AbtBody">

              <div className="Founder">

                <h1>Founder</h1>

                <img id="abtImg" alt="/" src="https://filmuix.com/wp-content/uploads/2024/08/8.webp"></img>

                <p>With 5 years of experience in Video Production Industry , I brings a wealth of knowledge and expertise to Filmuix.</p>

              </div>

              <div className="FounC">

                <p>WHO WE ARE</p>

                <h1>Helping the World's Greatest Creators Create.​</h1>

                <h4>Taking content creation to the next level with our post production and  growth strategy services</h4>

                <button className="btn">DISCOVER MORE</button>

              </div>

           </div>
        </>
    )
}


export default AbtContent;
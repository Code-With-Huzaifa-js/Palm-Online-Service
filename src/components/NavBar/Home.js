import "./Home.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Home(){

  useGSAP(()=>{
    let tl = gsap.timeline();
    tl.from(".wel",{
      y:100,
      opacity:0,
      duration:0.6,
      delay:0.5
    });
    tl.from(".box #h1", {
      scale:3,
      opacity:0,
      duration:0.6
    });
    tl.from(".box h2",{
      duration:0.6,
      opacity:0
    });
    tl.from(".box h3",{
      y:-50,
      duration:0.6,
      opacity:0
    });
    tl.from(".box #btn", {
      y:100,
      duration:0.6,
      opacity:0,
      ease:"bounce.out",
    })
  })

    return (
        <>
          <div className="Container">

            <div className="box">

                <div className="wel">
                  <h4 id="wel">Welcome To</h4>
                </div>
                
                <h1 id="h1">Palm <span>Online</span> Services</h1>
                <h2>Helping the World's Greatest <br/> Creators Create.</h2>
                <h3>Taking content creation to the next level with our post production and growth <br></br> strategy service</h3>

                <div id="btn">
                  <button className="btn"><i className="fa-brands fa-google-drive fa-bounce"></i>Portfolio Link!</button>
                </div>
            </div>

          </div>
        </>
    )
}

export default Home;
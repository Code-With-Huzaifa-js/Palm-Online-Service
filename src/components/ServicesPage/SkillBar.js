import "./SkillBar.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {React} from "react";
gsap.registerPlugin(ScrollTrigger);

function SkillBar(){


    useGSAP(()=>{

        gsap.from(".op",{
            x:-200,
            opacity:0,
            duration:1,
            stagger:0.2,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        })

        gsap.from(".SkillContent .bars .Bar .color",{
            width:0,
            duration:3,
            delay:2.5,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        });

        gsap.from(".SkillContent .bars .Bar .mod",{
            width:0,
            duration:3,
            delay:2.5,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        });

        gsap.from(".SkillContent .bars .Bar .anim",{
            width:0,
            duration:3,
            delay:2.5,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        });

        gsap.from(".SkillContent .bars .Bar .vid",{
            width:0,
            duration:3,
            delay:2.5,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        });

        gsap.from(".SkillContent .bars .Bar .gra",{
            width:0,
            duration:3,
            delay:2.5,
            scrollTrigger:{
                trigger:".SkillBarBody",
                scroller:"body",
                start:"top 60%"
            }
        });
    })

    return (
        <> 
          <div className="SkillBarBody">

            <div className="SkillContent">
                <h3 className="op">OUR VALUE</h3>

                <h1 className="op">Experience You Can Trust. Contact us to discuss your project.</h1>

                <p className="op">We’ve been there. We’ve tackled tight deadlines, overcome unexpected challenges, and created impactful videos for a wide range of clients across diverse industries. Our experience allows us to anticipate your needs, navigate potential roadblocks, and deliver exceptional video content that achieves your marketing goals.</p>

                <div className="bars">

                    <div className="percent op">
                        <h4 className="skillText">Web Development</h4>
                        <h4 className="skillText">90%</h4>
                    </div>

                    <div className="Bar op">
                        <div className="color"></div>
                    </div>


                    <div className="percent op">
                        <h4 className="skillText">3d Modeling</h4>
                        <h4 className="skillText">86%</h4>
                    </div>

                    <div className="Bar op">
                        <div className="mod"></div>
                    </div>


                    <div className="percent op">
                        <h4 className="skillText">3d Animation</h4>
                        <h4 className="skillText">65%</h4>
                    </div>

                    <div className="Bar op">
                        <div className="anim"></div>
                    </div>



                    <div className="percent op">
                        <h4 className="skillText">Video Editing</h4>
                        <h4 className="skillText">93%</h4>
                    </div>

                    <div className="Bar op">
                        <div className="vid"></div>
                    </div>


                    <div className="percent op">
                        <h4 className="skillText">Graphic Designing</h4>
                        <h4 className="skillText">97%</h4>
                    </div>

                    <div className="Bar op">
                        <div className="gra"></div>
                    </div>



                </div>

                {/* <div className="bars">
                    <h4>3d Modeling</h4>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="bars">
                    <h4>3d Animation</h4>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="bars">
                    <h4>Graphics Designing</h4>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="bars">
                    <h4>Vidoe Editing</h4>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="bars">
                    <h4>Content Writing</h4>
                    <div>
                        <div></div>
                    </div>
                </div>     */}
            </div>


          </div>
        </>
    )
}

export default SkillBar;
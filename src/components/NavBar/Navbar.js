import"./Navbar.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {React,useState} from "react";
import Logo from "./Logo.png"
import { Link } from "react-router-dom";

function Navbar(){

    const [sideBar, setSideBar] = useState();


    const [HomeStyle, setHomeStyle ] = useState({
        color:" #7abb40",
    });

    const [AboutStyle, setAboutStyle] = useState({
        color:"white",
    });

    const [ServicesStyle, setServicesStyle] = useState({
        color:"white",
    });

    const [PortfolioStyle, setPortfolioStyle] = useState({
        color:"white",
    });

    const [TeamStyle, setTeamStyle] = useState({
        color:"white",
    })

    useGSAP(()=>{
            gsap.from(".container",{
                y:-100,
                opacity:0,
                duration:1
            })

            gsap.from(".container .a", {
                y:-50,
                opacity:0,
                stagger:0.2,
                duration:0.7,
                delay:1
            })
    })

    function showSideBar(){


        gsap.fromTo(".sta",{
            x:200,
            opacity:0
        },{
            x:0,
            opacity:1,
            duration:0.5,
            delay:0.5,
            stagger:0.2

        })

        setSideBar({
            transform:"translateX(0%)",
            transition:"1s all"
        })

    }

    function hideSideBar(){
        setSideBar({
            transform:"translateX(150%)",
            transition:"1s all"
        })

    }


    const NavSelector = (event)=>{

        if(event.target.id === "Home1"){
            document.title = "Palm Online Services"
            setHomeStyle({
                color:" #7abb40",
            });
            setAboutStyle({
                color:"white",
            });
            setServicesStyle({
                color:"white",
            });
            setPortfolioStyle({
                color:"white",
            });
            setTeamStyle({
                color:"white",
            }); 
            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });

        }else if(event.target.id === "About1"){
            document.title = "About Us - Palm Online Services";
            setHomeStyle({
                color:"white",
            });
            gsap.fromTo(".backBlur",{
                scale:0,
                duration:1
            },
            {
                scale:1,
                duration:1
            }
            );

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
            
            setAboutStyle({
                color:" #7abb40",
            });
            setServicesStyle({
                color:"white",
            });
            setPortfolioStyle({
                color:"white",
            });
            setTeamStyle({
                color:"white",
            }); 

            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });
        }
        else if(event.target.id === "Services1"){
            document.title = "Services - Palm Online Services";
            setHomeStyle({
                color:"white",
            });
            gsap.fromTo(".backBlur",{
                scale:0,
                duration:1
            },
            {
                scale:1,
                duration:1
            }
            );
            setAboutStyle({
                color:"white",
            });
            setServicesStyle({
                color:" #7abb40",
            });
            setPortfolioStyle({
                color:"white",
            });
            setTeamStyle({
                color:"white",
            }); 

            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });
        }
        else if(event.target.id === "Portfolio1"){
            document.title = "Portfolio - Palm Online Services";
            setHomeStyle({
                color:"white",
            });
            gsap.fromTo(".backBlur",{
                scale:0,
                duration:1
            },
            {
                scale:1,
                duration:1
            }
            );
            setAboutStyle({
                color:"white",
            });
            setServicesStyle({
                color:"white",
            });
            setPortfolioStyle({
                color:" #7abb40",
            });
            setTeamStyle({
                color:"white",
            }); 

            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });
        }
        else if(event.target.id === "OurTeam1"){
            document.title = "Our Team - Palm Online Services"
            setHomeStyle({
                color:"white",
            });
            setAboutStyle({
                color:"white",
            });
            setServicesStyle({
                color:"white",
            });
            setPortfolioStyle({
                color:"white",
            });
            setTeamStyle({
                color:" #7abb40",
            }); 
            gsap.fromTo(".backBlur",{
                scale:0,
                duration:1
            },
            {
                scale:1,
                duration:1
            }
            );

            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });
        }else if(event.target.id === "cont1"){
            document.title = "Contact Us - Palm Online Services"
            setHomeStyle({
                color:"white",
            });
            setAboutStyle({
                color:"white",
            });
            setServicesStyle({
                color:"white",
            });
            setPortfolioStyle({
                color:"white",
            });
            setTeamStyle({
                color:"white",
            }); 
            gsap.fromTo(".backBlur",{
                scale:0,
                duration:1
            },
            {
                scale:1,
                duration:1
            }
            );
            setSideBar({
                transform:"translateX(150%)",
                transition:"1s all"
            });
        }

    }

    // const MouseEnter = (event)=> {
    //     if(event.target.id === "Home1"){
    //         setHomeStyle({
    //             color:" #7abb40",
    //         })
    //     }else if(event.target.id === "About1"){
    //         setAboutStyle({
    //             color:" #7abb40",
    //         })
    //     }else if(event.target.id === "Services1"){
    //         setServicesStyle({
    //             color:" #7abb40",
    //         })
    //     }else if(event.target.id === "Portfolio1"){
    //         setPortfolioStyle({
    //             color:" #7abb40",
    //         })
    //     }else if(event.target.id === "OurTeam1"){
    //         setTeamStyle({
    //             color:" #7abb40",
    //         })
    //     }
    // }

    // const MouseLeave = (event)=> {
    //     if(event.target.id === "Home1"){
    //         setHomeStyle({
    //             color:" white",
    //         })
    //     }else if(event.target.id === "About1"){
    //         setAboutStyle({
    //             color:"white",
    //         })
    //     }else if(event.target.id === "Services1"){
    //         setServicesStyle({
    //             color:"white",
    //         })
    //     }else if(event.target.id === "Portfolio1"){
    //         setPortfolioStyle({
    //             color:"white",
    //         })
    //     }else if(event.target.id === "OurTeam1"){
    //         setTeamStyle({
    //             color:"white",
    //         })
    //     }
    // }
                 

    

    return (
        <>

        <div className="container a">

            <div className="img a">
                <img src={Logo} alt=""></img>
            </div>

            <ul className="links a">
               <Link className="Link" to="/"><li id="Home1" onClick={NavSelector}   style={HomeStyle}>Home</li></Link>
               <Link className="Link" to="/About"><li id="About1" onClick={NavSelector}    style={AboutStyle}>About Us</li></Link> 
               <Link className="Link" to="/Sevices"><li id="Services1" onClick={NavSelector}    style={ServicesStyle}>Services</li></Link> 
               <Link className="Link" to="/Portfolio"><li id="Portfolio1" onClick={NavSelector}    style={PortfolioStyle}>Portfolio</li></Link>
               <Link className="Link" to="/OurTeam"><li id="OurTeam1" onClick={NavSelector}    style={TeamStyle}>Our Team</li></Link> 

                <Link className="Link" to={"/ContactUs"}><button className="btn a" id="cont1" onClick={NavSelector}> <i className="fa-solid fa-phone" id="cont1"></i> <p  id="cont1">GET IN TOUCH</p></button></Link>

            </ul>

            <i className="fa-solid fa-bars a" onClick={showSideBar}></i>

        </div>

        <div className = "sideBar" style={sideBar}>

            <ul className="l2">
                <Link className="Link" to="/"><li className="sta" id="Home1"  onClick={NavSelector} style={HomeStyle}>Home</li></Link>    
                <Link className="Link" to="/About"><li className="sta" id="About1"   onClick={NavSelector} style={AboutStyle}>About Us</li></Link>    
                <Link className="Link" to="/Sevices"><li className="sta" id="Services1"   onClick={NavSelector} style={ServicesStyle}>Services</li></Link>    
                <Link className="Link" to="/Portfolio"><li className="sta" id="Portfolio1"   onClick={NavSelector} style={PortfolioStyle}>Portfolio</li></Link>
                <Link className="Link" to="/OurTeam"><li className="sta" id="OurTeam1"   onClick={NavSelector} style={TeamStyle}>Our Team</li></Link>   
                    {/* <button className="btn sta"> <i className="fa-solid fa-phone"></i> <p>GET IN TOUCH</p></button> */}
                <Link className="Link" to={"/ContactUs"}><button className="btn a sta" id="cont1" onClick={NavSelector}> <i className="fa-solid fa-phone" id="cont1"></i> <p  id="cont1">GET IN TOUCH</p></button></Link>

            </ul>

            <i className="fa-solid fa-xmark close sta" onClick={hideSideBar}></i>

        </div>
        
        </>
    )

}

export default Navbar;
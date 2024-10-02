import "./Footer.css";

import Logo from "./Logo.png"

function Footer(){
    return(
        <>
            <div className="Footer">
             
              <div className="FooterBox1">
                  
                  <div className="FLogo">
                      <img alt="/" src={Logo}></img>
                      <p id="Wel">Welcome to Palm Online Services, where creativity meets <br/> excellence..</p>

                      <div className="Social">
                         <i className="fa-brands fa-facebook-f"></i>
                         <i className="fa-brands fa-instagram"></i>
                         <i className="fa-brands fa-linkedin-in"></i>
                         <i className="fa-brands fa-youtube"></i>
                      </div>

                  </div>

                  <div className="FServices">
                       <h3>Services</h3>

                       <ul>
                          <li>Youtube Automation</li>
                          <li>Scripting</li>
                          <li>Video Editing</li>
                          <li>Graphic Design</li>
                          <li>Social Media Manage</li>
                          <li>Video Shooting</li>
                          <li>Digital Marketing</li>
                          <li>Search Engine Optimization</li>
                          <li>Website Developing</li> 
                       </ul>
                  </div>

                  <div className="FCompany"> 
                        <h3>Company</h3>

                        <ul>
                            <li>About us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Article & News</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>

                  </div>
            </div>

            <div className="FooterBox2">

            </div>
         </div>
        </>
    )
}

export default Footer;

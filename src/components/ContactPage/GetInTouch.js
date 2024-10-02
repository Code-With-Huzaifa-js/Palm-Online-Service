import "./GetInTouch.css";


function GetInTouch(){
    return(
        <>
          <div className="ContactBody">  

            <div className="information">
                <p id="GET">GET IN TOUCH</p>

                <h1 id="SEAM">Seamless Communication, <br/> Global Impact.</h1>

                <p id="QUES">Questions? Ideas? We’re Here to Listen.</p>

                <div className="ContactsLinks">

                    <div className="OURINFO">
                    <i className="fa-solid fa-location-dot icons"></i>
                       <div>
                          <h3 className="HEAD">LOCATION</h3>
                          <h4 className="Att">Attock, PAC Kamra-Pakistan</h4>
                       </div>
                    </div>

                    <div className="OURINFO">
                     <i className="fa-regular fa-envelope icons fix1"></i>
                       <div>
                          <h3 className="HEAD">EMAIL SUPPORT</h3>
                          <h4 className="Att">huzaifaktk0905@gmail.com</h4>
                       </div>
                    </div>

                    <div className="OURINFO">
                     <i className="fa-solid fa-phone icons fix2"></i>
                       <div>
                          <h3 className="HEAD">LET'S TALK</h3>
                          <h4 className="Att">Phone : +92 323 5709342</h4>
                       </div>
                    </div>

                    <div className="OURINFO">
                    <i className="fa-regular fa-clock icons fix2 posfix"></i>
                       <div>
                          <h3 className="HEAD">WORKING HOURS</h3>
                          <h4 className="Att">Monday - Sunday</h4>
                          <h4 className="Att">24 hrs</h4>
                       </div>
                    </div>

                </div>  

                <h4 id="Follow">Follow Our Social Media</h4>

                <div className="Social">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram ins"></i>
                    <i className="fa-brands fa-linkedin-in ins"></i>
                    <i className="fa-brands fa-youtube you"></i>
                </div>              
            </div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9844170426463!2d72.42046012914982!3d33.838512499097504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df191c6e80065b%3A0x430ca7211271e273!2sAPF%20Colony%20Gate!5e0!3m2!1sen!2s!4v1727725311709!5m2!1sen!2s" width="600" height="500" title="/   " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </>
    )
};

export default GetInTouch;
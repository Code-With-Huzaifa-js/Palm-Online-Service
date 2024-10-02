import "./Clients.css"; 

import React from "react"
function Clients(props){

    return (
        <> 
           <div className="Clbody">
             <div className="header">
                  <p id="hea">{props.title}</p>
                  <h2 id="lohea">Subtitle Video</h2>
              </div>

              <img alt="" src="https://filmuix.com/wp-content/uploads/2024/05/CPeCjI9zhFY-HD.webp"></img>

              <div className="upper">

                <div className="Cinfo">

                  <div className="client">
                    <p className="para">Client</p>
                    <p className="pa">Johnny</p>
                    <p className="para">Location</p>
                    <p className="pa">Johnny</p>
                  </div>

                  <div className="client">
                    <p className="para">Date</p>
                    <p className="pa">Johnny</p>
                    <p className="para">Rating</p>
                    <p className="pa">5 <i className="fa-solid fa-star"></i></p>
                  </div>
                </div>

                <div className="abt">
                  <p className="para1">We are proud to work with Jonny Shapland, one of our most polite and esteemed clients. We specialize in editing his talk head videos, ensuring each one is polished and engaging. Our ongoing collaboration with Jonny reflects our commitment to quality and client satisfaction.</p>

                  <button className="btn">LEARN MORE!</button>
                </div>                      

              </div>
           </div>
        </>
    )
}

export default Clients; 
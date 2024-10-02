import "./Call.css"
import { Link } from "react-router-dom";
function Call(){
    return(
        <>
          <div className="Call">

             <div className="CallBody">

                <div className="CallText">
                    <h1 id="Chead">Talk to our experts to grow your content <br/> faster than ever. </h1>
                </div>

                <div className="CallBtn">
                    <Link to="/ContactUs"><button id="Cbtn">GET FREE CONSULATION</button></Link>
                </div>
             </div>

          </div>
        </>
    )
}

export default Call;
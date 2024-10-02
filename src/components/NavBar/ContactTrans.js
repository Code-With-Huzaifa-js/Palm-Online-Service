import "./ContactTrans.css"
import { Link } from "react-router-dom";


function ContactTrans(props){

    return (
        <>
            <div className="ContMain">
                <div className="ContactContent" >
                    <p>JOIN US</p>

                    <h1>Interested in joining our team?</h1>

                    <p id="contText">If you’re passionate about content and want to help some of the world’s <br/> biggest creators grow, this is the place for you!</p>

                    <div className="btnPos"> 
                        <Link id="reText" to="/ContactUs"><button className="btn">CONTACT US</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContactTrans; 
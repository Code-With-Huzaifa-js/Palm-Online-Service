import "./FormVali.css";
import React, { useState } from "react";
import Submitted from "./Submitted";
import gsap from 'gsap';
import Loader from "./loader.gif"
import SuccessSound from "./Success.mp3";
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function FormVali(){


    const initialValues = {
        username : "",
        email: "",
        phone:"",
        subject:"",
        text:"",
    }

    let NameT = false;
    let EmailT = false;
    let PhoneT = false;
    let SubjectT = false;
    let TextT = false;

    const [UserInformation, setInformation] = useState(initialValues);

    const [NameErrors, setNameErrors] = useState(null);
    const [EmailError, setEmailError] = useState(null);
    const [PhoneError, setPhoneError] = useState(null);
    const [SubjectError, setSubjectError] = useState(null);
    const [TextError, setTextError] = useState(null);

    const [loader, setLoader] = useState(null);
    const [loaderStyle, setLoaderStyle] = useState({
        display:"none",
    })
    const [btnText, setBtnText] = useState("Send Message");
    const [popUp, setPopUp] = useState({
        display:"none",
        opacity:0
    });


    const inputValue = (e)=>{

        const {name, value} = e.target;

        setInformation({...UserInformation, [name]: value})
    }


    const onSubmit = async (event) => {
        event.preventDefault();

        if(UserInformation.username.length <= 0){
             setNameErrors("Please Enter your Full Name!");
             NameT = false;
        }else if(UserInformation.username.length <= 4){
            setNameErrors(" Full Name must be greater than 4 words! ");
            NameT = false;
        }else if(UserInformation.username.length > 40){
            setNameErrors(" Full Name must be smaller! ");
            NameT = false;
        }
        else{
            setNameErrors(null);
            NameT = true;
        }

        if(UserInformation.email.length <= 0){
            setEmailError("Please Enter your email!");
            EmailT = false;
        }else if(UserInformation.email.includes("!")){
            setEmailError("Please Enter Valid Email!");
            EmailT = false;
        }else{
            setEmailError(null) ;
            EmailT = true;
        }

        if(UserInformation.phone.length <= 0){
            setPhoneError("Please Enter your Phone number!");
            PhoneT = false;
        }else if(UserInformation.phone.length < 7){
            setPhoneError("Phone number must be greater than 7!");
            PhoneT = false;
        }else if(UserInformation.phone.length > 15){
            setPhoneError("Phone Number must be less than 15!");
            PhoneT = false;
        }
        else{
            setPhoneError(null);
            PhoneT = true;
        }

        if(UserInformation.subject.length <= 0){
            setSubjectError("Please Enter Subject!");
            SubjectT = false;
        }else{
            setSubjectError(null);
            SubjectT = true;
        }

        if(UserInformation.text.length <= 0){
            setTextError("Please enter your message!");
            TextT = false;
        }else if(UserInformation.text.length < 100){
            setTextError("Message must be greater than 100 words!");
            TextT = false;
        }else{
            setTextError(null);
            TextT = true;
        }



        if(NameT === true && EmailT === true && PhoneT === true && SubjectT === true && TextT === true){

            setLoaderStyle({
                display:"block"
            })

            setTimeout(()=>{
                setPopUp({
                    display:"flex",
                });

                const Sound = new Audio(SuccessSound);

                Sound.play();

                setInformation({
                    username:"",
                    email:"",
                    phone:"",
                    subject:"",
                    text:""
                });

            },2000);
            gsap.fromTo(".Pop .popBody",{
                y:-400,
                opacity:0,
                duration:0.5,
                delay:2
            },{
                y:0,
                opacity:1,
                duration:0.5,
                delay:2
            })

            setLoader(Loader);

            setBtnText(null);

            setTimeout(()=>{
                setLoader(null);
            },2000)
            const formData = new FormData(event.target);
    
            formData.append("access_key", "c40186fa-614a-4892-9dee-9776a05503ea");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
              console.log("Success", res);
            }
        }

  
      };

    const Goback = ()=>{

        setTimeout(()=>{
            setPopUp({
                display:"none"
            });
        },500)

        setBtnText("Send Message");

        gsap.fromTo(".Pop .popBody",{
            y:0,
            opacity:1,
            duration:0.5,
        },{
            y:-400,
            opacity:0,
            duration:0.5,
        })

    }

    return (
        <>

           <div className="FormBody">
               <div className="FormContainer">
                   
                   <form action="#" onSubmit={onSubmit}> 
                   <h1>Send Us Message</h1>
                       <div className="InputBox">
                            <div>
                                <input className="inp" maxLength={40} type="text"  name="username" onChange={inputValue} placeholder="Full Name" value={UserInformation.username}></input>
                                <p className="Error">{NameErrors}</p>
                            </div>
                            <div>
                                <input className="inp" name="email" maxLength={40} onChange={inputValue} value={UserInformation.email} type="email" placeholder="Email Address" autoComplete="off"></input>
                                <p className="Error">{EmailError}</p>
                            </div>

                       </div>


                       <div className="InputBox">
                            <div>
                                <input className="inp" name="phone" onChange={inputValue} value={UserInformation.phone} type="number" maxLength={15} placeholder="Phone Number" autoComplete="off"></input>
                                <p className="Error">{PhoneError}</p>
                            </div>

                            <div>
                                <input className="inp" name="subject" onChange={inputValue} value={UserInformation.subject} type="text" maxLength={40} placeholder="Subject" autoComplete="off"></input>
                                <p className="Error">{SubjectError}</p>
                            </div>
                       </div>

                       <div className="textArea">

                            <textarea  className="txe" name="text" onChange={inputValue} value={UserInformation.text} cols="59" placeholder="Your Message" maxLength={1000} autoComplete="off" rows="10"></textarea>
                            <p className="Error">{TextError}</p>
                       </div>

                       <button className="btn1" disabled={loader?true:false} type="submit"><img src={loader===null?null:loader} style={loaderStyle} alt="" width="100px"></img>{btnText}</button>

                   </form>

               </div>
           </div>

           {/* <Submitted  boxPop = {popBox} goback = {Goback} pop = {popUp}/> */}
           <Submitted goback = {Goback} pop = {popUp}/>
           
        </>
    )
}

export default FormVali;
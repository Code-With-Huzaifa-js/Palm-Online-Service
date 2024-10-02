import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import HomePage from "./HomePage.js";
import AboutHeader from "../AboutUs-Page/AboutHeader.js";
import AbtMain from "../AboutUs-Page/AbtMain.js";
import MembersMain from "../OurTeam/MembesMain.js";
import ClientsProject from "./ClientsProject.js";
import ReviewsCon from "./ReviewsCon.js";
import Evalution from "./Evolution.js";
import ExtraThing from "./ExtraThing.js";
import ContactTrans from "./ContactTrans.js";
import SkillBar from "../ServicesPage/SkillBar.js";
import GetInTouch from "../ContactPage/GetInTouch.js";
import FormVali from "../ContactPage/FormVali.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Grid from "./Grid.js";


function Main(){
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><HomePage/> <ContactTrans/> <Footer/></>,
    },

    {
      path:"/About",
      element:<><Navbar/> <AboutHeader Heading = "About Us"/> <AbtMain/> <ContactTrans/> <Footer/></>,
    },

    {
      path:"/Sevices",
      element:<><Navbar/><AboutHeader Heading = "Services" des = "Turning Visions into Reality"/> <Evalution/> <SkillBar/><ExtraThing/> <ContactTrans/> <Footer/></>,
    },

    {
      path:"/Portfolio",
      element:<><Navbar/><AboutHeader Heading = "Portfolio" des = "Experience the Filmuix Difference"/> <ClientsProject/> <ReviewsCon/> <ContactTrans/> <Footer/></>,
    },

    {
      path:"/OurTeam",
      element:<><Navbar/><AboutHeader Heading = "Team Behind the Magic" des = {`Our dedicated team of creative minds and strategic thinkers.`}/> <MembersMain/> <SkillBar/><ContactTrans/>  <Footer/></>,
    },
    {
      path:"/ContactUs",
      element:<><Navbar/><AboutHeader Heading = "Contact Us" des = "Start the conversation to established good relationship and business. "/> <GetInTouch/> <FormVali/> <Footer/></>,
    },
  ])
    return (
        <>

           <RouterProvider router={router}/>

        </>
    )
};

export default Main;
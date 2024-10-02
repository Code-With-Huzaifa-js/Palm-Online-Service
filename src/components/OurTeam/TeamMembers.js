import "./TeamMembers.css";

import TeamCards from "./TeamCards";
import Text from "./Text";

function TeamMembers(){
    return (
        <>

         <div className="Small">
            <Text head = "Meet Our Team" para = "Alone we can do so little, together we can do so much."/>

            <div className="TeamCards"> 
              <TeamCards Name = "Muhammad Huzaifa" Skill = "Full Stack Web Developer"/>
              <TeamCards Name = "Muhammad Maaz" Skill = "3D Artist"/>
              <TeamCards Name = "Umer Abbasi" Skill = "Video Editior"/>
              <TeamCards Name = "Daniyal Baloch" Skill = "Graphic Designer"/>
            </div>
          </div>
         
        </>
    )
}


export default TeamMembers;
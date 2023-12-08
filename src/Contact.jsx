import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";

export const Contact =()=>{




    return(

       <div style={{display:"flex"}}>

<div style={{marginLeft:"15px"}}><Link to="/Haveit"><li><MdOutlineFoodBank /> Have it? </li></Link>
     <Link to="/Takeaway"><li><RiTakeawayFill />  Take away?</li></Link></div>
     <div style={{marginLeft:"400px"}}>
        <Link to="/Feedback"><li>Feedback</li></Link>
        <Link to="/Needhelp"> <li>Need help?</li></Link>
     </div>
     
    
       </div>
    )
}

export const Haveit=()=>{

    return(

        <div><div>
            
            </div></div>
    )
}


export const Takeaway=()=>{

    return(

        <div>go through this</div>
    )
}
export const Feedback=()=>{


    return(
        <div>Write your valuable feed here for making our service better.</div>
    )
}

export const Needhelp =()=>{


    return(

        <div>Contact to our Customer careExecutive through these contacts.23456,234567,2345678</div>
    )
}
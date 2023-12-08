import React from "react";
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiLoginCircleFill } from "react-icons/ri";

export const Navbar= ()=>{


    return(
        <div style={{border:"1px solid black",display:"flex",justifyContent:"space-between",height:"90px"}}>
            <div > <img style={{fontSize:"0.3rem",height:"80px",padding:"0px"}} src="data:image/png;base64,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" alt="" /></div>
     <Link to="/"> <h6 style={{fontSize:"1rem"}}><IoIosHome /> Home</h6></Link>
        <Link to="/about"> <h6 style={{fontSize:"1rem"}}> <MdRoundaboutRight /> About</h6></Link>
        <Link to="/contact"> <h6 style={{fontSize:"1rem"}}><MdContactPhone /> Contact </h6></Link>
        <Link to="/user"> <h6 style={{fontSize:"1rem"}} > <BiSolidOffer /> Offer</h6 ></Link>
        <Link to="/login" style={{marginRight:"100px"}}> <h6 style={{fontSize:"1rem"}}><RiLoginCircleFill /> login</h6></Link>
        {/* <Link to="/Body">  <h4>Body</h4></Link> */}
         
        </div>
    )
}



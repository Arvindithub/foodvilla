import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Login = () => {


  
    return (
        <div style={{ border: "1px solid black", height: "508px", width: "450px", background: "rgb(255, 255, 255)",marginTop:"10px" }}>
            <div style={{ display: "flex" }}>
                <div style={{ width: "200px", marginTop: "40px", marginLeft: "30px" }}>
                    <div style={{ fontSize: "1.8rem" }} >Login</div>
                    <span>or</span>
                    <Link to="/Signup"> <h5 style={{ color: "rgb(240, 126, 5)" }}>create an account</h5></Link>
                    <div style={{ border: "1px solid black", width: "40px", height: "0px" }}></div> <br />
                </div>
                <div style={{ marginTop: "30px", marginLeft: "35px" }}><img class="jdo4W" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="100" height="105" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" /></div>
            </div>
            <div style={{ marginLeft: "30px" }}><input style={{ width: "300px", height: "60px", borderRadius: "5px", border: "0.1px solid black", paddingLeft: "20px" }} type="text" placeholder="Phone Number" /><br />
                <button style={{ marginTop: "10px", width: "323px", height: "50px", background: "rgb(240, 126, 5)", border: "none", color: "white", borderRadius: "5px" }}>LOGIN</button>
                <div>
                    <p style={{ fontSize: "0.9rem" }}>By clicking on Login, I accept the</p><Link to="/term">Terms & Conditions</Link>
                    <span>&</span>
                    <Link to="/Privacy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}


export const Signup = () => {

    let   [formData,setFormData]=useState(
        {
            phonenumber:"",
            name:"",
            email:""
        }
     )
    
     const handlechange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
      }
      console.log(formData)
    
      const handlesubmit = (e) => {
        e.preventDefault();
    
        console.log('Form submitted:', formData);
      };
      const newUser = { ...formData };
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
    return (

        <div style={{ border: "1px solid black", height: "555px", width: "450px" ,marginTop:"10px"}}>
            <div style={{ display: "flex" }}>
            <div style={{marginLeft:"30px"}}>
                
                <p style={{ marginTop: "50px", fontSize: "1.8rem" }}> sign up</p>
               <span>or </span>
                <Link to="/Login" style={{color:"rgb(240, 126, 5)"}}>  login to your account</Link>
                <div style={{ border: "1px solid black", width: "40px", height: "0px",marginTop:"10px" }}></div>
                </div>
              
                <div>
                    <img style={{ marginTop: "30px", marginLeft: "40px" }} class="jdo4W" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" width="100" height="105" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" />
                </div>
            </div>
            <div>
                <div style={{marginTop:"20px",marginLeft:"30px"}}>

                    <input style={{width:"280px",padding:"20px",border :"0.2px solid black"}} type="text" name="phonenumber" value={formData.phoneno}  onChange={handlechange} required placeholder="Phone Number" />
                    <input style={{width:"280px",padding:"20px"}}  type="text" name="name" value={formData.name} onChange={handlechange} required placeholder="Name" />
                    <input style={{width:"280px",padding:"20px",borderTop:"none"}} type="email" name="email" value={formData.email} onChange={handlechange} required placeholder="Email" />
                   
                    </div>
                <div style={{marginLeft:"30px"}}> 
                    <p>Have a referral code?</p>
                    <button style={{width:"320px",height:"60px",background:"rgb(240, 126, 5)",border:"none",borderRadius:"5px"}} onClick={handlesubmit}>CONTINUE</button>
                    <div><p>By creating an account, I accept the</p> <span><Link to="/Term">Terms & Conditions</Link></span> <span>&</span><Link to="/Privacy">Privacy & Policy</Link></div>
                </div>
            </div>
        </div >

    )
}



export const Term = () => {



    return (
        <div>Terms & condition all data</div>
    )
}

export const Privacy = () => {



    return (
        <div>Privacy & policy All datacfvgubhinjhnj all data</div>
    )
}
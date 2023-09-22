import React from "react";
import "../assets/Homepage.css";
import video from "../assets/video.mp4";
import { Link } from "react-router-dom";

import Navbarr from "./Navbar";
export default function Home(){
    return(
<div className="niv" >
    <div className="nav">
        <Navbarr/>
    </div>
   <div>
    <video className="image"  src={video} autoplay="true" loop muted></video>
   </div>
   <div className="move">
       <div className="black">
       </div>
       <div>
        <h1 className="event">
            <i>"Make any occassion</i>
        </h1>
       </div>
       <div>
        <h1 className="event1">
            <i>unforgettable"</i>
        </h1>
       </div>
       <div>
        <Link to='/pages/Register'><button className="cus">Customer</button></Link>
       </div>
       <div>
        <Link to='/pages/Register'><button className="em">Event Manager</button></Link>
       </div>
   </div>
</div>
    )
}
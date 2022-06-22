import React from "react";
import Navbar from "./Navbar";
import header_img from '../images/tourism.jpg'
export default function Header(){
    return(
        <div className="header" id="home">
            <Navbar/>
            <img src={header_img} alt="" className="header_img" />
        </div>
    )
}
import React from "react";
import logo from '../images/logo.jpg';

export default function Logo(){
    return(
        <div className="logos">
                <img src={logo} alt="logo" className="logo"/>
                <span className="logo_txt">Touristuz</span>
        </div>
    )
}
import React from "react";
import Menu from "../components/menu";

import Logo from "../components/logo";
export default function Navbar(){
    return(
        <div className="navbar">
            
                <Logo />
                <div className="menues">
                    <Menu name="Home" link="#home"/>
                    <Menu name="About" link="#about"/>
                    <Menu name="Services" link="#services"/>
                    <Menu name="Contact" link="#contact"/>
                </div>
                <Menu name="Login" link="login"/>
            
        </div>
    )
}
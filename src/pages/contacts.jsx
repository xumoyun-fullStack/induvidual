import React from "react";
import Logo from "../components/logo";
import Menu from "../components/menu";

export default function contacts(){
    return(
        <div className="contacts" id="contact">
            <div className="container contact_container">
                <div className="logo_container"><Logo /></div>
                <ul className="menues_contact">
                    <li><Menu name="Home" link="#home"/></li>
                    <li><Menu name="About" link="#about"/></li>
                    <li><Menu name="services" link="#services"/></li>
                    <li><Menu name="contact" link="#contact"/></li>
                </ul>

                <ul className="menues_contact">
                    <li>Address: Toshkent city</li>
                    <li>Phone: +998715555555</li>
                    <li>E-mail: tourist@gmail.com</li>
                    <li>Zip code: 20021</li>
                </ul>
            </div>
           
        </div>
    )
}
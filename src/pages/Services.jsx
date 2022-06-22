import React from "react";
import Service from "../components/service";

export default function Services(){
    return(
        <div className="container services" id="services">
            <h1 className="page-name">Services</h1>
            <div className="services_container">
                <Service name="Business" price="2200$" date="14 days" link="#"/>
                <Service name="Business" price="2200$" date="14 days" link="#"/>
                <Service name="Business" price="2200$" date="14 days" link="#"/>
                <Service name="Business" price="2200$" date="14 days" link="#"/>
                <Service name="Business" price="2200$" date="14 days" link="#"/>
                <Service name="Business" price="2200$" date="14 days" link="#"/>
            </div>
        </div>
    )
}
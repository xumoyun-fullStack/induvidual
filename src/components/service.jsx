import React from "react";
import business_img from '../images/bussiness.jpg';

export default function service({name, price, date, link}){
    return(
        <div>
            <a href={link} className="service_card">
                <p className="service_name">{name}</p>
                <img src={business_img} alt="" />
                <span className="service_price">Price: {price}</span>
                <span className="service_date">Date: {date}</span>
            </a>         
        </div>
    )
}
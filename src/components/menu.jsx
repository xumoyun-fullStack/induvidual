import React from "react";

export default function Menu({name, link}){
    return(
        <a href={link} className="menu">{name}</a>
    )
}
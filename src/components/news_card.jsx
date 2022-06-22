import React from "react";
import news_img from '../images/news.jpg';

export default function news_card({title, text}){
    return(
        <div className="news_card">
            <img src={news_img} alt="" />
            <span className="news_title">{title}</span>
            <span className="news_text">{text}</span>
            <a href="#" className="more">More</a>
        </div>
    )
}
import React from "react";
import NewsCard from "../components/news_card";

export default function news(){
    return(
        <div className="container news" id="news">
            <h1 className="page-name">News</h1>
            <div className="news_container">
                <NewsCard title="Breaking news" text="Something really really happened..."/>
                <NewsCard title="Breaking news" text="Something really really happened..."/>
                <NewsCard title="Breaking news" text="Something really really happened..."/>
                <NewsCard title="Breaking news" text="Something really really happened..."/>                
            </div>
            
        </div>
    )
}
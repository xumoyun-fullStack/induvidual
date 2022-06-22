import React from "react";
import office from '../images/office.jpg'

export default function About(){
    return(
        <div className="container" id="about">
            <h1 className="page-name">About</h1>
            <div className="about-page">
                <img src={office} alt="img" className="about-img" />
                By the early 21st century, international tourism had become one of the world’s most important economic activities, and its impact was becoming increasingly apparent from the Arctic to Antarctica. The history of tourism is therefore of great interest and importance. That history begins long before the coinage of the word tourist at the end of the 18th century. In the Western tradition, organized travel with supporting infrastructure, sightseeing, and an emphasis on essential destinations and experiences can be found in ancient Greece and Rome, which can lay claim to the origins of both “heritage tourism” (aimed at the celebration and appreciation of historic sites of recognized cultural importance) and beach resorts. The Seven Wonders of the World became tourist sites for Greeks and Romans.
                Pilgrimage offers similar antecedents, bringing Eastern civilizations into play. Its religious goals coexist with defined routes, commercial hospitality, and an admixture of curiosity, adventure, and enjoyment among the motives of the participants. Pilgrimage to the earliest Buddhist sites began more than 2,000 years ago, although it is hard to define a transition from the makeshift privations of small groups of monks to recognizably tourist practices. Pilgrimage to Mecca is of similar antiquity. The tourist status of the hajj is problematic given the number of casualties that—even in the 21st century—continued to be suffered on the journey through the desert. The thermal spa as a tourist destination—regardless of the pilgrimage associations with the site as a holy well or sacred spring—is not necessarily a European invention, despite deriving its English-language label from Spa, an early resort in what is now Belgium. The oldest Japanese onsen (hot springs) were catering to bathers from at least the 6th century. Tourism has been a global phenomenon from its origins.
            </div>
        </div>
    )
}
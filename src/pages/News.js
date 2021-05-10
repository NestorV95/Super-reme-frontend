//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//----------------------------------------- news page --------------------------------------------//
const News=()=>{
    return(
        <div>
            <h1>News Page</h1>
            <LogoCdt/>
            <NewsImages/>
            <NewsContent/>
            <BottomNav/>
        </div>
    )
}
//------------------------------------- news components ------------------------------------------//
const NewsImages=()=>{
    return(
        <div className="nic-div">
            <div>
                <p>need an array of images </p>
                <image src="" alt=""/>  
            </div>
            <div className="nrc-div">
                <ul>
                    <li>{"<<<"}</li>
                    <li>{"# of #"}</li>
                    <li>{">>>"}</li>
                </ul>
            </div>
        </div>
    )
}

const NewsContent=()=>{
    return(
        <div>
                <p>publish date</p>
                <p>news title</p>
                <p>news content</p>
        </div>
    )
}

export default News
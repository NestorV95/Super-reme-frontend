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
                <img src="https://assets.supremenewyork.com/211389/ma/ktFee9y6eFU.jpg" width='100px'></img>
                <image src="" alt=""/>  
            </div>
            {/* <div className="nrc-div">
                <ul>
                    <li>{"<<<"}</li>
                    <li>{"# of #"}</li>
                    <li>{">>>"}</li>
                </ul>
            </div> */}
        </div>
    )
}

const NewsContent=()=>{
    return(
        <div>
                <p>Super-reme/Timberland</p>
                <p>Super-reme has worked with Timberland on a new collection for Spring 2021.
                    The collection consists of an Anorak, Track Pant, Painter Pant, Crewneck, Camp Cap and Beanie.
                </p>
                <p>Available May 13th</p>
                <p>Available in Japan May 15th</p>
        </div>
    )
}

export default News
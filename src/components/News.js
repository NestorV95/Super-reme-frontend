import React from "react";
import BottomNav from "./BottomNav";
import LogoCdt from "./Logo";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
const NewsImages=()=>{
    return(
        <div className="nic-div">
            <div>
                <p>need an array of images </p>
                <image src="" alt=""/>  
            </div>
            <div className="nrc-div">
                {/*  arrow radios to navigate the array of images */}
                {/* # of # to keep track of image # */}
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

const News=()=>{
    return(
        <div>
            <h1>News Page</h1>
            <LogoCdt/>
            {/* render a log and current date time*/}
            {/* logo leads to home */}
            {/* render news image */}
            {/* render # of # slide show buttons below image*/}
            <NewsImages/>
            <NewsContent/>
            {/* render news content */}
            {/* render a navigation bar at bottom of page */}
            <BottomNav/>
        </div>
    )
}

export default News
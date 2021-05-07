import React from "react";
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  Link,
//   useRouteMatch,
//   useParams
} from "react-router-dom";

const HomeNav=()=>{
    return(
         <div>
           <ul>
               <li>
                   <Link to="/news">News</Link>
               </li>
               <li>
                   <Link to="/previews">Line Up Preview</Link>
               </li>
               <li>
                   <Link to="/lookbooks">Lookbook</Link>
               </li>
               <li>
                   <Link to="/shop">Shop</Link>
               </li>
               <li>
                   <Link to="/random">Random</Link>
               </li>
               <li>
                   <Link to="/about">About</Link>
               </li>
               <li>
                   <Link to="/stores">Stores</Link>
               </li>
               <li>
                   <Link to="/contact">Contact</Link>
               </li>
               <li>
                   <Link to="/mailinglist">Mailing List</Link>
               </li>
           </ul>
         </div>
    );
  }


export default HomeNav
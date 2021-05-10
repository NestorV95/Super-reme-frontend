//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//--------------------------------------- previews page ------------------------------------------//
const Previews =()=>{
    return(
        <div>
            <h1>Previews  Page</h1>
                {/* render logo with current date time */}
                {/* logo leads to home */}
                <LogoCdt/>
                {/* render index cards in grid below logo */}
                {/* index card leads to prewviews/item */}
                    {/* previews/item has product big amd center screen */}
                    {/* previews/item has logo at bottom left */}
                    {/* logo leads to home */}
                    {/* previews/item has item description below item*/}
                    {/* arrows to scim through images */}
                    {/*  back button leads to /previews*/}
                {/* render a navigation bar at bottom of page */}
                <BottomNav/>
        </div>
    )
}
//------------------------------------ previews components ---------------------------------------//
export default Previews 
//----------------------------------------- packages ---------------------------------------------//
import React from "react";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//------------------------------------------ styles ----------------------------------------------//

//---------------------------------------- stores page -------------------------------------------//
const Stores=()=>{
    return(
        <div>
            <h1>Stores page</h1>
            <LogoCdt/>
            {/* renders stores index cards onclick opens show card with info*/}
            <BottomNav/>
        </div>
    )
}
//-------------------------------------- stores components ---------------------------------------//
export default Stores
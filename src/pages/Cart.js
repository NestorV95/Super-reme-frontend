//----------------------------------------- packages ---------------------------------------------//
import React from 'react'
// import {Link} from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
import LogoCdt from "../components/Logo";
import BottomNav from '../components/BottomNav'
//------------------------------------------ styles ----------------------------------------------//

//----------------------------------------- cart page --------------------------------------------//
const Cart = () => {
    return (
        <div>
                <LogoCdt/>
                {/* /shop/cart renders list of items in cart*/}
                {/* each item entry has pic of item */}
                {/* each item has name and description */}
                {/* each item has remove button that removes item from cart */}
                {/* each item has price */}
                {/* subtotal displayed at bottom of list */}
                {/* renders keep shopping button and checkout button(leads to /shop/checkout) */}
                <BottomNav/>
        </div>
    )
}
//-------------------------------------- Cart components -----------------------------------------//

export default Cart

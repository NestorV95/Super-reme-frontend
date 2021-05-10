import React from 'react'
import BottomNav from './BottomNav'
import LogoCdt from './Logo'

const Cart = () => {
    return (
        <div>
                {/* logo at top with CDT, click leads to home */}
                <LogoCdt/>
                {/* /shop/cart renders list of items in cart*/}
                {/* each item entry has pic of item */}
                {/* each item has name and description */}
                {/* each item has remove button that removes item from cart */}
                {/* each item has price */}
                {/* subtotal displayed at bottom of list */}
                {/* renders keep shopping button and checkout button(leads to /shop/checkout) */}
                {/* navigation bar at bottom */}
                <BottomNav/>
        </div>
    )
}

export default Cart

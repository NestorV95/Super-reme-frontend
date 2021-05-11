//----------------------------------------- packages ---------------------------------------------//
import React from 'react'
//---------------------------------------- components --------------------------------------------//
import BottomNav from '../components/BottomNav'
import LogoCdt from '../components/Logo'
//--------------------------------------- checkout page ------------------------------------------//
const Checkout = () => {
    return (
        <div>
            <LogoCdt/>
            {/* shop/checkout renders billing/shipping & payment forms */}
            {/* cancel button(leads to /shop), process payment button(leads to shop/confirmation) */}
            {/* navbar at bottom */}
            <BottomNav/>
        </div>
    )
}
//------------------------------------ checkout components ---------------------------------------//
export default Checkout

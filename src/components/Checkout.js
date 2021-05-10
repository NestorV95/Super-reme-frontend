import React from 'react'
import BottomNav from './BottomNav'
import LogoCdt from './Logo'

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

export default Checkout

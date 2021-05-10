import React,{useState, useEffect} from 'react'
import Products from './Products.js'
import BottomNav from './BottomNav.js'
import {LogoCdt} from './Logo.js'



const Shop=()=>{
    
    return(
        <div className="shop-content">
            <h1>Shop Page</h1>
            <LogoCdt />
            <Products />
            {/* conditionally render cart next to index cards if cart.count > 0*/}
            {/* cart  displays item count, subtotal, view/edit cart button, & checkout button*/}
            {/* view/edit cart button leads to shop/cart*/}
            {/* checkout button leads to shop/checkout */}
            <BottomNav/>
        </div>
    )
}

const Cart=()=>{
    
}

export default Shop
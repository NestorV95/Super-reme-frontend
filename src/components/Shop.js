import React,{useState, useEffect} from 'react'
import BottomNav from './BottomNav.js'
import {LogoCdt} from './Logo.js'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// const useFetch=(url)=>{
//     const [status, setStatus] = useState('idle')
//     const [data,setData] = useState([]);

//     useEffect(()=>{
//         if (!url) return;
//         const fetchData = async () =>{
//             setStatus('fetching')
//             const res = await fetch(url)
//             const data = await res.json()
//             setData(data)
//             setStatus('fetched')
//     }

//         fetchData();
//     }, [url]);

//     return {status,data}
// }

const Shop=(query)=>{
    const [products, setProducts] = useState([])

    useEffect(
        fetch('http//localhost:3001/products')
        .then(res=>res.json)
        .then(data=>{
            console.log(data)
         })
    )
   

    return(
        <div>
            <h1>Shop Page</h1>
            {/* render logo with current date time */}
            {/* logo leads to home */}
            <LogoCdt />
            {/* interpolate through fetch  and render each item*/}
            {/* for each product render a card */}
            {/* card links to /shop/item*/}
                {/* shop/item renders logo with cdt at top */}
                {/* conditonally renders cart etc. */}
                {/* renders image of item */}
                {/* renders item name, description, price*/}
                {/* conditionally renders add to cart button or sold out */}
                {/* renders keep shopping button, leads to /shop */}
                {/* navigation bar at bottom */}
            {/* conditionally render cart next to index cards if cart.count > 0*/}
            {/* cart  displays item count, subtotal, view/edit cart button, & checkout button*/}
            {/* view/edit cart button leads to shop/cart*/}
                {/* logo at top with CDT, click leads to home */}
                {/* /shop/cart renders list of items in cart*/}
                {/* each item entry has pic of item */}
                {/* each item has name and description */}
                {/* each item has remove button that removes item from cart */}
                {/* each item has price */}
                {/* subtotal displayed at bottom of list */}
                {/* renders keep shopping button and checkout button(leads to /shop/checkout) */}
                {/* navigation bar at bottom */}
            {/* checkout buutton leads to shop/checkout */}
                {/* shop/checkout renders billing/shipping & payment forms */}
                {/* cancel button(leads to /shop), process payment button(leads to shop/confirmation) */}
                {/* navbar at bottom */}
                <BottomNav/>
        </div>
    )
}

export default Shop
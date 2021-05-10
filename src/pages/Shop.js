//----------------------------------------- packages ---------------------------------------------//
import React from "react";
import { Link } from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
import useFetch from '../helpers/useFetch'
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//------------------------------------------ styles ----------------------------------------------//

//----------------------------------------- shop page --------------------------------------------//
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
//--------------------------------------- shop components ----------------------------------------//
const Products = () => {
    let {data, isPending, error} = useFetch('http://localhost:3001/products')
    return (
        <div className="products-content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(product=>{
                return <ProductCard key={product.id} product={product}/>
            })}   
        </div>
    )
}

const ProductCard = ({product}) =>{
    let {id, image, name} = product
    return(
        <div className="product-card" style={{display: 'inline-block',margin: '.5rem'}}>
            <Link to={`/shop/${id}`}>
                <img src={image} alt={name} style={{height:'10rem',width:'10rem'}}></img>
            </Link>
        </div>
    )
}

export default Shop
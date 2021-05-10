import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'

import BottomNav from './BottomNav'
import LogoCdt from './Logo'
import useFetch from './useFetch'


const Product = () => {
    const {id} = useParams()
    const {data:product, isPending, error} = useFetch(`http://localhost:3001/products/${id}`)
    
    return (
        <div className="product-page">
            <div className="product-logo">
                <LogoCdt/>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            <div className="product-cart">
                {/* conditonally renders cart etc. */}
            </div>
            {product && <ProductCard product={product}/>}
            
            <div className="product options">
                {/* conditionally renders add to cart button or sold out */}
                <button>Add to Cart</button>
                <button>Sold out</button>
                {/* renders keep shopping button, leads to /shop */}
                <button>Keep shopping</button>
            </div>
            <BottomNav/>
        </div>
    )
}

const ProductCard = ({product})=>{
    let {image, name, description, price} = product
    return(  
    <div className="product-card">
        <div className="product-image">
            {/* renders image of item */}
            <img src={image} alt={name}></img>
        </div>
        <div className="product-details">
            {/* renders item name, description, price*/}
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p> 
        </div>
    </div>
    )
}

export default Product

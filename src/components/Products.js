import React from 'react'
import { Link } from "react-router-dom";
import useFetch from './useFetch'

export const Products = () => {
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

export default Products;
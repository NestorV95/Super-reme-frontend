//----------------------------------------- packages ---------------------------------------------//
import React,{useState, useContext} from "react";
//---------------------------------------- components --------------------------------------------//
import useFetch from '../helpers/useFetch'
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
import { DataContext } from "../App";
//------------------------------------------ styles ----------------------------------------------//
import '../styles/Shop.css'
//----------------------------------------- shop page --------------------------------------------//
const Shop=(props)=>{
    const {cartValue} = useContext(DataContext)
    const [selection,setSelection]=useState({})
    const [display,setDisplay]=useState(false)


    const pickProduct = (product)=>{
        setSelection(product)
        setDisplay(true)
    }

    const hideProduct = ()=>{
        setSelection({})
        setDisplay(false)
    }

    let {data} = useFetch('http://localhost:3000/api/v1/products')
    return(
        <div className="shop-content">
            <LogoCdt />
            {data && <Products products={data} select={pickProduct} />}
            {display !== true? null : <ProductShow product={selection} hide={hideProduct}/>}
            {cartValue.length === 0? null : <MiniCart />}
            <BottomNav/>
        </div>
    )
}
//--------------------------------------- shop components ----------------------------------------//
const Products = ({products, select}) => {


    return (
        <div className="pi-outer">
            <ul className="pi-inner">   
            {products.map(product=>{
                return <ProductIndex key={product.id} product={product} select={select}/>
            })}
            </ul> 
        </div>
    )
}

const ProductIndex = ({product,select}) =>{
    let {image, name} = product
    return(
        <li className="pi-card" onClick={()=>select(product)}>
            <img className="pi-image"src={image} alt={name}></img>
        </li>
    )
}

const ProductShow = ({product,hide}) => {
    const {dispatchValue} = useContext(DataContext)
    const {image, name, description, price} = product

    const addToCart = () =>{
        dispatchValue({type: 'ADD_PRODUCT', product: product, price: product.price })
    }
    return(  
    <div className="ps-content">
        <div className="ps-ic">
            <img className="ps-img"src={image} alt={name}></img>
        </div>
        <div className="ps-details">
            <p className="ps-name">{name}</p>
            <p className="ps-desc">{description}</p>
            <p className="ps-price">${price}</p> 
        </div>
        <div className="ps-options">
            <button className="ps-add" onClick={()=>addToCart({product})}>add to cart</button>
            <button className="ps-hide" onClick={()=>hide()}>keep shopping</button>
            <p className="ps-sh">* free shipping on orders over $1000 some exceptions may apply</p>
        </div>
    </div>
    )
}

const MiniCart = () =>{
    const {cartValue,subtotalValue} = useContext(DataContext)
    let count = cartValue.length

    return(
        
        <div className="mini-cart">
            <p className="mc-cnt">{count===1? `${count} item in cart`: `${count} items in cart`}</p>
            <p className="mc-st">subtotal <span style={{color:'black', fontSize: '1em'}}>${subtotalValue}</span></p>
            <button className="mc-vc">view cart</button>
            <button className="mc-co">checkout</button>
        </div>
       
    )
    
}



export default Shop
//----------------------------------------- packages ---------------------------------------------//
import React,{useState} from "react";
//---------------------------------------- components --------------------------------------------//
import GetFetch from '../helpers/GetFetch'
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//------------------------------------------ styles ----------------------------------------------//
import '../styles/Shop.css'
//----------------------------------------- shop page --------------------------------------------//
const Shop=(props)=>{
    const [selection,setSelection]=useState({})
    const [display,setDisplay]=useState(false)
    const [cart, setCart]=useState([])
    const [subtotal, setSubtotal] =useState(0)

    const pickProduct = (product)=>{
        setSelection(product)
        setDisplay(true)
    }

    const hideProduct = ()=>{
        setSelection({})
        setDisplay(false)
    }

    const addToCart = choice =>{

        console.log(choice.product)
        const newCart = [...cart, choice.product]
        const newSub = subtotal + choice.product.price
        // dispatch({type: ACTIONS})
        setCart(newCart)
        setSubtotal(newSub)
    }

    let data = GetFetch('http://localhost:3000/api/v1/products')
    console.log(data)
    return(
        <div className="shop-content">
            <LogoCdt />
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
            {data && <Products products={data} select={pickProduct} />}
            {display !== true? null : <ProductShow product={selection} add={addToCart} hide={hideProduct}/>}
            {cart.length === 0? null : <MiniCart cart={cart} subtotal={subtotal}/>}
            <BottomNav/>
        </div>
    )
}
//--------------------------------------- shop components ----------------------------------------//
const Products = ({products, select}) => {
    console.log(products)
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

const ProductShow = ({product,hide,add}) => {
    let {image, name, description, price} = product
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
                
                <button className="ps-add" onClick={()=>add({product})}>add to cart</button>
                <button className="ps-hide" onClick={()=>hide()}>keep shopping</button>
                <p className="ps-sh">* free shipping on orders over $1000 some exceptions may apply</p>
            </div>
    </div>
    )
}

const MiniCart = ({cart, subtotal}) =>{
    let count = cart.length
    return(
        
        <div className="mini-cart">
            <p className="mc-cnt">{count===1? `${count} item in cart`: `${count} items in cart`}</p>
            <p className="mc-st">subtotal <span style={{color:'black', fontSize: '1em'}}>${subtotal}</span></p>
            <button className="mc-vc">view cart</button>
            <button className="mc-co">checkout</button>
        </div>
       
    )
    
}



export default Shop
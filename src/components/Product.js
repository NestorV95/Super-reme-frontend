//----------------------------------------- packages ---------------------------------------------//
// import React from 'react' //,{useState, useEffect}
// import { useParams } from 'react-router'
//---------------------------------------- components --------------------------------------------//
// import BottomNav from '../components/BottomNav'
// import LogoCdt from '../components/Logo'
// import useFetch from '../helpers/useFetch'
//------------------------------------------ styles ----------------------------------------------//

//---------------------------------------- product page ------------------------------------------//
// const Product = () => {
//     const {id} = useParams()
//     const {data:product, isPending, error} = useFetch(`http://localhost:3001/products/${id}`)
    
//     return (
//         <div className="product-page">
//             <div className="product-logo">
//                 <LogoCdt/>
//             </div>
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div>}
//             <div className="product-cart">
//                 {/* conditonally renders cart etc. */}
//             </div>
//             {product && <ProductCard product={product}/>}
            
//             <div className="product options">
//                 {/* conditionally renders add to cart button or sold out */}
//                 <button>Add to Cart</button>
//                 <button>Sold out</button>
//                 {/* renders keep shopping button, leads to /shop */}
//                 <button>Keep shopping</button>
//             </div>
//             <BottomNav/>
//         </div>
//     )
// }
// //------------------------------------- product components ---------------------------------------//
// const ProductCard = ({product})=>{
//     let {image, name, description, price} = product
//     return(  
//     <div className="product-card">
//         <div className="product-image">
//             <img src={image} alt={name}></img>
//         </div>
//         <div className="product-details">
//             <p>{name}</p>
//             <p>{description}</p>
//             <p>{price}</p> 
//         </div>
//     </div>
//     )
// }

// export default Product

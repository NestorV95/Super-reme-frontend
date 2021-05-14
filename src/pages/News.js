//----------------------------------------- packages ---------------------------------------------//
import React,{useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
//---------------------------------------- components --------------------------------------------//
import BottomNav from "../components/BottomNav";
import LogoCdt from "../components/Logo";
//----------------------------------------- styles -----------------------------------------------//

//----------------------------------------- news page --------------------------------------------//
const News=()=>{
    return(
        <div>
            <h1>News Page</h1>
            <LogoCdt/>
            <NewsImages/>
            <NewsContent/>
            <BottomNav/>
        </div>
    )
}
//------------------------------------- news components ------------------------------------------//
const niArray=['https://media.blogto.com/articles/8f6e-20150721-Food-Cart.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
'https://external-preview.redd.it/vox3vtYMnDdEf5iXtvPRNKYvO7PBg5FrIpv86GqI5iI.jpg?auto=webp&s=370d05c1a2fce95a2862b32f9d9908c425fdad4f',
'https://external-preview.redd.it/kvR_7ebf63c-fjmfpO8thgNVQ_kenTUk7pnvFSsaYvY.jpg?auto=webp&s=8b69f2724a2495c71e64f44b4c04eeb69eb86100',
'https://i.redd.it/890omh34erc11.jpg']



const NewsImages=()=>{
    const [index,setIndex] = useState(0)

    const increase =()=>{
        if(index < niArray.length-1){
            const newIndex = index + 1
        setIndex(newIndex) 
        }
    }
    const decrease = ()=>{
        if(index > 0){
           const newIndex = index - 1
        setIndex(newIndex) 
        }
    } 
    return(
        <div className="nic-div">
            <div>
                <img src={`${niArray[index]}`} width='100px' alt=""></img>
            </div>
            <div className="nrc-div">
                <ul>
                    <li>  <FaArrowLeft onClick={()=>decrease()}/> </li>
                    <li>{`${index+1} of ${niArray.length}`}</li>
                    <li> <FaArrowRight onClick={()=>increase()}/> </li>
                </ul>
            </div>
        </div>
    )
}

const NewsContent=()=>{
    return(
        <div className="nc-div">
                <p className="nc-dt" > 05/11/2021</p>
                <p className="nc-tt">X Super-reme© x Hot-dogs© X</p>
                <p className="nc-st">Here at Super-reme we're happy to announce </p>
                <p className="nc-st">we will be launching a new line of designer. </p>
                <p className="nc-st">Our collection will consist of Fall Park </p>
                <p className="nc-st">Branks, Hench's yellow mustard, sauerkraut, </p> 
                <p className="nc-st">diced onions Bumseam white bread and many</p>
                <p className="nc-st"> more of your favorite struggle essentials. </p>
                
                <p className="nc-ava"> Available May 14th</p>
                <p className="nc-avj">Available in Japan May 15th</p>
        </div>
    )
}

export default News
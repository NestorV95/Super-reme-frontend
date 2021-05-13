//----------------------------------------- packages ---------------------------------------------//
import React,{useReducer} from "react";
// eslint-disable-next-line
import {BrowserRouter as Router,Switch,Route, withRouter,} from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
// eslint-disable-next-line
import UseFetch from './helpers/UseFetch'
//------------------------------------------ pages -----------------------------------------------//
import Home from "./pages/Home.js"
import News from "./pages/News.js"
import Previews from "./pages/Previews.js"
import LookBooks from "./pages/LookBooks.js";
import Shop from "./pages/Shop.js"
import Cart from "./pages/Cart.js"
import Checkout from "./pages/Checkout.js"
import Random from "./pages/Random.js"
import About from "./pages/About.js"
import Stores from "./pages/Stores.js"
import Contact from "./pages/Contact.js"
import MailingList from "./pages/MailingList.js"
//----------------------------------------- styles -----------------------------------------------//
import "./styles/App.css"
//--------------------------------------- application --------------------------------------------//
const ACTIONS={
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT:'REMOVE_PRODUCT'
  }


const cartReducer=(state,action)=>{
    switch(action.type){
      case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      case ACTIONS.REMOVE_PRODUCT:
        let rmvProduct = state.cartt.findIndex(prod=> prod.id === action.payload.id)
        let newCart = state.cart.splice(rmvProduct,1)[0]
      return {...state, cart: newCart}
      default: return state
    }
  }


const App = props =>{

  const userReducer=(state, action)=>{
    switch(action.type){
      case ACTIONS.LOG_IN:
      return {
        ...state, currUser: action.payload
      }
      case ACTIONS.LOG_OUT:
      return {...state, currUser: {}}
      default: return state
    }
  }

  // eslint-disable-next-line
  const [currUser, currUserDispatch] = useReducer(userReducer,{})
  // eslint-disable-next-line
  const [cart, cartDispatch] = useReducer(cartReducer,[])
  
  
  

  const CreateUser = (user)=>{
    console.log(user)
    const req={
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer <token>'},
      body: JSON.stringify({user:user})
    }
    console.log(req)
    fetch('http://localhost:3000/api/v1/users',req)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    
    // currUserDispatch(data)
  }

  // missing a few steps before i can complete this. 
  const LogOn=({log})=>{
    // let {data, isPending, error} = useFetch(`http://localhost:3000/api/v1/users/${log.id}`)
    // currUserDispatch(ACTIONS.LOG_IN, data)
    console.log(log)
  }


    return(
      <div className="App">
    {/* ---------------------------------- client routes ------------------------------------- */}
        <Router>
          <Switch >
            <Route path="/" exact component={()=> <Home actions={ACTIONS} logOn={LogOn} createUser={CreateUser}/>}/>
            <Route path="/news" component={()=> <News/>}/>
            <Route path="/previews" component={()=> <Previews/>}/>
            <Route path="/lookbooks" component={()=> <LookBooks/>}/>
            <Route path="/shop" exact component={()=> <Shop/>} />
            {/* <Route path="/shop/:id" exact component={Product}/> */}
            <Route path="/cart" component={()=> <Cart/>} />
            <Route path="/checkout" component={()=> <Checkout/>}/>
            <Route path="/random" component={()=> <Random/>}/>
            <Route path="/about" component={()=> <About/>}/>
            <Route path="/stores" component={()=> <Stores/>} />
            <Route path="/contact" component={()=> <Contact/>} />
            <Route path="/mailinglist" component={()=> <MailingList/>}/>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
//----------------------------------------- packages ---------------------------------------------//
import React,{Fragment, useReducer, createContext, useMemo} from "react"; //
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
//---------------------------------------- components --------------------------------------------//
// import Routes from './components/Routes'
//------------------------------------------ pages -----------------------------------------------//
import Home from "./pages/Home.js"
import News from "./pages/News.js"
import Shop from "./pages/Shop.js"
import Cart from "./pages/Cart.js"
import Checkout from "./pages/Checkout.js"
import About from "./pages/About.js"
import Stores from "./pages/Stores.js"
import Contact from "./pages/Contact.js"
import MailingList from "./pages/MailingList.js"
//----------------------------------------- styles -----------------------------------------------//
import "./styles/App.css"
//--------------------------------------- application --------------------------------------------//
export const DataContext = createContext()

const App = props =>{
  const initialData = {currUser:{}, token:null,  loggedIn:false, cart:[], subtotal: 0}
  
  const reducer=(state, action)=>{
    switch(action.type){
      case 'LOG_IN':
        return {...state, currUser: action.user,token: action.jwt,loggedIn: true}
      case 'LOG_OUT':
        return {...state, currUser:{},token:null,loggedIn: false}
      case 'GET_CART':
        return {...state, cart: action.cart, subtotal: action.subtotal}
      case 'ADD_PRODUCT':
        const newSubtotal = state.subtotal + action.price
        console.log(state.subtotal, action.price, newSubtotal)
        return {...state, cart: [...state.cart, action.product], subtotal: newSubtotal}
      case 'REMOVE_PRODUCT':
        const rmvProduct = state.cart.findIndex(prod=> prod.id === action.payload.id)
        const newCart = state.cart.splice(rmvProduct,1)[0]
        return {...state,cart: newCart}
      default: 
        return state
    }
  }

  const [data, dispatch] = useReducer(reducer, initialData)
  const {currUser, loggedIn, cart, subtotal} = data 
 
  const currUserValue = useMemo(()=>currUser,[currUser])
  const loggedInValue = useMemo(()=>loggedIn,[loggedIn])
  const cartValue = useMemo(()=>cart,[cart])
  const dispatchValue = useMemo(()=>dispatch,[dispatch])
  const subtotalValue = useMemo(()=>subtotal,[subtotal])

  return(
    <div className="App">
      <DataContext.Provider value={{currUserValue,loggedInValue,cartValue, subtotalValue, dispatchValue}}>
        <Routes />
      </DataContext.Provider>
    </div>
  )
}



const Routes =()=>{
  return(
    <Fragment>
      <Router>
        <Switch >
          <Route path="/" exact component={()=> <Home />}/>
          <Route path="/news" component={()=> <News/>}/>
          <Route path="/shop" exact component={()=> <Shop/>} />
          <Route path="/cart" component={()=> <Cart/>} />
          <Route path="/checkout" component={()=> <Checkout/>}/>
          <Route path="/about" component={()=> <About/>}/>
          <Route path="/stores" component={()=> <Stores/>} />
          <Route path="/contact" component={()=> <Contact/>} />
          <Route path="/mailinglist" component={()=> <MailingList/>}/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
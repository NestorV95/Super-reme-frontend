// //----------------------------------------- packages ---------------------------------------------//
// import React from "react"; //, useMemo
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// //------------------------------------------ pages -----------------------------------------------//
// import Home from "../pages/Home.js";
// import News from "../pages/News.js";
// import Previews from "../pages/Previews.js";
// import LookBooks from "../pages/LookBooks.js";
// import Shop from "../pages/Shop.js";
// import Cart from "../pages/Cart.js";
// import Checkout from "../pages/Checkout.js";
// import Random from "../pages/Random.js";
// import About from "../pages/About.js";
// import Stores from "../pages/Stores.js";
// import Contact from "../pages/Contact.js";
// import MailingList from "../pages/MailingList.js";
// // --------------------------------------- client routes ---------------------------------------- //
// const Routes = ({ LogOn, CreateUser, logOut, loggedIn }) => {
//   return (
//     <>
//     <Router>
//       <Switch>
//         <Route path="/" exact omponent={() => (
//             <Home logOn={LogOn} createUser={CreateUser} logOut={logOut} loggedIn={loggedIn}/>
//         )}/>
//         <Route path="/news" component={() => <News />} />
//         <Route path="/previews" component={() => <Previews />} />
//         <Route path="/lookbooks" component={() => <LookBooks />} />
//         <Route path="/shop" exact component={() => <Shop />} />
//         <Route path="/cart" component={() => <Cart />} />
//         <Route path="/checkout" component={() => <Checkout />} />
//         <Route path="/random" component={() => <Random />} />
//         <Route path="/about" component={() => <About />} />
//         <Route path="/stores" component={() => <Stores />} />
//         <Route path="/contact" component={() => <Contact />} />
//         <Route path="/mailinglist" component={() => <MailingList />} />
//       </Switch>
//     </Router>
//     </>
//   );
// };

// export default Routes
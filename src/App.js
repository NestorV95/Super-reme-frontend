//----------------------------------------- packages ---------------------------------------------//
import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
//---------------------------------------- components --------------------------------------------//

//------------------------------------------ pages -----------------------------------------------//
import Home from "./pages/Home.js"
import News from "./pages/News.js"
import Previews from "./pages/Previews.js"
import LookBooks from "./pages/LookBooks.js";
import Shop from "./pages/Shop.js"
import Product from "./pages/Product.js"
import Random from "./pages/Random.js"
import About from "./pages/About.js"
import Stores from "./pages/Stores.js"
import Contact from "./pages/Contact.js"
import MailingList from "./pages/MailingList.js"
//----------------------------------------- styles -----------------------------------------------//
import "./App.css"
//--------------------------------------- application --------------------------------------------//
const App = () => {

  return(
    <div className="App">
{/*------------------------------------- client routes ------------------------------------------*/}
      <Router>
        <Switch >
          <Route path="/news" component={News}/>
          <Route path="/previews" component={Previews}/>
          <Route path="/lookbooks" component={LookBooks}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" exact component={Product}/>
          <Route path="/random" component={Random}/>
          <Route path="/about" component={About} />
          <Route path="/stores" component={Stores} />
          <Route path="/contact" component={Contact} />
          <Route path="/mailinglist" component={MailingList}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
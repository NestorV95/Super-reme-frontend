
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from "./components/Home.js"
import News from "./components/News.js"
import Previews from "./components/Previews.js"
import LookBooks from "./components/LookBooks.js";
import Shop from "./components/Shop.js"
import Random from "./components/Random.js"
import About from "./components/About.js"
import Stores from "./components/Stores.js"
import Contact from "./components/Contact.js"
import MailingList from "./components/MailingList.js"

const App = () => {
  return(
    <div className="app">
      <Router>
        <Switch >
          <Route path="/news" component={News}/>
          <Route path="/previews" component={Previews}/>
          <Route path="/lookbooks" component={LookBooks}/>
          <Route path="/shop" component={Shop}/>
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
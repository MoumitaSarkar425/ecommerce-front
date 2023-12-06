import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from './component/layout/Header/Header.js';
import webFont from 'webfontloader';
import React from 'react';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js';
import Products from "./component/Product/Products.js";


import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  React.useEffect(()=>{
    webFont.load({
      google:{
        families:["Smooch"]
      }
    })
  },[])
  return (
    <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact  path="/product/:id" component={ProductDetails}></Route>
            <Route exact  path="/products" component={Products}></Route>
            <Route path="/products/:keyword" component={Products} />
          </Switch>
        <Footer/>
    </Router>
    
  );
}

export default App;

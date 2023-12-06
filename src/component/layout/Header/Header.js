import React, { useState } from 'react';
// import {ReactNavbar} from "overlay-navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  let history = useHistory();

  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    if(keyword.trim()){
      history.push(`/products/${keyword}`);
    }else{
      history.push("/products");
    }
  };
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" to="/">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">About</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">My Profile</a>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Register</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={searchSubmitHandler}>
          <input className="form-control mr-sm-2" type="text" placeholder="Search a Product ..." 
          onChange={(e) => setKeyword(e.target.value)}/>
          <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Search" />
        </form>
      </div>
    </nav>   
  )
}


export default Header;
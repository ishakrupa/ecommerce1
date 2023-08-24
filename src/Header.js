import React from "react";
import FitbitIcon from "@mui/icons-material/Fitbit";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import {BrowserRouter as Router ,Link } from "react-router-dom";
import  {useStateValue}  from "./StateProvider";


function Header() {


 const [{basket},dispatch] =  useStateValue();



  return (
<Router>



      <div className="header__panel">
     
      <div className="header__logo">
        <FitbitIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__title">Blush Fashions</h2>

        
  
        </div>
        
    
 

        <div className="search">
          <input type="text" className="searchInput" />{" "}
          <SearchIcon className="searchIcon" />
        </div>
        <div className="nav">
          <div className="nav-items">
            <span className="nav-itemsone">Hello Guest</span>
            <span className="nav-itemstwo">Sign-In</span>
          </div>
          <div className="nav-items">
            <span className="nav-itemsone">Your </span>
            <span className="nav-itemstwo">Shop</span>
          </div>
          

          <Link to= "/checkout" style={{textDecoration: "none"}}>
            <div className="nav-items">
              <ShoppingCartIcon className="nav__itemBasket" />
              <span className="nav-itemstwo nav__Basketcount">{basket.length}</span>
            </div>
          </Link>

          
          </div>
        
   
   
          </div>

    </Router>

  
  );
};

export default Header;

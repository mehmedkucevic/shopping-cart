import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppContext from "../../context/AppContext"; // Assuming you have the correct path to your AppContext file

export default function Navbar() {
  const { cart } = useContext(AppContext); // Fixed the parentheses around `cart`

  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/logo.png").default} // Added `.default` to the `require` statement
          alt="logo"
          className="logo"
        />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <div className="cart-icon-container">
            <div className="cart-icon">
              <p>{cart.length}</p>
            </div>
          </div>
          <ShoppingCartIcon
            className="cartIcon"
            fontSize="large"
            style={{ width: "100px", height: "100px" }}
          />
        </NavLink>
      </div>
    </header>
  );
}

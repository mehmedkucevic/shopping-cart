import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import Homepage from  "./components/Homepage/Homepage"
import Cart from "./components/Cart/Cart"



function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{minHeight:"70vh"}}>
        <Routes>
          <Route path= "/" element = {<Homepage/>}/>
          <Route path= "/products" element = {<Products/>}/>
          <Route path= "/cart" element = {<Cart/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

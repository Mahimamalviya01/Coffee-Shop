// import React from 'react'
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Collecton from './Collecton'
// import Contact from './Contact'

// function Navv() {
//   return (
// <div>
//         <BrowserRouter>
//          <NavLink to={"/"}>Home</NavLink><br></br>
//          <NavLink to={"/about"}>About_Us</NavLink><br></br>
//          <NavLink to={"/collection"}>Coffee_Collection</NavLink><br></br>
//          <NavLink to={"/contact"}>Contact_Us</NavLink><br></br>

// <Routes>
// <Route path='/' Component={Home}></Route>
// <Route path='/about' Component={About}></Route>
// <Route path='/collection' Component={Collecton}></Route>
// <Route path='/contact' Component={Contact}></Route>
// </Routes>
//         </BrowserRouter>
//         </div>

//   )
// }

// export default Navv

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./navbar.css";
import Home from "./Home";
import About from "./About";
import Collecton from "./Collecton";
import Contact from "./Contact";
import Uploads from "./Uploads";
import Login from "./Login";
import Register from "./Register";
import Item from "./Item";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h2>CoffeeShop</h2>
        <br></br>
        <br></br>
        <br></br>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About_Us</NavLink>
            </li>
            <li>
              <NavLink to={"/collection"}>Coffee_Collection</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact_Us</NavLink>
            </li>
            <li>
              <NavLink to={"/uploads"}>Upload_Coffees</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login Or Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route path={"/collection"} element={<Collecton></Collecton>}></Route>
        <Route path={"/contact"} element={<Contact></Contact>}></Route>
        <Route path={"/uploads"} element={<Uploads></Uploads>}></Route>
        {/* <Route path="/item/:id" element={<Item />} /> */}
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/reg"} element={<Register></Register>}></Route>
        <Route path={"/item"} element={<Item></Item>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;

import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import { Navbar } from "../components/Navbar";
import {Products} from "../components/Products"
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
   <Navbar/>
   <Routes>
    
       <Route path="about" element={ <About/>}/>
       <Route path="/" element={ <Home/>}/>
       <Route path="products" element={ <Products/>}/>
         
      </Routes>
</>;
};
export { MainRoutes };

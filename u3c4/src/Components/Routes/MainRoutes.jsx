import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";
import { AuthContext } from "../context/AuthContext";
const Mainroutes = () => {
  const {token}=React.useContext(AuthContext)
  return (
    <>
    
     <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       {/* /books/* route need to be protected */}
       <Route path="about" element={ <About/>}/>
       <Route path="login/*" element={<Login/>}/>

        
       
       <Route path="/" element={ <Home/>}/>
       <Route path="books" element={ <RequiredAuth/>}>
         <Route path=":id" element={<SingleBook/>}/>
       </Route>
      </Routes>
     
    </>
  );
};
export default Mainroutes;

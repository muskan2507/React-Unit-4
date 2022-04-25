import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav  = styled.div`
background:#222;
color:black;
display:flex;
justify-content:center;

`
const Ul  = styled.ul`
display:flex;
color:black;
list-style-type: none;
    gap: 25px;
    margin-left: 40px;

`

export const Navbar = () => {
  const { token } = useContext(AuthContext);

  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
    <Nav>
        {/* keep all the NavLinks here */}
        <Ul>
          <Link to="/"> <li>Home</li></Link>
          <Link to="/about"> <li>About</li></Link>
         <Link to="/books"> <li>Books</li></Link>
          <Link to="login"> <li >{(token)?"Log Out":"Log In"}</li></Link>
        </Ul>
      </Nav>
    </>
  );
};

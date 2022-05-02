import { Link } from "react-router-dom";
import styled from "styled-components";
const Ul  = styled.ul`
display:flex;
color:black;
list-style-type: none;
    gap: 25px;
    margin-left: 40px;

`
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#000000d0", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Ul>
          <Link to="/"> <li>Home</li></Link>
          <Link to="/about"> <li>About</li></Link>
         <Link to="/products"> <li>Products</li></Link>
         <Link to="/products/men"> <li>Men</li></Link>
         <Link to="/products/women"> <li>Woen</li></Link>
         <Link to="/products/kids"> <li>Kids</li></Link>
         <Link to="/products/homedecor"> <li>Home decor</li></Link>
        </Ul>
    </nav>
  );
};

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/about"
      >
        About
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/products"
      >
        Products
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/products/men"
      >
        Men
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/products/women"
      >
        Women
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/products/kids"
      >
        Kids
      </Link>
      <Link
        style={{ padding: "10px", textDecoration: "none", color: "#fff" }}
        to="/products/homedecor"
      >
        Homedecor
      </Link>
    </nav>
  );
};

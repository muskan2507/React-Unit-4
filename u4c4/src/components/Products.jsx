import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import {Grid, Select } from "./Styled";

export const Products = () => {
  const { isLoading, isError, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData()); //dispatch an action getTodosData()
  }, [dispatch]);
 
  const handleSort = (e) => {
    // dispatch sort products on change
  //  console.log(e.target.value)
  if(e.target.value=="asc"){
    
     dispatch(sortProducts()); //dispatch an action getTodosData()
  };
}
  return isLoading ? (
    <h1>Loading....</h1>
  ) : isError ? (
    <h1>Error.. Something went wrong...</h1>
  ) :(
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
         {
          products.map(el=>{
              return (
                <ProductCard key={el.id} {...el}/>
              )
              })}
          
      </Grid>
    </>
  );
};

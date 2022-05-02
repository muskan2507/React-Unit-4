// import { CircularProgress } from "@mui/material";  
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Box, Detail, Grid, Img, ImgBox, Select, Title } from "./Styled";

export const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, data } = useSelector((state) => state);
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch);
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    let value = e.target.value;
    if (value == "asc") {
      products.sort((a, b) => a.price - b.price);
      dispatch(sortProducts(products));
    } else if (value == "desc") {
      products.sort((a, b) => b.price - a.price);
      dispatch(sortProducts(products));
    } else {
      console.log("object");
      console.log(data);
      dispatch(sortProducts(data));
      return;
    }
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {isLoading ? (
         <h1>Loading</h1>
        ) : isError ? (
          <h1>Something Went wrong</h1>
        ) : (
          products.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })
        )}
      </Grid>
    </>
  );
};

{
  /* <Box key={item.id}>
                <ImgBox>
                  <Img src={item.image} />
                </ImgBox>
                <Title>{item.title}</Title>
                <Detail>{item.brand}</Detail>
                <Detail>{item.category}</Detail>
                <Detail>Rs. {item.price}</Detail>
              </Box> */
}

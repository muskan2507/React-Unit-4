import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { Grid } from "./Styled";
import { ProductCard } from "./ProductCard";

export const CategoryCard = () => {
  const { category } = useParams();
  const { filterData, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch filter Products for every ID change
    let filter = data.filter((item) => {
      return item.category == category;
    });
    dispatch(filterProducts(filter));
  }, [category]);
  return (
    <Grid data-testid="category-container">
      {/* Iterate and print product cards that are of this category */}
      {filterData.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

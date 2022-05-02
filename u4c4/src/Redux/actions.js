// use axios for api call
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import {  SORT_PRODUCTS,FILTER_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes";

export const sortProducts = (payload) => ({
    type:SORT_PRODUCTS,
    payload
});

export const filterProducts = (payload) => ({
    type:FILTER_PRODUCTS,
    payload
});
export const getProductsLoading=()=>({
    type:GET_PRODUCTS_LOADING
})
export const getProductsError=()=>({
    type:GET_PRODUCTS_ERROR
})

export const getProductsSuccess=(payload)=>({
    type:GET_PRODUCTS_SUCCESS,
    payload
})
export const getProductsData=()=>(dispatch) =>{
    dispatch(getProductsLoading());
  fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((res) => res.json())
    .then((res) => dispatch(getProductsSuccess(res))) 
    .catch(() => dispatch(getProductsError()));
}

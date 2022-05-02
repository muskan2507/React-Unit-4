// use axios for api call
import axios from "axios";
import {
  FILTER_DATA,
  GET_DATA,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
} from "./actionTypes";

function getProductsData(dispatch) {
  dispatch({
    type: IS_LOADING,
  });
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((data) => {
      dispatch({
        type: GET_DATA,
        payload: data.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: IS_ERROR,
      })
    );
}

const sortProducts = (data) => {
  return {
    type: SORT_DATA,
    payload: data,
  };
};

const filterProducts = (data) => {
  return {
    type: FILTER_DATA,
    payload: data,
  };
};

export { getProductsData, sortProducts, filterProducts };

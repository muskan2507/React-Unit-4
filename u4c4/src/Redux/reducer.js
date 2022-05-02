import {
  FILTER_DATA,
  GET_DATA,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        products: [...payload],
        data: [...payload],
        isError: false,
        isLoading: false,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case FILTER_DATA: {
      return {
        ...state,
        filterData: [...payload],
      };
    }
    case SORT_DATA: {
      return {
        ...state,
        products: [...payload],
      };
    }
    default: {
      return initState;
    }
  }
};
export { reducer };

import { FILTER_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, SORT_PRODUCTS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        iSError: false,
        data: [],
        filterData: [],
        products: []
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        iSError: true,
        data: [],
        filterData: [],
        products: []
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        iSError: false,
        data: [],
        filterData: [],
        products: payload
      };
      case SORT_PRODUCTS:
        return {
          ...state,
          isLoading: false,
          iSError: false,
           data:payload.sort((a,b)=>a-b),
          filterData: [],
          products: []
        };
        case FILTER_PRODUCTS:
          return {
            ...state,
            isLoading: false,
            iSError: false,
            data: [],
            filterData: payload,
            products: []
          };
    default:
      return state;
    }
};
export { reducer };

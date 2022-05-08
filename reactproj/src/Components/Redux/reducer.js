import {
  GET_INDEX_DATA,
  GET_CATS_DATA,
  GET_BESTSELLER_DATA,
  GET_LATEST_DATA,
  GET_MAKEUP_DATA,
  GET_MOSTVIEWED_DATA,
  GET_CATPRODUCTS_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
  newArrivals: [],
  bestSeller: [],
  latestProducts: [],
  mostViewed: [],
  cats: [],
  catProducts: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_INDEX_DATA:
      return {
        ...state,
        newArrivals: action.payload,
      };
    case GET_CATS_DATA:
      return {
        ...state,
        cats: action.payload,
      };
    case GET_LATEST_DATA:
      return {
        ...state,
        latestProducts: action.payload,
      };
    case GET_BESTSELLER_DATA:
      return {
        ...state,
        bestSeller: action.payload,
      };
    case GET_MOSTVIEWED_DATA:
      return {
        ...state,
        mostViewed: action.payload,
      };
    case GET_CATPRODUCTS_DATA:
      return {
        ...state,
        catProducts: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };

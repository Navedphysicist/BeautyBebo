import { FAILURE, REQUEST, SUCCESS,ASC,DESC, SEARCH } from "./actionTypes";
<<<<<<< Updated upstream
=======
import {  GET_INDEX_DATA,  GET_CATS_DATA,  GET_BESTSELLER_DATA,  GET_LATEST_DATA,  GET_MAKEUP_DATA,  GET_MOSTVIEWED_DATA,  GET_CATPRODUCTS_DATA,} from "./actionTypes";

>>>>>>> Stashed changes

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
<<<<<<< Updated upstream
=======
  newArrivals: [],
  bestSeller: [],
  latestProducts: [],
  mostViewed: [],
  cats: [],
  catProducts: [],
>>>>>>> Stashed changes
};

const reducer = (state = initState, { type, payload,value }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
        data: [],
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [],
        data: payload,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
        data: [],
      };

    case ASC:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [],
        data: payload.sort((a, b) => a.price - b.price),
      };
    case DESC:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [],
        data: payload.sort((a, b) => b.price - a.price),
      };
      case SEARCH:
        console.log(value);
        console.log(payload,"ddddata")
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: [],
          data: payload.filter((el)=>el.name.includes(value)),
        };
<<<<<<< Updated upstream



=======
        case GET_INDEX_DATA:
      return {
        ...state,
        newArrivals: payload,
      };
    case GET_CATS_DATA:
      return {
        ...state,
        cats: payload,
      };
    case GET_LATEST_DATA:
      return {
        ...state,
        latestProducts: payload,
      };
    case GET_BESTSELLER_DATA:
      return {
        ...state,
        bestSeller: payload,
      };
    case GET_MOSTVIEWED_DATA:
      return {
        ...state,
        mostViewed: payload,
      };
    case GET_CATPRODUCTS_DATA:
      return {
        ...state,
        catProducts: payload,
      };
>>>>>>> Stashed changes
    default:
      return state;
  }
};
export { reducer };

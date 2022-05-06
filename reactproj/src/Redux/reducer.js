import { FAILURE, REQUEST, SUCCESS,ASC,DESC, SEARCH } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
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



    default:
      return state;
  }
};
export { reducer };

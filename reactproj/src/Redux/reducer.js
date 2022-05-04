import { FAILURE, REQUEST, SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {

  switch (type) {
    case REQUEST:
      return { ...state, isLoading: true, isError: false, products: [] };
    case SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload };

    case FAILURE:
      return { ...state, isLoading: false, isError: true, products: [] };

    case "ASC":
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: payload.sort((a, b) => a.price - b.price),
      };
    case "DESC":
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: payload.sort((a, b) => b.price - a.price),
      };
      case "men":
        return {
          ...state,
          isLoading: false,
          isError: true,
          data: payload.filter((el) =>el.category=="men"),
          products: payload
        };
        case "women":
          return {
            ...state,
            isLoading: false,
            isError: true,
            data: payload.filter((el)=>el.category=="women"),
            
          };
            case "kids":
              return {
                ...state,
                isLoading: false,
                isError: true,
                data: payload.filter((el) =>el.category=="kids" ),
                products: payload
              };
              case "homedecor":
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                  data: payload.filter((el) =>el.category=="homedecor" ),
                  products: payload
                };
   


    default:
      return state;
  }
};
export { reducer };


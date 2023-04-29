// use axios for api call
import axios from "axios";
import { FAILURE, REQUEST, SEARCH, SUCCESS } from "./actionTypes";
import { GET_INDEX_DATA } from "./actionTypes";



export const getRequest = () => ({ type: REQUEST });
export const getSuccess = (payload) => ({ type: SUCCESS, payload });
export const getFailure = () => ({ type: FAILURE });

export const getData = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    let res = await axios.get(`https://beautybebotwo.onrender.com/${id}`);
    let data = res.data;
    console.log("data", data);
    dispatch(getSuccess(data));
  } catch (err) {
    console.log("err", err);
    dispatch(getFailure());
  }
};

export const sortProducts = (para, products) => ({
  type: para,
  payload: products,
});

export const searchdata = (para, data) => ({
  type: SEARCH,
  value:para,
  payload: data,
});
 
export const getIndexData = (dispatch,path,type) => {
  try {
    axios
      .get(`https://beautybebobackend.onrender.com/${path}`)
      .then((res) => {
        dispatch({
          type,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

// export const addToCart = (product)=>{
//   axios.post('http://localhost:8081',product)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
 
// }


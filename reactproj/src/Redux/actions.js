// use axios for api call
import axios from "axios";
import { FAILURE, REQUEST, SEARCH, SUCCESS } from "./actionTypes";
<<<<<<< Updated upstream
import { signInWithEmailAndPassword } from 'firebase/auth';
=======
import { GET_INDEX_DATA } from "./actionTypes";

>>>>>>> Stashed changes


export const getRequest = () => ({ type: REQUEST });
export const getSuccess = (payload) => ({ type: SUCCESS, payload });
export const getFailure = () => ({ type: FAILURE });

export const getData = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    let res = await axios.get(`http://localhost:4001/${id}`);
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
 
<<<<<<< Updated upstream
=======
export const getIndexData = (dispatch,path,type) => {
  try {
    axios
      .get(`http://localhost:8080/${path}`)
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

>>>>>>> Stashed changes

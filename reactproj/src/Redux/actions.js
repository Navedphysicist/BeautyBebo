// use axios for api call
import axios from "axios";
import { FAILURE, REQUEST, SEARCH, SUCCESS } from "./actionTypes";
import { signInWithEmailAndPassword } from 'firebase/auth';


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
 

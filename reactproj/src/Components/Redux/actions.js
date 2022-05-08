import axios from "axios";
import { GET_INDEX_DATA } from "./actionTypes";

// axios.get(`http://localhost:8080/newArrivals`)
//             .then(res => setnewArrivals(res.data));
//         axios.get(`http://localhost:8080/bestSeller`)
//             .then(res => setBest(res.data));
//         axios.get(`http://localhost:8080/latestProducts`)
//             .then(res => setLatest(res.data));
//         axios.get(`http://localhost:8080/mostViewed`)
//             .then(res => setMostViewed(res.data));
//         axios.get(`http://localhost:8080/cats`)
//             .then(res => setCats(res.data));
//         axios.get(`http://localhost:8080/makeup`)
//             .then((res) => setCatProducts(res.data));
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

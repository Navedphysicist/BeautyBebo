// use axios for api call
import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "./actionTypes";









export const getRequest = ()=>({type:REQUEST})
export const getSuccess = (payload)=>({type:SUCCESS,payload})
export const getFailure = ()=>({type:FAILURE})
export const sortProducts = (para,products)=>({type:para,payload:products})
export const filterProducts = (id,products)=>({type:id,payload:products})







export const getProductsData = ()=>async(dispatch)=>{
 
 dispatch(getRequest())
  try{
    let getData = await axios.get("https://movie-fake-server.herokuapp.com/products")
    let data = await getData.data
    console.log(data);
    dispatch(getSuccess(data))
   
   
 
  }
  catch(err){
      console.log("Erro is There",err)
      dispatch(getFailure())
  }
   

}
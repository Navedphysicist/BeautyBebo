import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, sortProducts } from "../../Redux/actions";
import Product from "./Product";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { ASC,DESC } from "../../Redux/actionTypes";
import NavbarSearch from "./NavbarSearch";
import { FirstImageDiv } from "./FirstImageDiv";
import Footer from "../Footer/Footer";

const ProdData=styled.div`
 #nContainer {
  position:relative;
  margin-top:70px;
  margin-bottom:20px;
  padding-top:10px;
  width: 90vw;
  /* border:1px solid blue; */

  }

  #ntitle {
    font-family: 'Dancing Script', cursive;
    font-weight: lighter;
    text-align: center;
    text-transform:uppercase;
    font-size: 0.8rem;
    
  }
  #nsortcategory {
    display: flex;
    justify-content: flex-end;
  }
  #nwholedivnsort {
  
    border: 0.1rem solid black;
    padding: 0.5rem;
    margin:1rem;
    border-radius: 0.3rem;
  }
  #nsort {
    border: none;
    padding-right: 2rem;
    outline:0px;
  }

  #grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  top: 100px;
  }
`

const Main = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Products = () => {
  const dispatch = useDispatch();
 const {id} = useParams();

 
  const { data, isLoading, isError, filterData, products } = useSelector(
    (state) => state.reducer
  );

  console.log(data,"data");


  useEffect(() => {
    dispatch(getData(id));
  }, [id]);

  const handleSort = (e) => {
    // dispatch sort products on change
     let type=""
    if(e.target.value=="l2h"){
     type=ASC
    }
    else{
      type=DESC
    }
    
    dispatch(sortProducts(type,data))
    
  };
  return isLoading ? (
    <Main>
      <Box>
        <CircularProgress />
      </Box>{" "}
    </Main>
  ) : isError ? (
    <Main>
      <img
        style={{ width: "80%" }}
        src="https://media.giphy.com/media/10LFdyYxtXfRm/giphy.gif"
        alt="Invalid-Image"
      />
    </Main>
  ) : (
    <> 
   <FirstImageDiv/>
         <NavbarSearch/>
      <Navbar/>
     <ProdData> <div id="nContainer">
      <div id="ntitle">
        <h1>{id}</h1>
      </div>
      {/* <!-- sortbycategory div  --> */}
      <div id="nsortcategory">
        <div id="nwholedivnsort">
          <span>Sort by:</span>
          <select name="" id="nsort" onChange={handleSort}>
            <option value="pop">Popularity</option>
            <option value="l2h">Price Low to High</option>
            <option value="h2l">Price High to Low</option>
            <option value="disc">Discounts</option>
          </select>
        </div>
      </div>
      <div id='grid'>
       {data.map((el) => {
          return <Product key={el.id} {...el} />;
        })}
      </div>
      </div>
      </ProdData>
<<<<<<< Updated upstream
=======
      <Footer/>
>>>>>>> Stashed changes
    </>
  );
};

export default Products;

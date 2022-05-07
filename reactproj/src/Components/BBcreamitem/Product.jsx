import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0rem 0.125rem 0.5rem 0rem;

  .nksale {
    padding: 0.625rem 0.3125rem 0.625rem 0.3125rem;
    position: absolute;
    font-weight: bold;
    margin-top: -25rem;
    margin-right: -15.625rem;
    align-items: right;
    border-radius: 50%;
    background: #e08;
    color: #ffffff;
    z-index:-1;
  }

  .nktitle {
    margin: 0.3125rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 90%;
    font-family: "Roboto", sans-serif;
    line-height: 1.5625rem;
    text-align: center;
    color: #666666;
    background-color: #ffffff;
  }
  .nkprice {
    margin: 0.3125rem;
    font-size: 1rem;
    font-family: Roboto;
    line-height: 1.5625rem;
    font-weight: bold;
    color: #e08;
  }

  img {
    margin: 0.3125rem;
    height: 18.75rem;
    width: 12.5rem;
  }
  Button {
    box-sizing: border-box;
  }

  .iconButton {
    background: #666666;
    color: "#fffff";
    border-radius: 0.3125rem;
  }

  .iconButton:hover {
    background: #e08;
    border-radius: 0.3125rem;
  }

  .Favoriteicon:hover {
    color: #ffff;
  }

  .Favoriteicon {
    color: white;
  }
  #strike{
    display: flex;
    align-items:center;
  }
  #strike #strikePrice {
  text-decoration: line-through;
  font-size: 16px;
  color: gray;
}
`;

const Product = ({ id, imgURL, name, price }) => {
  
  const navigate = useNavigate();
  const handleClick = (item) => {
    localStorage.setItem("product", JSON.stringify(item));
    navigate('/product')
  };

  return (
    <>
      <Flex>
        <div className="nksale">Sale</div>
        <img onClick={()=>handleClick({id,imgURL,name,price})}
        src={imgURL} alt="Invalid Image" />
        <div className="nktitle">{name}</div>
        <div id="strike"><div id="strikePrice">{price ? `₹${price+500}` : ""}</div>
        <div className="nkprice">{price ? `₹${price}` : `OUT OF STOCK`}</div>
       </div>
     
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            style={{ background: "#e08" }}
            startIcon={<ShoppingCartIcon />}
          >  Add To Cart
          </Button>
           <IconButton className="iconButton" variant="contained">
            <FavoriteIcon className="Favoriteicon" />
          </IconButton>
        </Stack>
      </Flex>
    </>
  );
};

export default Product;

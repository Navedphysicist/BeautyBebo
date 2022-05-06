import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .nksale {
    padding: 10px 5px 10px 5px;
    position: absolute;
    font-weight: bold;
    margin-top: -400px;
    margin-right: -15.625rem;
    align-items: right;
    border-radius: 50%;
    background: #e08;
    color: #ffffff;
    z-index:-1;
  }

  .nktitle {
    margin: 5px;
    text-transform: uppercase;
    font-weight: bold;
    width: 90%;
    font-family: "Roboto", sans-serif;
    line-height: 25px;
    text-align: center;
    color: #666666;
    background-color: #ffffff;
  }
  .nkprice {
    margin: 5px;
    font-size: 16px;
    font-family: Roboto;
    line-height: 25px;
    font-weight: bold;
    color: #e08;
  }

  img {
    margin: 5px;
    height: 300px;
    width: 200px;
  }
  Button {
    box-sizing: border-box;
  }

  .iconButton {
    background: #666666;
    color: "#fffff";
    border-radius: 5px;
  }

  .iconButton:hover {
    background: #e08;
    border-radius: 5px;
  }

  .Favoriteicon:hover {
    color: #ffff;
  }

  .Favoriteicon {
    color: white;
  }
`;

const Product = ({ id, image, name, price }) => {
  return (
    <>
      <Flex>
        <div className="nksale">Sale</div>
        <img src={image} alt="Invalid Image" />
        <div className="nktitle">{name}</div>
        <div className="nkprice">{price ? `₹${price}` : `OUT OF STOCK`}</div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            style={{ background: "#e08" }}
            startIcon={<ShoppingCartIcon />}
          >
            Add To Cart
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

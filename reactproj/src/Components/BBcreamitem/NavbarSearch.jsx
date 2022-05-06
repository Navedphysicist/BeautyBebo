import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { searchdata } from "../../Redux/actions";

const NavbarSearch = () => {
  const Flex = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    border: 1px solid green;

    #nksearchdiv {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #nksearch {
      height: 40px;
      width: 300px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #icondiv {
      height: 40px;
      width: 53px;
      display: flex;
      background-color: #e08;
      color: white;
      justify-content: center;
      align-items: center;
    }

    #nklastdiv {
      width: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #nklastdiv .fa-heart {
      padding: 5px;
      border: 1px solid black;
    }
    #nklastdiv .fa-user {
      padding: 9px;
      border: 1px solid black;
    }

    #nklastdiv .fa-heart:hover {
      background-color: #e08;
      color: white;
      padding: 5px;
      border: 0px;
    }
    #nklastdiv .fa-user:hover {
      background-color: #e08;
      color: white;
      padding: 9px;
      border: 0px;
    }
  `;
  const { data } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
        const searchValue = e.target.value;
    dispatch(searchdata(searchValue, data));
    }
   
  };

  return (
    <Flex>
      <img
        src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
        alt="Invalid"
      />
      <div id="nksearchdiv">
        <div>
          <input
            id="nksearch"
            type="search"
            placeholder="Enter Your Search"
            onKeyUp={handleSearch}
          />
        </div>
        <div id="icondiv">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div id="nklastdiv">
        <i class="fa-solid fa-heart"></i>

        <i className="fa-solid fa-user"></i>
        <div>My Account</div>
      </div>
    </Flex>
  );
};

export default NavbarSearch;

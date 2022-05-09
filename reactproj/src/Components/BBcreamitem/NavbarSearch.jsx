import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { searchdata } from "../../Redux/actions";
import { Link, useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const Flex = styled.div`
    display: flex;
    gap: 0.625rem;
    justify-content: space-between;
    margin:0rem;

    #nksearchdiv {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #nksearch {
      height: 2.5rem;
      width: 18.75rem;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #icondiv {
      height: 2.5rem;
      width: 3.3125rem;
      display: flex;
      background-color: #e08;
      color: white;
      justify-content: center;
      align-items: center;
    }

    #nklastdiv {
      width: 12.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #nklastdiv .fa-heart {
      padding: 0.3125rem;
      border: 0.0625rem solid black;
    }
    #nklastdiv .fa-user {
      padding: 0.3125rem;
      border: 0.0625rem solid black;
    }

    #nklastdiv .fa-heart:hover {
      background-color: #e08;
      color: white;
      padding: 0.3125rem;
      border: 0.0625rem solid #e08;
    }
    #nklastdiv .fa-user:hover {
      background-color: #e08;
      color: white;
      padding: 0.5625rem;
      border: 0.0625rem solid #e08;
    }
  
    .nav-item{
      height: 1.25rem;
    }
    li{
      list-style: none;
    }
    .nav-item li {
      list-style: none;
    }
    .nav-item .sub-items-mycart {
      pointer-events: none;
      transform: translateY(0);
      display: flex;
      justify-content: space-evenly;
      padding: 1rem;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.313rem 0.938rem;
      position: absolute;
      width: 9%;
      margin: auto;
      left: 88vw;
      top: 18.5vh;
      opacity: 0;
      z-index: 5;
      visibility: hidden;
    }
    .nav-item:hover .sub-items-mycart {
      pointer-events: all;
      transform: translateY(0);
      transition: 600ms;
      opacity: 1;
      visibility: visible;
    }

    .sub-list  li > a {
  text-decoration: none;
  color: black;
}

.sub-list  li > a:hover {
  text-decoration: none;
  color: #e08;
}
  `;
  let user = JSON.parse(localStorage.getItem("user"));
  const { data } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchValue = e.target.value;
      dispatch(searchdata(searchValue, data));
    }
  };

  return (
    <Flex >
      <img
        onClick={() => { navigate('/') }}
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
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-user"></i>
        <li className="nav-item">
          <div>{user ? user.user : "My Account"}</div>
          <div className="sub-items-mycart">
            <div className="sub-list">
              <ul>
                <li>
                  <Link to="/login" id="a">Login</Link>
                </li>
                <li>
                  <Link to="/registration" id="a">Registration</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </div>
    </Flex>
  );
};

export default NavbarSearch;

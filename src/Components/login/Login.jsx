import React, { useEffect, useState } from "react";
import Navbar from "../BBcreamitem/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirstImageDiv } from "../BBcreamitem/FirstImageDiv";
import NavbarSearch from "../BBcreamitem/NavbarSearch";
import Footer from "../Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let data;
  const getData = async () => {
    try {
      let res = await fetch("https://beautybebotwo.onrender.com/users");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [email, password]);

  var rand = function () {
    return Math.random().toString(36).substr(2);
  };

  var token = function () {
    return rand() + rand(); // to make it longer
  };
  const handlelogin = () => {
    let flag = false;
    let user;
    data.forEach((el) => {
      if (email === el.email && password === el.password) {
        flag = true;
         user = el.firstname;
      }
    });

    if (flag === false) {
      alert("Invalid Credentials");
    } else {
      let userToken = token();
      let userObj = {
        userToken,
        user
      }
      localStorage.setItem("user",JSON.stringify(userObj));
      alert("Login Successful");
      navigate("/");
    }
  };

  return (
    <>
      <FirstImageDiv />
      <NavbarSearch />
      <Navbar />
      <div className="login">
        <div>
          <h3>CUSTOMER LOGIN</h3>
          <div>
            <div className="Laccounts">
              <div className="fbgaccount1">
                <img
                  className="image"
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt=""
                />
                <button className="fbb"> Sign in with Facebook</button>
              </div>

              <div className="fbgaccount">
                <img
                  className="image"
                  src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
                  alt=""
                />
                <button className="gb"> Sign in with Google</button>
              </div>
            </div>
            <div className="Lor">
              <h4>--OR--</h4>
            </div>
          </div>
          <div className="logindiv">
            <div className="form">
              <form>
                <p>REGISTERED CUSTOMERS</p>
                <hr />
                <p className="loginp">
                  If you have an account, sign in with your email address.
                </p>
                <div>
                  <p>Email</p>
                  <input
                    type="text"
                    className="lemail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <p>Password</p>
                  <input
                    type="password"
                    className="lemail"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="button"
                    className="lbutton"
                    value="Sign In"
                    onClick={handlelogin}
                  />
                </div>
                <>Forgot your Password?</>
              </form>
            </div>

            <div className="rightdiv">
              <p>NEW CUSTOMERS</p>
              <hr />
              Creating an account has many benefits: check out faster, keep more
              than one addres,track orders and more.
              <div>
                <button
                  onClick={() => navigate("/registration")}
                  className="lbutton"
                >
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

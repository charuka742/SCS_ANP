import React, { useState } from "react";
import senate from "photos/uni_photo.jpg";
import logo from "photos/uni_logo.png";
import "pages/login/Login.css";
import { Await, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login({ onLogin }: any) {
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  //   React.useEffect(() => {
  //     console.log(username);
<<<<<<< HEAD
 
=======
  //   }, [username]);
>>>>>>> 44b090ac0a9474c8f5ab99183e1bc00c51a238d7

  const navigate = useNavigate();

  // const saveUsername =

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newLogin = {
      email: username,
      password: password,
    };

    console.log(newLogin);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/user/auth/authenticate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: newLogin,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        console.log(response.data);
        localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        localStorage.setItem("userEmail", newLogin.email);
        toast.success("Login Successful");
        navigate("/");
        navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Bad Credentials");
        console.log("User Not Found");
      }
    });
  };
  return (
    <div className="whole-page">
      <form action="" autoComplete="off">
        <div className="back-page">
          <div className="login-data">
            <img className="logo" src={logo} alt="university logo" />
            <h2 className="title">LOGIN</h2>
            <div className="login-input">
              <input
                type="text"
                id="username"
                className="input-area"
                placeholder="User Name"
                onChange={(e: any) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="password"
                id="password"
                className="input-area"
                placeholder="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="para">If you not registered please Sign up </p>
              <div className="button-section">
                <button
                  className="btn"
                  id="login-button"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
                <button className="btn" id="signup-button">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

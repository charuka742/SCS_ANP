import React, { useEffect, useState } from "react";
import logo from "photos/uni_logo.png";
import "pages/login/Login.css";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthServices from "services/AuthServices";

function Login({ onLogin }: any) {
  const navigate=useNavigate();
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [error, setError] = useState<any>();
  
  const [userJson, setUserJson] = useState<any>(null);

  useEffect(()=>{
    const u=localStorage.getItem("loggedUser");
    console.log(u)
    if(u!=null){
      setUserJson(u)
      const role=localStorage.getItem("role")
      if(role==="ALUMNI"){
        navigate("/")
      }
      else{
        navigate("/Category")
      }
    }
  },[])
 

 const validateForm=()=>{
  setError("");
  if(!username){
    setError("Enter email")
    return false
  }
  else if(!password){
    setError("Enter password")
    return false
  }
  return true;
 }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(!validateForm()){
      console.log(error);
      return;
    }

    const newLogin = {
      email: username,
      password: password,
    };

    AuthServices.login(newLogin).then((res:any)=>{
      if(res?.status===200){
        localStorage.setItem("loggedUser",JSON.stringify(res?.data?.data));
        localStorage.setItem("role",JSON.stringify(res?.data?.role));
        // console.log(res)
        if(res?.data?.role=="ALUMNI"){
          navigate("/userDetails")
        }
        else{
          navigate("/Category")
        }        
      }
    }).catch((e:any)=>{console.log(e)})
  };
  
  return (
    <div className="whole-page">
      <form action="" autoComplete="on">
        <div className="back-page">
          <div className="login-data">
            <img className="logo" src={logo} alt="university logo" />
            <h2 className="title">LOGIN</h2>
            {error&&
            <p className="w-full text-center text-sm text-red-600 mt-5 mb-2 font-bold">{error}</p>}
            <div className="login-input !mt-5">
              <input
                type="text"
                id="username"
                className="input-area !mt-0"
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

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

const Login = () => {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  

  useEffect(() => {
    if(token){
      navigate(from, { replace: true });
    }
  },[navigate, from, token])
  const handleFormSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("form sobmited", email, password);
    const loginUser = {
      employeeId: email,
      password: password
    }
    fetch('https://staging-api.erpxbd.com/api/v1/users/login',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then(res => res.json())
    .then(data => {
      const accessToken = data.token;
      localStorage.setItem('accessToken', accessToken);
      setToken(accessToken)
      console.log(data.user)
      console.log('login success')
      setLoading(false)
    })
  };

  if(loading){
    return <Loading></Loading>
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="login-banner grid items-center justify-center">
        <form
          className="login-form grid items-center justify-center"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-3xl text-center font-bold">Welcome Back!</h1>
          <p className="text-sm text-center my-5">
            Please login to your account
          </p>
          <div className="my-5 w-[100%]">
            <input
              className="login-inputs"
              type="text"
              name="email"
              placeholder="Enter Your ID"
            />
            <input
              className="login-inputs mt-4"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            className="singin-btn my-5 w-[100%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Sign in"
          />
          <p className="text-center my-8">
            Don't have any account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/registration">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;

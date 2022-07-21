import React from "react";
import Footer from "../Footer/Footer";
import "./Login.css";

const Login = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("form sobmited", email, password);
  };
  return (
    <>
      <div className="login-banner grid items-center justify-center">
        <form
          className="login-form grid items-center justify-center"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-3xl text-center font-bold">Welcome Back!</h1>
          <p className="text-sm text-center my-5">Please login to your account</p>
          <div className="my-5 w-[100%]">
            <input className="login-inputs" type="text" name="email" placeholder="Enter Your Email" />
            <input className="login-inputs mt-4"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </div>
          <input type="submit" className="singin-btn my-5 w-[100%] px-5 py-3 rounded text-md text-white bg-[#0052cc] cursor-pointer" value="Sign in" />
          <p className="text-center my-8">
            Don't have any account? <span className="text-[#0052cc] cursor-pointer"> Sign Up</span>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;

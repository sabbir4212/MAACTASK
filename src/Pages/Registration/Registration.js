import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import "./Registration.css";

const Registration = () => {
  const handleFormRegsSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("form sobmited", email, password);
  };

  return (
    <>
      <div className="registration-banner grid items-center justify-center">
        <form
          className="registration-form items-center justify-center"
          onSubmit={handleFormRegsSubmit}
        >
          <h1 className="text-3xl text-center font-bold">Create Account</h1>
          <p className="text-sm text-center my-5">
            Fill in the details below to create an account
          </p>
          <div className="my-5 w-[100%]">
            <input
              className="registration-inputs mt-4"
              type="text"
              name="fullName"
              id=""
              placeholder="Enter Your Full Name"
            />

            <input
              className="registration-inputs mt-4"
              type="text"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="registration-inputs mt-4"
              type="text"
              name="yourId"
              id=""
              placeholder="Your ID"
            />
            <input
              className="registration-inputs mt-4"
              type="text"
              name="number"
              id=""
              placeholder="Your Mobile Number"
            />
            <input
              className="registration-inputs mt-4"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <input
              className="registration-inputs mt-4"
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirm Password"
            />
            <input
              className="registration-inputs mt-4"
              type="text"
              name="role"
              id=""
              placeholder="Select Your Role"
            />
            <div className="flex mt-5 items-center">
              <input className="p-3" type="checkbox" name="checkbox" id="" />
              <p className="ml-2">
                I read and agree to the <span className="text-[#0052cc] cursor-pointer">Terms & Conditions</span>
              </p>
            </div>
          </div>
          <input
            type="submit"
            className="singin-btn my-5 w-[100%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Create Account"
          />
          <p className="text-center my-8">
            Already have an account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/login"> Sign in</Link>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Registration;

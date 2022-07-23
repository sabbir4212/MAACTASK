import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import "./Registration.css";

const Registration = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, token]);

  const handleFormRegsSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const yourId = event.target.yourId.value;
    const phnNumber = event.target.phnNumber.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const role = event.target.role.value;
    const rol2 = event.target.rol2.value;

    const createUserDetail = {
      name: fullName,
      email: email,
      employeeId: yourId,
      password: password,
      passwordConfirm: confirmPassword,
      role: role,
      phoneNumber: phnNumber,
      rol2: rol2,
    };
    console.log(createUserDetail);
    fetch('https://staging-api.erpxbd.com/api/v1/users/signup',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json',
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(createUserDetail)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setToken(data.token)
      console.log('user create successful')
      setLoading(false)
    })
  };
  if(loading){
    return <Loading></Loading>
  }

  return (
    <>
      <Navbar></Navbar>
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
              name="phnNumber"
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
            <select className="registration-inputs" name="role" id="">
              <option className="py-5 px-3 border-none" value="HUB">
                HUB
              </option>
            </select>
            <div className="flex mt-5 items-center">
              <input className="p-3" type="checkbox" name="checkbox" id="" />
              <p className="ml-2">
                I read and agree to the{" "}
                <span className="text-[#0052cc] cursor-pointer">
                  Terms & Conditions
                </span>
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
            <Link className="text-[#0052cc] cursor-pointer" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Registration;

import React from "react";
import "./Banner.css";
import tabPhnImg from '../../images/tab-phn-group.png';

const Banner = () => {
  return (
    <div className="banner-top">
      <div className="request-demo">
        <div className="mx-auto grid w-3/5 ">
          <h1 className="text-5xl mt-20 tracking-wider leading-[60px] text-center font-bold">
            Analytics that transform your product inside-out
          </h1>
          <div className="mx-auto ">
            <button className="login-btn">Request for Demo</button>
            <button className="registration">Request for Demo</button>
          </div>
          <div className="tab-phn-group">
            <img src={tabPhnImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

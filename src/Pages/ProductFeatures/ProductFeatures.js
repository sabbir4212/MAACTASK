import React from "react";
import "./ProductFeatures.css";
import { SiHackthebox } from "react-icons/si";
import controlPhnImg from "../../images/phngroupbg.png";

const ProductFeatures = () => {
  return (
    <div className="product-features grid items-center justify-center mb-20">
      <div className="top-text">
        <p className="text-lg mt-5 text-[#0052CC] text-center font-bold">
          Products Features
        </p>
        <h1 className="font-bold text-center text-4xl mt-5">Make more out of your data</h1>
        <div className="features-group flex items-center justify-center mt-5">
          <div>
            <div className="w-[230px] text-right mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="w-[230px] text-right mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="w-[230px] text-right mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
          </div>
          <div className="w-[300px] mx-11">
            <img src={controlPhnImg} alt="" />
          </div>
          <div>

            <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>

            <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>

            <div className="w-[230px] mt-7">
              <button
                className="p-2 text-3xl text-[#0052CC] rounded-lg"
                style={{ boxShadow: "0px 8px 12px -3px #989898" }}
              >
                <SiHackthebox></SiHackthebox>
              </button>
              <h1 className="font-bold text-base tracking-wider mt-2 mb-3">
                Real-time analytics
              </h1>
              <p className="text-xs">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;

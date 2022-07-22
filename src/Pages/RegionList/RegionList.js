import React from "react";
import "./RegionList.css";
import {
  AiFillLeftCircle,
  AiOutlineDoubleRight,
  AiOutlinePlus,
} from "react-icons/ai";
import underLoadImg from "../../images/undraw_Login_re.png";
import { Link } from "react-router-dom";

const RegionList = () => {
  return (
    <div className="region-list">
      <div className="flex items-center justify-between mt-4">
        <div>
          <button className="text-2xl cursor-pointer">
            <AiFillLeftCircle className="back-icon"></AiFillLeftCircle>
          </button>
          <h1 className="text-xl font-bold ml-5">Region List</h1>
          <p className="text-sm ml-5 mt-2 flex items-center font-bold">
            <span>Geo </span>
            <span className="mx-2">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <span className="text-[#0055CC]">Geo List</span>
          </p>
        </div>
        <Link to={"/dashboard/regioncreate"} className="flex items-center px-3 py-2 mr-4 rounded bg-[#0B2E4E] text-white">
          <AiOutlinePlus></AiOutlinePlus> Create New
        </Link>
      </div> 
      <div className="m-5 rounded grid items-center justify-center bg-white py-16 mb-5">
        <div className="grid">
        <img className="mx-auto" src={underLoadImg} alt="" />
        <p className="w-3/5 mt-4 mx-auto tracking-wider text-center px-2">Currently you have no Data. For next step first <Link to={"/dashboard/regioncreate"} className="text-[#0055cc] cursor-pointer">Create Region</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegionList;

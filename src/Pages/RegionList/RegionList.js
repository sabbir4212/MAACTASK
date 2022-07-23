import React, { useEffect, useState } from "react";
import "./RegionList.css";
import {
  AiFillLeftCircle,
  AiOutlineDoubleRight,
  AiOutlinePlus,
} from "react-icons/ai";
import underLoadImg from "../../images/undraw_Login_re.png";
import { Link } from "react-router-dom";

const RegionList = () => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    fetch("https://staging-api.erpxbd.com/api/v1/region/20/1", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRegions(data.region);
      });
  }, []);

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
        <Link
          to={"/dashboard/regioncreate"}
          className="flex items-center px-3 py-2 mr-4 rounded bg-[#0B2E4E] text-white"
        >
          <AiOutlinePlus></AiOutlinePlus> Create New
        </Link>
      </div>
      <div className="m-5 rounded grid items-center justify-center bg-white py-16 mb-5">
        {/* <div className="grid">
          <img className="mx-auto" src={underLoadImg} alt="" />
          <p className="w-3/5 mt-4 mx-auto tracking-wider text-center px-2">
            Currently you have no Data. For next step first{" "}
            <Link
              to={"/dashboard/regioncreate"}
              className="text-[#0055cc] cursor-pointer"
            >
              Create Region
            </Link>
          </p>
        </div> */}

        <div className="overflow-y-scroll h-[40vh]">
          <div className="Table">
            <div className="Table-row Table-header">
              <div className="Table-row-item w-14">
                <input type="checkbox" name="" id="" />
              </div>
              <div className="Table-row-item w-48">Sl. No.</div>
              <div className="Table-row-item w-48">Region</div>
            </div>
            {regions?.map((region, index) => (
              <div key={region._id} className="Table-row">
                <div className="Table-row-item w-14" data-header="Header1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="Table-row-item w-48" data-header="Header2">
                  {index + 1}
                </div>
                <div className="Table-row-item w-48" data-header="Header3">
                  {region.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionList;

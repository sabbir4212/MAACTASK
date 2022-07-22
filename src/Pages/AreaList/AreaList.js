import React from "react";
import "./AreaList.css";
import {
  AiFillLeftCircle,
  AiOutlineDoubleRight,
  AiOutlinePlus,
} from "react-icons/ai";
import underLoadImg from "../../images/undraw_Login_re.png";
import { Link } from "react-router-dom";

const AreaList = () => {
  return (
    <div className="region-list">
      <div className="flex items-center justify-between mt-4">
        <div>
          <button className="text-2xl cursor-pointer">
            <AiFillLeftCircle className="back-icon"></AiFillLeftCircle>
          </button>
          <h1 className="text-xl font-bold ml-5">Area List</h1>
          <p className="text-sm ml-5 mt-2 flex items-center font-bold">
            <span>Geo </span>
            <span className="mx-2">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <span className="text-[#0055CC] cursor-pointer">Geo List</span>
          </p>
        </div>
        <Link
          to={"/dashboard/areacreate"}
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
                            to={"/dashboard/areacreate"}
                            className="text-[#0055cc] cursor-pointer"
                        >
                            Create Area
                        </Link>
                    </p>
                </div> */}
        
        <div className="overflow-y-scroll h-[40vh]">
        <div class="Table">
          <div class="Table-row Table-header">
            <div class="Table-row-item w-14">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48">Sl. No.</div>
            <div class="Table-row-item w-48">Region</div>
            <div class="Table-row-item">Area</div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              1
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
            Dhaka
            </div>
            <div class="Table-row-item" data-header="Header4">
            North Dhaka
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
            CTG
            </div>
            <div class="Table-row-item" data-header="Header4">
            South Dhaka
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              3
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
            Dhaka
            </div>
            <div class="Table-row-item" data-header="Header4">
            North Dhaka
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
          <div class="Table-row">
            <div class="Table-row-item w-14" data-header="Header1">
              <input type="checkbox" name="" id="" />
            </div>
            <div class="Table-row-item w-48" data-header="Header2">
              row4 col2
            </div>
            <div class="Table-row-item w-48" data-header="Header3">
              row4 col3
            </div>
            <div class="Table-row-item" data-header="Header4">
              row4 col4
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};

export default AreaList;

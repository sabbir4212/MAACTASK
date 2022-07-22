import React from "react";
import "./AreaCreate.css";
import { AiFillLeftCircle, AiOutlineDoubleRight } from "react-icons/ai";

const AreaCreate = () => {
  const handleCreateArea = (event) => {
    event.preventDefault();
    console.log(event.target.regionToAddRegion.value)
    console.log(event.target.areaToAddRegion.value)
  };
  return (
    <div className="region-list">
      <div className="flex items-center justify-between mt-4">
        <div>
          <button className="text-2xl cursor-pointer">
            <AiFillLeftCircle className="back-icon"></AiFillLeftCircle>
          </button>
          <h1 className="text-xl font-bold ml-5">Create Area</h1>
          <p className="text-sm ml-5 mt-2 flex items-center font-bold">
            <span>Geo </span>
            <span className="mx-2">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <span>Geo List</span>
            <span className="mx-2">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <span className="text-[#0055CC] cursor-pointer">Create Geo</span>
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center">
        <form
          onSubmit={handleCreateArea}
          className="m-5 rounded px-8 flex flex-col justify-center bg-white py-16 mb-12 mt-8"
        >
          <label className="text-sm mb-2" htmlFor="regionToAddRegion">Region</label>
          <input className="area-create-input" type="text" placeholder="Type region" name="regionToAddRegion" required/>

          <label className="text-sm mb-2 mt-5" htmlFor="areaToAddRegion">Area</label>
          <input className="area-create-input" type="text" placeholder="Type area" name="areaToAddRegion" required/>
          <input
            className="py-2 w-[200px] cursor-pointer mt-3 px-3 rounded text-white bg-[#0B2E4E] "
            type="submit"
            value="Add Area"
          />
        </form>
      </div>
    </div>
  );
};

export default AreaCreate;

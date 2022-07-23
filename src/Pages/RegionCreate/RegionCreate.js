import React from 'react';
import './RegionCreate.css';
import { AiFillLeftCircle, AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const RegionCreate = () => {
    const handleCreateArea = (event) => {
        event.preventDefault();
        const region = event.target.regionToAddRegion.value;
        const regional = {
          name: region
        }
          fetch('https://staging-api.erpxbd.com/api/v1/region',{
            method:'POST',
            headers:{
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(regional)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            console.log('add region success')
          })
      };
    return (
        <div className="region-list">
      <div className="flex items-center justify-between mt-4">
        <div>
          <button className="text-2xl cursor-pointer">
            <AiFillLeftCircle className="back-icon"></AiFillLeftCircle>
          </button>
          <h1 className="text-xl font-bold ml-5">Create Region</h1>
          <p className="text-sm ml-5 mt-2 flex items-center font-bold">
            <span>Geo </span>
            <span className="mx-2">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <Link to={"/dashboard"} className="cursor-pointer">Geo List</Link>
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
          <input
            className="py-2 w-[200px] cursor-pointer mt-3 px-3 rounded text-white bg-[#0B2E4E] "
            type="submit"
            value="Add Region"
          />
        </form>
      </div>
    </div>
    );
};

export default RegionCreate;
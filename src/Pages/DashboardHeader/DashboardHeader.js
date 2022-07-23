import React from 'react';
import './DashboardHeader.css';
import fieldImg from '../../images/logo/FieldX.png';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    return (
        <div className='dashboard-header flex items-center justify-between px-12 mt-2 bg-white'>
            <img src={fieldImg} alt="" />
            <Link to={"/"} className="py-2 px-3 text-white rounded bg-red-500 hover:shadow-2xl">Log out</Link>
        </div>
        
    );
};

export default DashboardHeader;
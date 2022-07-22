import React from 'react';
import './DashboardHeader.css';
import fieldImg from '../../images/logo/FieldX.png';

const DashboardHeader = () => {
    return (
        <div className='dashboard-header flex items-center justify-between px-12 mt-2 bg-white'>
            <img src={fieldImg} alt="" />
            <nav>
                <button className='px-2 py-1 rounded text-white border-nonez bg-red-600 hover:shadow-md'>Log out</button>
            </nav>
        </div>
    );
};

export default DashboardHeader;
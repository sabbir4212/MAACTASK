import React from 'react';
import './DashboardHeader.css';
import fieldImg from '../../images/logo/FieldX.png';

const DashboardHeader = () => {
    return (
        <div className='dashboard-header flex items-center justify-between px-12 mt-2 bg-white'>
            <img src={fieldImg} alt="" />
        </div>
        
    );
};

export default DashboardHeader;
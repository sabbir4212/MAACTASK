import React from 'react';
import './DashboardFooter.css';

const DashboardFooter = () => {
    return (
        <div className='dashboard-footer flex items-center justify-between text-sm p-5 bg-slate-200'>
            <p>2022 &copy; MAAC</p>
            <div className='flex'>
                <p className='mx-3 cursor-pointer'>Contact Us</p>
                <p className='mx-3 cursor-pointer'>Privacy Policy</p>
                <p className='ml-3 cursor-pointer'>Terms & Condition</p>
            </div>
        </div>
    );
};

export default DashboardFooter;
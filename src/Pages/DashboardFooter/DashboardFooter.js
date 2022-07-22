import React from 'react';
import './DashboardFooter.css';

const DashboardFooter = () => {
    return (
        <div className='dashboard-footer flex items-center justify-between text-sm p-5 bg-slate-200'>
            <p>2022 &copy; MAAC</p>
            <div className='flex'>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
            </div>
        </div>
    );
};

export default DashboardFooter;
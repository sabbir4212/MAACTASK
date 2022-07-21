import React from 'react';
import './Teams.css';
import teamsImg1 from '../../images/logo/Aven.png';
import teamsImg2 from '../../images/logo/Amara.png';
import teamsImg3 from '../../images/logo/Circle.png';
import teamsImg4 from '../../images/logo/Kyan.png';
import teamsImg5 from '../../images/logo/Treva.png';

const Teams = () => {
    return (
        <div className='teams text-[#0052CC] font-semibold text-3xl text-center py-10'>
            <h1 className='my-10 mb-10'>5,000+ high-impact teams rely on Fieldx</h1>
            <div className="teams-img flex items-center justify-center mt-14 my-10">
                <img className="mr-12 w-[120px]" src={teamsImg1} alt="" />
                <img className="mx-12 w-[120px]" src={teamsImg2} alt="" />
                <img className="mx-12 w-[120px]" src={teamsImg3} alt="" />
                <img className="mx-12 w-[120px]" src={teamsImg4} alt="" />
                <img className="ml-12 w-[120px]" src={teamsImg5} alt="" />
            </div>
        </div>
    );
};

export default Teams;
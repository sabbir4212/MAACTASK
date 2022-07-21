import React from 'react';
import './AboutUs.css';
import selsDetailsImg from '../../images/sels-group.png';
import manImg from '../../images/Ellipse1.png';

const AboutUs = () => {
    return (
        <div className='about-us py-20'>
            <div className="top-section flex items-center justify-center">
                <div className='w-2/4'>
                    <img className='mx-auto w-3/4' src={selsDetailsImg} alt="" />
                </div>
                <div className='w-2/4'>
                    <p className='text-[#0052CC] font-bold'>About Us</p>
                    <h1 className='w-8/12 font-extrabold tracking-wider text-3xl my-6 mb-12'>A dedicated solution for startups and enterprises</h1>
                    <p className='w-9/12 text-sm mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <hr />
                    <div className='flex items-center justify-start mt-12'>
                        <img src={manImg} alt="" />
                        <div className='ml-10'>
                            <p className='w-9/12 text-sm leading-6'>"Fieldx is for teams that care about their product growth."</p>
                            <h1 className='font-bold mt-3'>CEO, FieldX</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section">

            </div>
        </div>
    );
};

export default AboutUs;
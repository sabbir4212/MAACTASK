import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import fieldImg from '../../images/logo/Group.png';

const Footer = () => {
    return (
        <footer className='footer grid items-center justify-center'>
            <div className="social-login py-10">
                <img className='mx-auto' src={fieldImg} alt="" />
                <p className='text-white w-7/12 mx-auto text-center tracking-wider my-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
                <div className='social-group flex'>
                    <span><IoLogoTwitter></IoLogoTwitter></span>
                    <span><FaLinkedinIn></FaLinkedinIn></span>
                    <span><FaFacebookF></FaFacebookF></span>
                </div>
            </div>
            <p className='text-white font-medium text-center py-10 tracking-wider text-[18px]'>&copy; All rights reserve by <span className="" style={{color:'#F60E0E'}}>MAAC</span></p>
        </footer>
    );
};

export default Footer;
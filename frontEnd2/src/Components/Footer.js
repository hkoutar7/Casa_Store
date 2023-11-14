import React from 'react'

import "./../assets/styles/footer.css";
import {BsFacebook, BsFillTelephoneFill} from "react-icons/bs";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    
    
    return (
    <div id='Footer'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#42a5f5" fillOpacity="1" d="M0,256L40,250.7C80,245,160,235,240,245.3C320,256,400,288,480,256C560,224,640,128,720,106.7C800,85,880,139,960,160C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        <div className='container-fluid'>
            <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-3 footer-block'>
                    <h4 className='footer-header'>Casa Shop</h4>
                    <p className='footer-content'>Men clothes</p>
                    <p className='footer-content'>Girl clothes</p>
                    <p className='footer-content'>Electronic Devices</p>
                    <p className='footer-content'>More</p>
                </div>
                <div className='col-12 col-sm-6 col-md-3 footer-block'>
                    <h4 className='footer-header'>Follow us</h4>
                    <address className='footer-content'><AiFillHome /> <span>12 CasaBlanca Boulevard M.5</span></address>
                    <p  className='footer-content'><BiLogoGmail /> <span>casastore7@yahoo.ma</span></p>
                    <p className='footer-content'> <BsFillTelephoneFill /> <span>0785057809</span></p>
                </div>
                <div className='col-12 col-sm-6 col-md-3 footer-block'>
                    <h4 className='footer-header'>About</h4>
                    <p className='footer-content'>Our Terms</p>
                    <p className='footer-content'>Our salary</p>
                    <p className='footer-content'>Our opportunities</p>
                    <p className='footer-content'>Feedback </p>
                </div>
                <div className='col-12 col-sm-6 col-md-3 footer-block'>
                    <p className='footer-content-two'>sign up to get 10% all your list order</p>
                    <div className='row'>
                        <div className='col-6'>
                            <input type='email' placeholder='Your Email Address' />
                        </div>
                        <div className='col-6'>
                            <button type='button'>Subscribe</button>
                        </div>
                    </div>
                    <div className=' footer-social-media'>
                        <a href='https://facebook.com'><BsFacebook /></a>
                        <a href='https://twitter.com'><FaXTwitter /></a>
                        <a href='https://instagram.com'><AiFillInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}

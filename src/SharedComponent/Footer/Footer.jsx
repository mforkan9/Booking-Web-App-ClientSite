import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container  row mx-auto'>
                <div className='more-about col-md-12 col-lg-12 col-12'>
                    <h1><span>START</span>HOTEL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className='social-link'>
                        <ul className=' list-inline'>
                            <li className='list-inline-item'><i class="bi bi-facebook"></i></li>
                            <li className='list-inline-item'><i class="bi bi-github"></i></li>
                            <li className='list-inline-item'><i class="bi bi-twitter"></i></li>
                            <li className='list-inline-item'><i class="bi bi-youtube"></i></li>

                        </ul>
                    </div>
                    <div className='text-white'>
                        {
                            window.location.pathname === '/' &&

                            <ul className='list-inline'>
                                <li className='list-inline-item'><a className='text-white border-bottom  border-3 rounded-circle  border-warning' href="#Home">Home</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle border-warning' href="#Rooms">Rooms</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle  border-warning' href="#About">About</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle  border-warning' href="#Feature">Feature</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle  border-warning' href="#Offer">Offers</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle  border-warning' href="#Gallery">Gallery</a></li>
                                <li className='list-inline-item'><a className='text-white border-bottom border-3 rounded-circle  border-warning' href="#Reviews">Reviews</a></li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
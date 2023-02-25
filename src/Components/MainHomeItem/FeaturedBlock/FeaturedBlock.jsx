import React, { useEffect } from 'react';
import './FeaturedBlock.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const FeaturedBlock = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='featured-block mt-5  container mb-5 ' id='Feature'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-md-12 col-lg-12 d-flex justify-content-center'>
                        <div className='text-center ttitle'>
                            <span>Feature</span>
                            <h2>Hotel Facilities</h2>
                        </div>
                    </div>
                </div>
                <div className='row g-4 mx-auto' style={{ marginTop: '90px' }}>
                    <div className='col-md-6 col-lg-4 col-12 mb-5 text-center'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-shine">
                        <div className='featured-card ' >
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/swiming-poll.png" alt="" />

                                <div className='content'>
                                   <HashLink to={'/features/#swim'}><h4>Swimming pool</h4></HashLink>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12  text-center' style={{ marginTop: '-30px' }}
                        data-aos="fade-down"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <div className='featured-card '>
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/restaurant.png" alt="" />

                                <div className='content'>
                                <HashLink to={'/features/#restaurant'}> <h4>Resturants</h4></HashLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12  text-center'
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <div className='featured-card '>
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/gym.png" alt="" />

                                <div className='content'>
                                <HashLink to={'/features/#gym'}>  <h4>Gym Center</h4></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 mb-5 text-center'
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-sine">
                        <div className='featured-card '>
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/transport.png" alt="" />

                                <div className='content'>
                                <HashLink to={'/features/#transport'}>   <h4>Transport</h4></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12  text-center' style={{ marginTop: '-30px' }}
                     data-aos="fade-up"
                     data-aos-offset="300"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-sine">
                        <div className='featured-card '>
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/locker-room.png" alt="" />

                                <div className='content'>
                                <HashLink to={'/features/#locker'}><h4>Loker Room</h4></HashLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12  text-center'
                     data-aos="fade-left"
                     data-aos-offset="300"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-sine">
                        <div className='featured-card '>
                            <div className='featured-Img'>
                                <img src="https://demo-egenslab.b-cdn.net/html/hotelina/preview/assets/images/bg/swiming-poll.png" alt="" />

                                <div className='content'>
                                <HashLink to={'/features/#spa'}>  <h4>Spa & Beauty</h4></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedBlock;
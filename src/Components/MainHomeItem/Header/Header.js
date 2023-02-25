import React, { useEffect, useState } from 'react';
import './Header.scss'
import img1 from './hammocks-with-palm-trees.jpg'
import img2 from './sunset-pool.jpg'
import img3 from './leisure-beautiful-health-garden-landscape.jpg'
import Navbar from '../Navbar/Navbar';
import HeaderDatePicker from '../HeaderDatePicker/HeaderDatePicker';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper';
import "swiper/css";
import 'swiper/css/effect-fade';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [scrolled, setScrolled] = useState()
    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='header' id='Home'>
            <Swiper
                //spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                className="mySwiper header-border"
            >
                <SwiperSlide>
                    <img src={img3} class="d-block img1" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} class="d-block img1" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} class="d-block img1" alt="..." />
                </SwiperSlide>
            </Swiper>

            <div class="topleft" style={scrolled ? { position: 'fixed', backgroundColor: 'black' } : { position: 'absolute' }}>
                <Navbar></Navbar>
            </div>
            <div className='welcome-section   mx-auto'>
                <div className='text-center latter  mb-4'
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-shine">
                    <h1>Welcome to <span>START</span>HOTEL</h1>
                    <h4>Enjoy Your life with Us</h4>
                </div>
                <div className='text-center container my-5'>
                    <HeaderDatePicker></HeaderDatePicker>
                </div>
            </div>
        </div>
    );
};

export default Header;
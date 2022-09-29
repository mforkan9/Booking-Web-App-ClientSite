import React, { useEffect, useState } from 'react';
import './Header.scss'
import img1 from './hammocks-with-palm-trees.jpg'
import img2 from './sunset-pool.jpg'
import img3 from './leisure-beautiful-health-garden-landscape.jpg'
import Navbar from '../Navbar/Navbar';
import HeaderDatePicker from '../HeaderDatePicker/HeaderDatePicker';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade} from 'swiper';
import "swiper/css";
import 'swiper/css/effect-fade';

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

    return (
        <div className='header'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
            <div className='welcome-section'>
                <div className='text-center latter mb-4'>
                    <h1>Welcome to <span>START</span>HOTEL</h1>
                    <h4>Enjoy Your life with Us</h4>
                </div>
                <div className='text-center my-5 container'>
                    <HeaderDatePicker></HeaderDatePicker>
                </div>
            </div>
        </div>
    );
};

export default Header;
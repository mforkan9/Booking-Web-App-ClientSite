import React, { useEffect } from 'react';
import Banner from '../MainHomeItem/Banner/Banner';
import Header from '../MainHomeItem/Header/Header';
import NavHeader from '../MainHomeItem/NavHeader/NavHeader';
import RoomBanner from '../MainHomeItem/RoomBanner/RoomBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedBlock from '../MainHomeItem/FeaturedBlock/FeaturedBlock';
import AboutBlock from '../MainHomeItem/AboutBlock/AboutBlock';
import OfferBlock from '../MainHomeItem/OfferBlock/OfferBlock';
import GalleryBlock from '../MainHomeItem/GalleryBlock/GalleryBlock';
import TestimonialBlock from '../MainHomeItem/TestimonialBlock/TestimonialBlock';
import Footer from '../../SharedComponent/Footer/Footer';


const Home = () => {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div style={{overflowX:'hidden'}}>
            <NavHeader></NavHeader>
            <Header></Header>
            <Banner></Banner>
            <RoomBanner></RoomBanner>
            <AboutBlock></AboutBlock>
            <FeaturedBlock></FeaturedBlock>
            <OfferBlock></OfferBlock>
            <GalleryBlock></GalleryBlock>
            <TestimonialBlock></TestimonialBlock>
            <Footer></Footer>
           
            {/* <div className=' container mt-5' data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                style={{ height: '100px', width: '100px', border: '1px solid red' }}>
                <h1>Aos test</h1>

            </div> */}
        </div>
    );
};

export default Home;
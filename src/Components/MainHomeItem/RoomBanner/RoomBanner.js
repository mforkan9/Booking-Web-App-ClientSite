/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './RoomBanner.scss'
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 1,
  rows: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}


const RoomBanner = () => {
  const [bannerRoom, setBannerRoom] = useState([])

  useEffect(() => {
    fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/bannerRoom`)
      .then(res => res.json())
      .then(data => setBannerRoom(data.data))
  }, [])

  return (
   
      <div className='row container mx-auto roombanner' id='Rooms'>
        <div className='col-md-12 title'>
          <h2>Our <span>Rooms</span> </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <Slider {...settings} className=''>
            {
              bannerRoom.map(item =>
                <div key={item._id} className=''>
                  <div class="mx-3 my-3 roomCard  card" >
                    <div class="roomBody hover-zoom bg-image">
                      <img src={item.roomImage} alt="" />
                      <div className='room-overlay text-start'>
                        <h2 className=''>{item.roomType}</h2>
                        <Rating defaultValue={5} size='small'></Rating>
                      </div>
                    </div>
                    <div className='row mt-2 text-center'>
                      <div className='col-md-6 col-6'>
                        <p className='fw-bold'>{item.ratePerNight}$ Night</p>
                      </div>
                      <div className='col-md-6 col-6'>
                        <Link to={`/roomDetails/${item._id}`} ><a href='#' className='text-muted mt-5'>view details</a></Link>
                      </div>
                    </div>
                  </div>
                </div>

              )
            }
          </Slider>
        </div>
      </div>

  );
};

export default RoomBanner;
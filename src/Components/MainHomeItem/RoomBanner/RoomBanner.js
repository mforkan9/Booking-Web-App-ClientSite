import React from 'react';
import './RoomBanner.scss'
import {  Rating } from '@mui/material';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from './evan-wise-zevKQbUrcbw-unsplash.jpg'



const sliderSwipe = [
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=3"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=4"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=5"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=6"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=8"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=9"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=0"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=1"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=33"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=66"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=39"
  },
  {
    imgUrl: "https://placeimg.com/800/600/nature?random=39"
  },

]


const RoomBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    rows: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  };
  return (
    <div>
      <div className='row container mx-auto roombanner'>
        <div className='col-md-12 title'>
          <h2>Our <span>Rooms</span> </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <Slider {...settings} className=''>
            {
              sliderSwipe.map(item =>

                <div className=''>
                  <div class="mx-3 my-3 roomCard  card" >
                    <div class="roomBody hover-zoom bg-image">
                      <img src={item.imgUrl} alt=""/>
                      <div className='room-overlay text-start'>
                        <h2 className=''>Single Room</h2>
                        <Rating defaultValue={5} size='small'></Rating>
                      </div>
                    </div>
                    <div className='row mt-2 text-center'>
                      <div className='col-md-6 col-6'>
                        <p className='title'>67 Night</p>
                      </div>
                      <div className='col-md-6 col-6'>
                    <Link to={'/roomDetails'} ><a href='#' className='text-muted mt-5'>view details</a></Link>    
                      </div>
                    </div>
                  </div>
                </div>

              )
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoomBanner;
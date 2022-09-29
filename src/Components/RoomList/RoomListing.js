import { Rating } from '@mui/material';
import React from 'react';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './RoomListing.scss'
import img1 from './room-grid-cover.jpg'

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

const RoomListing = () => {
  return (
    <div>
      <div className='room-list-page'>
        <div className='fixed-top' style={{ backgroundColor: '#0d0d0d' }}>
          <Navbar></Navbar>
        </div>

        <div className='room-list-header'>
          <div className='container'>

            <div className='row'>
              <div className='col-md-10  mx-auto'>
                <div className='title text-center'>
                  <h1>Room Details</h1>
                  <div className='text-center d-flex justify-content-center'>
                    <h5 className=''>Home</h5>
                    <p className='mx-2 '>/</p>
                    <h5 style={{ color: '#ffcb05' }}>Room Details</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='mt-5 container  roomListing'>
        <div className='row'>
          {
            sliderSwipe.map(item =>

              <div class=" col-md-4 my-3 roomListCard" >
                <div className='card mx-2'>
                  <div class="roomBody hover-zoom bg-image">
                    <img src={item.imgUrl} alt="" />
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
                      <a href='#' className='text-muted mt-5'>view details</a>
                    </div>
                  </div>
                </div>
              </div>

            )
          }



        </div>

      </div>
      <div>
        sdfasdfsadfsadfsad
      </div>
      <div>
        sdfasdfsadfsadfsad
      </div>
      <div>
        sdfasdfsadfsadfsad
      </div>
    </div>
  );
};

export default RoomListing;
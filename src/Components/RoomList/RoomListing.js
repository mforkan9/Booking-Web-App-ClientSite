import { Pagination, Rating } from '@mui/material';
import React from 'react';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './RoomListing.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../SharedComponent/Footer/Footer';


const RoomListing = () => {
  const [page,setPage] = useState()
  const [activePage,setActivePage] = useState(1)
  const [allRoom,setAllRoom] = useState([])
  
  useEffect(() => {
    fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/createRoom?page=${activePage}&limit=6&filter`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllRoom(data.data)
        const pageNumber = data.totalData
        const count = Math.ceil(pageNumber / 6)
        setPage(count)
      })
  }, [activePage])

const handlePageCount = (event,value) =>{
  setActivePage(value)
} 


  return (
    <div className=''>
      <div className='room-list-page'>
        <div className='fixed-top' style={{ backgroundColor: '#0d0d0d' }}>
          <Navbar></Navbar>
        </div>

        <div className='room-list-header'>
          <div className='container'>

            <div className='row'>
              <div className='col-md-10  mx-auto'>
                <div className='title text-center'>
                  <h1>Room Listing</h1>
                  <div className='text-center d-flex justify-content-center'>
                    <h5 className=''>Home</h5>
                    <p className='mx-2 '>/</p>
                    <h5 style={{ color: '#ffcb05' }}>Room Listing</h5>
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
            allRoom.map(item =>

              <div class=" col-md-4 col-6 col-lg-4 col-xl-4 my-3 container roomListCard" >
                <div className='card mx-2'>
                  <div class="roomBody hover-zoom bg-image">
                    <img src={item.roomImage} alt="" />
                    <div className='room-overlay text-start'>
                      <h2 className=''>{item.roomType} Room</h2>
                      <Rating defaultValue={5} size='small'></Rating>
                    </div>
                  </div>
                  <div className='row mt-2 text-center'>
                    <div className='col-md-6 col-6'>
                      <p className='text-dark'>{item.ratePerNight} Night</p>
                    </div>
                    <div className='col-md-6 col-6'>
                   <Link to={`/roomDetails/${item._id}`}> <a href='#' className='text-muted mt-5'>view details</a></Link>  
                    </div>
                  </div>
                </div>
              </div>

            )
          }
        </div>

      </div>
      <div className='my-4'>
        <nav aria-label="Page navigation example">
          <div class="pagination justify-content-center">
            <Pagination onChange={handlePageCount} color='warning' count={page} variant="outlined" shape="rounded" />
          </div>
        </nav>
      </div>
     <Footer></Footer>
    </div>
  );
};

export default RoomListing;
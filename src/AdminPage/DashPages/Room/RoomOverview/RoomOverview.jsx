import { Pagination } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './RoomOverview.scss'

const RoomOverview = () => {
    const { id } = useParams()
    const [overviewData, setOverviewData] = useState({})
    const [reservedData, setReservedData] = useState([])
    const [bookingOverview, setBookingOverview] = useState({})
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/room/roomBookingDate/${id}?page=${activePage}&limit=${5}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOverviewData(data.value)
                setReservedData(data.value.reserved)
                const pageNumber = data.totalCount
                const count = Math.ceil(pageNumber / 5)
                setPage(count)
            })
    }, [id, activePage])

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }

    const handleFindById = (id) =>{

        fetch(`http://localhost:8000/api/v1/booking/bookingFindById/${id}`)
        .then(res => res.json())
        .then(data => setBookingOverview(data.data))
     }

     console.log(bookingOverview);

    return (
        <div className='my-4'>
            <h4>Room Overview</h4>

            <div className='overview-block row container mx-auto my-4'>

                <div className='details-section  col-lg-12 col-md-12 col-12 mb-4 py-3'>
                    <div className='row  mx-auto '>
                        <div className='col-md-10 col-12 my-4 mb-4 mx-auto img-section '>
                            <img src={overviewData.roomImage} alt="" srcset="" />
                        </div>
                        <div className='col-md-12'>
                            <div className='content container'>
                                <div class="row  mb-3">
                                    <div class="col-auto me-auto">
                                        <span>Room Info</span>
                                        <h3>{overviewData.roomType} Room R-{overviewData.roomNumber}</h3>
                                    </div>
                                    <div class="col-auto">
                                        <span>Price</span>
                                        <h3>$ {overviewData.ratePerNight} / <span style={{ color: 'rgba(255, 203, 9, 0.9)' }}>night</span></h3>
                                    </div>
                                </div>
                                <div className='text-muted'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                                <div className=''>
                                    <span>Facilities</span>
                                    <div className='row mb-3 my-3'>
                                        <div className='col-md-2 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-wifi-2 fs-4 me-2"></i></span>
                                                Free wifi
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-cup-hot fs-4 me-1"></i></span>
                                                Coffe Maker
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-globe fs-4 me-1"></i></span>
                                                Sports
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-telephone fs-4 me-1"></i></span>
                                                Alert Phone
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-6'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-scissors fs-4 me-1"></i></span>
                                                Food Service
                                            </div>
                                        </div>
                                        <div className='col-md-2 col-6'>
                                            <div className='facilitie'>
                                                <span><i class="bi bi-tv fs-4 me-1"></i></span>
                                                LCD TV
                                            </div>
                                        </div>
                                    </div>
                                    <span>Accessory</span>
                                    <div className='row mb-3 my-3'>
                                        <div className='col-md-3 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="fa fa-thermometer-full fs-5 ms-2 me-2" aria-hidden="true"></i></span>
                                                {overviewData.roomFeature}
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="fa fa-cutlery fs-5 me-2 ms-2" aria-hidden="true"></i></span>
                                                {overviewData.roomMeal}
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-6 mb-3'>
                                            <div className='facilitie'>
                                                <span><i class="fa fa-credit-card fs-5 ms-2 me-2" aria-hidden="true"></i></span>
                                                {overviewData.roomCancelCharge}
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-6 mb-3'>
                                            <div className='facilitie px-auto'>
                                                <span><i class="fa fa-bed fs-5 ms-2 me-2" aria-hidden="true"></i></span>
                                                {overviewData.roomBedCapacity} Person
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='history-section col-lg-12 col-md-12 col-12 border py-3 '>
                    <h5 className='px-3'>Booking History</h5>
                    {
                        reservedData.map(pd =>
                            <div className='row container py-3 mb-2 mx-auto border-0 border-bottom'>
                                <div className='col-md-4 col-sm-4 col-xs-4 col-5'>
                                    <div className='text-center'>
                                        <span className='text-muted'>CheckIn</span>
                                        <h5>{pd.checkIn}</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-4 col-xs-4 col-5'>
                                    <div className='text-center'>
                                        <span className='text-muted'>CheckOut</span>
                                        <h5>{pd.checkOut}</h5>
                                    </div>
                                </div>
                                <div className='col-md-4 col-xs-4 col-sm-4 col-2'>
                                    <div className='text-center'>
                                        <button onClick={() => handleFindById(pd?.bookedInfo)} data-bs-toggle="modal" data-bs-target="#exampleModal2" >View notes</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            <Pagination onChange={handlePageChange} count={page} variant="outlined" shape="rounded" />
                        </div>
                    </div>
                </div>
            </div>
                                   {/* Modal */}
                                   <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered ">
                                        <div class="modal-body   px-5 modal-content border-2 border border-warning">
                                            <div className='content  py-1'>
                                                <div class="d-flex align-items-center border-bottom">
                                                    <div class="ms-3 ">
                                                        <p class="fw-bold mb-0">{bookingOverview?.firstName}</p>
                                                        <p class="text-muted mb-0">{bookingOverview?.email}</p>
                                                        <small class="text-muted mb-0">Contact:{bookingOverview?.contactNumber}</small>
                                                    </div>
                                                </div>
                                                <div className='mt-2'>
                                                    <h6 className='text-dark'>Booking Details</h6>
                                                    <div className=' row mt-3'>
                                                        <div className='col-md-6'>
                                                            <i class="bi bi-calendar-event-fill fs-6 me-2 text-muted"></i>
                                                            <span className='fs-6 text-muted mb-0'>Arrive</span>
                                                            <p className='ms-4 text-dark'>{bookingOverview?.checkIn}</p>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <i class="bi bi-calendar-event fs-6 me-2 text-muted"></i>
                                                            <span className='fs-6 text-muted mb-0'>Departure</span>
                                                            <p className='ms-4 text-dark'>{bookingOverview?.checkOut} </p>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <i class="bi bi-people-fill fs-6 me-2 text-muted"></i>
                                                            <span className='fs-6 text-muted mb-0'>Guest</span>
                                                            <p className='ms-4 text-dark'>{bookingOverview?.adult} Adults {bookingOverview?.children} Child</p>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <i class="bi bi-calendar-check fs-6 me-2 text-muted"></i>
                                                            <span className='fs-6 text-muted mb-0'>Days</span>
                                                            <p className='ms-4 text-dark'>{bookingOverview?.days} Night</p>
                                                        </div>
                                                        <div className='col-md-12 '>
                                                            <i class="bi bi-chat-dots-fill fs-6 me-2 text-muted"></i>
                                                            <span className='fs-6 text-muted mb-0'>Message</span>
                                                            <p className='ms-4 text-dark bg-light rounded-2 py-2'>{bookingOverview?.message} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    <h6 className='text-dark'>Payment Summary</h6>
                                                    <div class="d-flex justify-content-between ms-2 text-muted">
                                                        <span>Total Price</span><span>${bookingOverview?.roomTotalPrice}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
        </div>
    );
};

export default RoomOverview;
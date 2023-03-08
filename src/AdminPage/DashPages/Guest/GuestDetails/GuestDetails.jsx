import React, { useState } from 'react';
import './GuestDetails.scss'
import img1 from './user.png'
import img2 from './room-grid-cover.jpg'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Pagination } from '@mui/material';


const GuestDetails =  () => {
    const {email} = useParams()
    const [guestData,setGuestData] = useState({})
    const [guestBookedData,setGuestBookedData] = useState([])
    const [page, setPage] = useState()
    const [active, setActive] = useState(1)
    const [bookData,setBookData] = useState({})
    
    
    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/client/clientFindByEmail/${email}?page=${active}&limit=${5}`)
        .then(res => res.json())
        .then(data =>{
            setGuestData(data.data)
            setGuestBookedData(data.bookedData.bookedId)
            const pageNumber = data.totalData
            const count = Math.ceil(pageNumber / 5)
            setPage(count)
        })
    }, [email,active])

    const [defaultData] = guestBookedData.slice(0)

    const handlePageChange = (event, value) => {
        setActive(value)
    }

     
    const handleFindBookingById = (id) =>{

        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/bookingFindById/${id}`)
         .then(res => res.json())
        .then(data => setBookData(data.data))
    }


console.log(guestBookedData);

    return (
        <div className='guest-overview my-4'>
            <h4>Guest Details</h4>
            <div className=' container my-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row content-body border  mx-auto '>
                            <div className='col-md-6 py-3'>
                                <div className='container'>
                                    <div className='guest-profile  py-2  border-bottom'>
                                        <div className='d-flex mb-3'>
                                            <img src={img1} style={{ width: '25%', height: '25%' }} alt="" srcset="" />
                                            {/* <i class="bi bi-person-circle fs-1" ></i> */}
                                            <div className='ms-3  py-3'>
                                                <h2 className='mb-0'>{guestData.userName}</h2>
                                                <span>{guestData.email}</span>
                                                <p>{guestData.contactNumber}</p>
                                            </div>
                                        </div>
                                        <div class="row justify-content-between">
                                            <div class="col-4">
                                                <span>CheckIn</span>
                                                <p>{bookData?.checkIn || defaultData?.checkIn}</p>
                                            </div>
                                            <div class="col-4">
                                                <span>CheckOut</span>
                                                <p>{bookData?.checkOut || defaultData?.checkOut}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='roomInfo mt-4 mb-1'>
                                        <div class="row justify-content-between">
                                            <div class="col-6">
                                                <span>Room Info</span>
                                                <p className='fs-3'>{bookData?.bookedFor?.roomType || defaultData?.bookedFor?.roomType} Room </p>
                                            </div>
                                            <div class="col-5">
                                                <span>Price</span>
                                                <p className='fs-4'>$ {bookData?.bookedFor?.ratePerNight || defaultData?.bookedFor?.ratePerNight}/ night</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <div className='facilitis-info'>
                                        <span>Facilitis</span>
                                        <div className='row mt-3'>
                                            <div className='col-md-6 col-12  mb-3'>
                                                <div className='btn-lg'>
                                                    <i class="fa-solid fa-bed fs-4 me-3"></i>
                                                    <span>{bookData?.bookedFor?.roomBedCapacity || defaultData?.bookedFor?.roomBedCapacity} Person</span>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12  mb-3'>
                                                <div className='btn-lg'>
                                                    <i class="fa fa-thermometer-full fs-5 ms-2 me-3" aria-hidden="true"></i>
                                                    <span>{bookData?.bookedFor?.roomFeature || defaultData?.bookedFor?.roomFeature}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12  mb-3'>
                                                <div className='btn-lg'>
                                                    <i class="fa-solid fa-utensils fs-5 me-3"></i>
                                                    <span>{bookData?.bookedFor?.roomMeal || defaultData?.bookedFor?.roomMeal}</span>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12  mb-3'>
                                                <div className='btn-lg'>
                                                    <i class="fa-solid fa-file-invoice-dollar fs-5 me-3"></i>
                                                    <span>{bookData?.bookedFor?.roomCancelCharge || defaultData?.bookedFor?.roomCancelCharge}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-0'>
                                <img src={bookData?.bookedFor?.roomImage || defaultData?.bookedFor?.roomImage} className='w-100 h-100  rounded-end' alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <div className='history-content container border py-3'>
                            <h5>Booking History</h5>
                            {
                                guestBookedData.map(data => 
                             
                            <div className='row mx-auto border-bottom py-2 my-3'>
                                <div className='col-xl-4 col-sm-7'>
                                    <div className='d-flex'>
                                        <div className='' style={{ width: '150px', height: '100px' }}>
                                            <img src={data.bookedFor.roomImage} className='w-100 h-100 rounded-3' alt="" srcset="" />
                                        </div>
                                        <div className='ms-2'>
                                            <h5 className='fw-bold text-dark'>{data.bookedFor.roomType} Room</h5>
                                            <span className='text-muted'>Room No- <span className='fw-bold text-dark'>{data.bookedFor.roomNumber}</span></span>
                                            <p>{`${new Date(data.createdAt).toLocaleTimeString()}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-2 col-sm-5 col-6'>
                                    <div className='py-3 '>
                                        <span className='text-muted'>checkIn</span>
                                        <p className='mb-0 fw-bold'>{data.checkIn}</p>

                                    </div>
                                </div>
                                <div className='col-xl-2 col-sm-4 col-6'>
                                    <div className='py-3 '>
                                        <span className='text-muted'>checkOut</span>
                                        <p className='mb-0 fw-bold'>{data.checkOut}</p>

                                    </div>
                                </div>
                                <div className='col-xl-2 col-sm-4 col-6'>
                                    <div className='py-3 '>
                                        <span className='text-muted'>Price</span>
                                        <p className='mb-0 fw-bold'>$ {data.roomTotalPrice}</p>

                                    </div>
                                </div>
                                <div className='col-xl-2 col-sm-4 col-6'>
                                    <div className='py-3 '>
                                        <p className='btn-lg' role={'button'} onClick={() => handleFindBookingById(data._id)}>View Notes</p>
                                    </div>
                                </div>
                            </div>
                            )
                         } 
                            <Pagination color='success' onChange={handlePageChange} count={page} variant="outlined" shape="rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestDetails;
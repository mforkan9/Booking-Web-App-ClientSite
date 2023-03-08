import { Pagination } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BookingCancel = () => {
    const [allCanceledBooking, setAllCanceledBooking] = useState([])
    const [bookingDetails, setBookingDetails] = useState({})
    const [page, setPage] = useState(0)
    const [activePage, setActivePage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [totalData, setTotalData] = useState(0)


    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/statusBooking?status=canceled&page=${activePage}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTotalData(data?.totalData)
                const page = data?.totalData
                const pageCount = Math.ceil(page / limit)
                setPage(pageCount)
                setAllCanceledBooking(data?.result)

            })
    }, [activePage, limit])

    const handlePage = (event, value) => {
        setActivePage(value)
    }

    const handleFindById = (id) => {

        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/bookingFindById/${id}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data?.data))
    }

    return (
        <div className='my-4'>
            <h4>Booking Canceled list</h4>
            <div className='list-table container my-4 '>
                {/* <div class="row mb-3">
                    <div class="col-auto me-auto"></div>
                    <div class="col-auto my-3">
                        <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark">Add New <span><i class="bi bi-plus-circle-fill fs-6 ms-2"></i></span></button>
                    </div>
                </div> */}
                <div class="row mb-3 mt-4 py-4">
                    <div class="col-auto me-auto">
                        Show
                        <select className='mx-2' onChange={(e) => setLimit(e.target.value)}>
                            <option selected value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        entries
                    </div>
                    <div class="col-auto">
                        {/* <input class="form-control me-2" type="text" placeholder="Search Type" /> */}
                    </div>
                </div>

                <div className='table-responsive mb-3'  >
                    <table class="table align-middle mb-4 my-4 bg-white">
                        <thead class="bg-light">
                            <tr className='text-center'>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Arrive</th>
                                <th>Depart</th>
                                <th>View</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCanceledBooking?.map(info =>

                                    <tr>
                                        <td>

                                            <div class="d-flex align-items-center">
                                                <img
                                                    src={info?.bookedFor?.roomImage}
                                                    alt="dfsdfsdaf"
                                                    style={{ width: '50px', height: '50px' }}
                                                    class="rounded-circle"
                                                />
                                            </div>
                                        </td>

                                        <td>{info?.firstName}</td>
                                        <td> {info?.contactNumber}</td>
                                        <td>{info?.email}</td>
                                        <td> {info?.checkIn}</td>
                                        <td> {info?.checkOut}</td>
                                        <td>
                                            <i onClick={() => handleFindById(info?._id)} class="bi bi-eye-fill fs-5 text-primary ripple" data-bs-toggle="modal" data-bs-target="#exampleModal" role={'button'}></i>
                                        </td>
                                        <td className='fs-6'>
                                            <span
                                                class={`badge text-bg-danger rounded-pill d-inline`}>
                                                {info?.status}
                                            </span>
                                        </td>
                                        {/* <td>
                                            <div className='d-flex' >
                                                <Link to={'fdsf'}><i class="bi bi-pencil-square  fs-5 mx-2 text-primary" role={'button'}></i></Link>
                                                <i class="bi bi-trash3 fs-5 text-danger" role={'button'} ></i>
                                            </div>
                                        </td> */}
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div class="row mb-3">
                    <div class="col-auto me-auto">Showing 1 to {limit} of {totalData}</div>
                    <div class="col-auto">
                        <div className='mb-4'>
                            <Pagination count={page} onChange={handlePage} variant="outlined" color="primary" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered ">
                    <div class="modal-body   px-5 modal-content border-2 border border-warning">
                        <div className='content  py-1'>
                            <div class="d-flex align-items-center border-bottom">
                                <img
                                    src={bookingDetails?.bookedFor?.roomImage}
                                    class="rounded"
                                    alt=""
                                    style={{ width: '65px', height: '65px' }}
                                />
                                <div class="ms-3 ">
                                    <p class="fw-bold mb-0">{bookingDetails?.firstName}</p>
                                    <p class="text-muted mb-0">{bookingDetails?.email}</p>
                                    <small class="text-muted mb-0">Contact:{bookingDetails?.contactNumber}</small>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h6 className='text-dark'>Booking Details</h6>
                                <div className=' row mt-3'>
                                    <div className='col-md-6'>
                                        <i class="bi bi-calendar-event-fill fs-6 me-2 text-muted"></i>
                                        <span className='fs-6 text-muted mb-0'>Arrive</span>
                                        <p className='ms-4 text-dark'>{bookingDetails?.checkIn}</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <i class="bi bi-calendar-event fs-6 me-2 text-muted"></i>
                                        <span className='fs-6 text-muted mb-0'>Departure</span>
                                        <p className='ms-4 text-dark'>{bookingDetails?.checkOut} </p>
                                    </div>
                                    <div className='col-md-6'>
                                        <i class="bi bi-people-fill fs-6 me-2 text-muted"></i>
                                        <span className='fs-6 text-muted mb-0'>Guest</span>
                                        <p className='ms-4 text-dark'>{bookingDetails?.adult} Adults {bookingDetails?.children} Child</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <i class="bi bi-calendar-check fs-6 me-2 text-muted"></i>
                                        <span className='fs-6 text-muted mb-0'>Days</span>
                                        <p className='ms-4 text-dark'>{bookingDetails?.days} Night</p>
                                    </div>
                                    <div className='col-md-12 '>
                                        <i class="bi bi-chat-dots-fill fs-6 me-2 text-muted"></i>
                                        <span className='fs-6 text-muted mb-0'>Message</span>
                                        <p className='ms-4 text-dark bg-light rounded-2 py-2'>{bookingDetails?.message} </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h6 className='text-dark'>Room Details</h6>
                                <div className='mt-3 d-flex'>
                                    <h6 className='text-muted ms-2 mx-3'>Room Type: <span className='fw-bold text-dark ms-2'>{bookingDetails?.bookedFor?.roomType}</span></h6>
                                    <h6 className='text-muted ms-2'>Room Number: <span className='fw-bold text-dark ms-2'>{bookingDetails?.bookedFor?.roomNumber}</span></h6>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h6 className='text-dark'>Payment Summary</h6>
                                <div class="d-flex justify-content-between ms-2 text-muted">
                                    <span>Rate Per Night</span><span>${bookingDetails?.bookedFor?.ratePerNight}</span>
                                </div>
                                <div class="d-flex justify-content-between ms-2 text-muted">
                                    <span>Total Price</span><span>${bookingDetails?.roomTotalPrice}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingCancel;
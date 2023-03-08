import { Modal, Rating } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Auth from '../../Firebase/firebase.init';
import Footer from '../../SharedComponent/Footer/Footer';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './Reservation.scss'


const Reservation = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm()
    const [user, loading, error] = useAuthState(Auth)

    const [spinner, setSpinner] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [roomDetailsData, setRoomDetailsData] = useState({})
    const [bookedSuccess, setBookedSuccess] = useState(false)
    const [bookedData, setBookedData] = useState([])
    const [bookingError, setBookingError] = useState('')


    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/roomFindById/${id}`)
            .then(res => res.json())
            .then(data => setRoomDetailsData(data.value))
    }, [id])

    console.log(roomDetailsData)
 
    let roomPerNight;

   const getDays = (checkIn,checkOut) =>{
        const price = roomDetailsData.ratePerNight
        const date1 = new Date(checkIn)
        const date2 = new Date(checkOut)
        const diff = Math.abs(date2.getTime() - date1.getTime())
       const days = Math.ceil(diff / (1000 * 3600 * 24));

       const totalPrice = price * days
       return roomPerNight ={totalPrice , days}
   }
   

    const onSubmit = (formData) => {
        getDays(formData.checkIn,formData.checkOut)  
        const roomTotalPrice = roomPerNight.totalPrice
        const days = roomPerNight.days

        const checkIn = formData.checkIn
        const checkOut = formData.checkOut

        const bookdata = { ...formData,checkIn,checkOut, bookedFor: [id],roomTotalPrice,days}

        setSpinner(true)
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/createBooking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status === 'success') {
                    setBookedSuccess(true)
                    setSpinner(false)
                    handleOpen()
                } else {
                    setBookedSuccess(false)
                    setBookingError(data?.error?.message)
                    setBookedData(data?.book?.reserved)
                    setSpinner(false)
                    handleOpen()
                }
            })
    }


    return (
        <div>
            <div className='fixed-top' style={{ backgroundColor: 'black' }}>
                <Navbar ></Navbar>
            </div>

            <div className='room-reserve-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10  mx-auto'>
                            <div className='title text-center'>
                                <h1>Book-Reservation</h1>
                                <div className='text-center d-flex justify-content-center'>
                                    <h5 className=''>Home</h5>
                                    <p className='mx-2 '>/</p>
                                    <h5 style={{ color: '#ffcb05' }}>Room Reservation</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='reservation-block container' style={{ marginTop: '100px' }}>
                <div className='row'>
                    <div className='col-md-4 col-12'>
                        <div className='container'>
                            <div className='thumbs-block mb-3'>
                                <img width={'100%'} src={roomDetailsData.roomImage} alt="" />
                            </div>
                            <div className='details-block '>
                                <h3>{roomDetailsData.roomType}-Room</h3>
                                <Rating defaultValue={5}></Rating>
                                <p className='mb-4 mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt .</p>

                                <ul className='list-unstyled'>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Room Feature <span className='fw-bold'>{roomDetailsData.roomFeature} </span> in this room,</p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Room Cancelation Charge <span className='fw-bold'>{roomDetailsData.roomCancelCharge},</span></p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Bed Capacity Only <span className='fw-bold'>{roomDetailsData.roomBedCapacity},</span></p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Room Meal <span className='fw-bold'>{roomDetailsData.roomMeal}</span>,</p>
                                    </li>
                                </ul>
                                <p className='fs-5'>
                                    From <span className='fs-2 text-warning'> $ {roomDetailsData.ratePerNight}</span>/Night
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='reservation-form container'>
                            <div>
                                <h1 className='fw-bold'>Reservation</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row mt-4' >
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input {...register('firstName')} required className='form-control' placeholder='First Name' type="text" />
                                            <span>
                                                <i className='fa fa-user'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input {...register('lastName')} required className='form-control' placeholder='Last Name' type="text" />
                                            <span>
                                                <i className='fa fa-user'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input {...register('email')} readOnly defaultValue={user.email} className='form-control' placeholder='Email' type="text" />
                                            <span>
                                                <i className='fa fa-envelope'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input type="number" {...register('contactNumber')} required className='form-control' placeholder='Phone Number' />
                                            <span>
                                                <i className='fa fa-phone'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input type={'date'}  min={new Date().toISOString().split('T')[0]}  {...register('checkIn')} required className='form-control' placeholder='Arrival Date' />
                                            {/* <span>
                                                <i  className='fa fa-calendar'></i>
                                            </span> */}
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input type={'date'}  min={new Date().toISOString().split('T')[0]} {...register('checkOut')} required className='form-control' placeholder='Departure Date'  />
                                            {/* <span>
                                                <i className='fa fa-calendar'></i>
                                            </span> */}
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input type="number"  {...register('adult')} required className='form-control' placeholder='Adult' />
                                            <span>
                                                <i class="fa fa-male" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input type="number"  {...register('children')} className='form-control' placeholder='Children' />
                                            <span>
                                                <i class="fa fa-child" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input type="number" {...register('infants')} className='form-control' placeholder='Infants' />
                                            <span>
                                                <i class="fa-solid fa-baby"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <textarea {...register('message')} required rows="4" className='col-md-12 col-12' placeholder='Enter Message'></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div className='mb-4'>
                                    <button type="submit" className='btn btn-warning text-dark px-3'>
                                        {spinner &&<div class="spinner-border spinner-border-sm me-2" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>}
                                        <span> Reserve </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            {
                                bookedSuccess ?
                                    <div className='py-3 text-center'>
                                        <i class="bi bi-check-circle fs-1 text-success"></i>
                                        <h5 className='text-success'>Room Booking Successfull</h5>
                                    </div>
                                    :
                                    <div className='py-3 text-center'>
                                        <i class="bi bi-x-circle fs-1 text-danger"></i>
                                        <p className='text-danger'>{bookingError}</p>
                                        <h5 className='text-dark'>Unavailable Booking Date</h5>
                                        <ul className='list-unstyled'>
                                            {
                                                [...bookedData]?.reverse().slice(0,5).map(date =>
                                                    <li className='text-primary' key={date._id}>{date.checkIn} <span className='fw-bold text-dark mx-2'> To</span>  {date.checkOut}</li>
 
                                                    )
                                            }

                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Reservation;
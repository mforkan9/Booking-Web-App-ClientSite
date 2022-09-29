import { Box, FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';
import React from 'react';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import './Reservation.scss'




const Reservation = () => {

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
                                <img width={'100%'} src="https://placeimg.com/800/600/nature?random=2" alt="" />
                            </div>
                            <div className='details-block '>
                                <h3>Single-Room</h3>
                                <Rating defaultValue={5}></Rating>
                                <p className='mb-4 mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt .</p>

                                <ul className='list-unstyled'>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                    </li>
                                    <li className='d-flex'>
                                        <span>
                                            <i class="fa fa-check-circle fs-5 text-warning my-1 me-3" aria-hidden="true"></i>                                        </span>
                                        <p>Lorem ipsum dolor sit amet,</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='reservation-form container'>
                            <div>
                                <h1 className='fw-bold'>Reservation</h1>
                            </div>
                            <form>
                                <div className='row mt-4' >
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='First Name' type="text" name="" />
                                            <span>
                                                <i className='fa fa-user'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Last Name' type="text" name="" />
                                            <span>
                                                <i className='fa fa-user'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Email' type="text" name="" />
                                            <span>
                                                <i className='fa fa-envelope'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Phone Number' type="tel" name="" />
                                            <span>
                                                <i className='fa fa-phone'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Arrival Date' type="text" name="" />
                                            <span>
                                                <i className='fa fa-calendar'></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Departure Date' type="text" name="" />
                                            <span>
                                                <i className='fa fa-calendar'></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Adult' type="text" name="" />
                                            <span>
                                                <i class="fa fa-male" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Children' type="text" name="" />
                                            <span>
                                                <i class="fa fa-child" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <input className='form-control' placeholder='Infants' type="text" name="" />
                                            <span>
                                                <i class="fa-solid fa-baby"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <textarea rows="4" className='col-md-12 col-12' placeholder='Enter Message'></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div className='mb-4'>
                                    <button type="submit" className='btn btn-warning text-dark'>Reserve</button>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
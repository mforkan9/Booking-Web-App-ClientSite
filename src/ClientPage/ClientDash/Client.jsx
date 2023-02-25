import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Components/MainHomeItem/Navbar/Navbar';
import Auth from '../../Firebase/firebase.init';
import './Client.scss'

const Client = () => {
    const [user] = useAuthState(Auth)
    return (
        <div>
            <div className='fixed-top' style={{ backgroundColor: '#0d0d0d' }}>
                <Navbar></Navbar>
            </div>
            <div className='client-dash'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='desh-heading'>
                                <h2>Booking <span>Profile</span></h2>
                                <p className='mb-0 text-muted'>Hi <span className='text-warning'>{user.displayName}</span>,Welcome to START HOTEL</p>
                            </div>
                        </div>
                    </div>
                    <div className='desh-inner my-4 container'>
                        <div className='row '>
                            <div className='col-12 col-md-12 col-lg-2 col-xl-2 mb-4'>
                                <div class="text-center">
                                    <div class="row row-cols-12 sidenav">
                                        <NavLink to={'/client/'} className={({ isActive }) => isActive ? 'col col-3 col-sm-3 col-md-3 col-lg-12 activeClass' : 'col col-3 col-sm-3 col-md-3 col-lg-12 li'}>
                                            <div className=''>
                                                <span>
                                                    <i class="fa fa-cogs d-none d-sm-block d-md-block" aria-hidden="true"></i>
                                                </span>
                                                <span className='text-white '>Dashboard</span>
                                            </div>
                                        </NavLink>
                                        <NavLink to={'/client/myprofile'} className={({ isActive }) => isActive ? ' col col-3 col-sm-3 col-md-3 col-lg-12 activeClass' : 'col col-3 col-sm-3 col-md-3 col-lg-12 li'}>
                                            <div>
                                                <span>
                                                    <i class="fa fa-user d-none d-sm-block d-md-block" aria-hidden="true"></i>
                                                </span>
                                                My Profile
                                            </div>
                                        </NavLink>
                                        <NavLink to={'/client/mybooking'} className={({ isActive }) => isActive ? ' col col-3 col-sm-3 col-md-3 col-lg-12 activeClass' : 'col col-3 col-sm-3 col-md-3 col-lg-12 li'}>
                                            <div>
                                                <span>
                                                    <i class="fa fa-briefcase d-none d-sm-block d-md-block" aria-hidden="true"></i>
                                                </span>
                                                Booking
                                            </div>
                                        </NavLink>
                                        <div class="col col-3 col-sm-3 col-md-3 col-lg-12 li">
                                            <div>
                                                <span>
                                                    <i class="fa fa-heart d-none d-sm-block d-md-block" aria-hidden="true"></i>
                                                </span>
                                                WishList
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-10 col-xl-10 '>
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
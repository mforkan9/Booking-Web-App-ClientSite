/* eslint-disable jsx-a11y/anchor-is-valid */
import { ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import img1 from './profile-user.png'
import './Admin.scss'

const Admin = () => {
  const [toggler, setToggler] = useState(false)

  const handleToggle = () => {
    setToggler(current => !current)
  }

  

  return (
    <div className=' container-fluid'>
      <div className='row'>
        <div className={toggler ? 'col-auto col-md-3 col-lg-3 col-xl-2  px-sm-2 px-0 offcanvas show sidebar' : 'col-auto col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 col-xxl-2  d-none d-sm-block sidebar'}>
          <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 make-me-sticky'>
            <div className='text-dark d-flex'>
              <h3>START<span>HOTEL</span></h3>
              <button type="button" class="btn-close text-reset mx-3 my-1 d-lg-none d-xl-block d-md-none d-lg-block d-xl-none d-sm-none d-md-block" onClick={handleToggle}></button>
            </div>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  text-dark' id='menu'>
              <li>
                <Link to={'/adminDashboard/'}>
                  <a href="#">
                    <span><i class="bi bi-speedometer2 fs-4"></i></span>
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
               
                  <a
                    data-mdb-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample">
                    <span><i class="bi bi-hospital fs-4"></i></span>
                    <span>Hotel</span>
                    <span><i className='fa fa-chevron-down arrow  arrowed'></i></span>
                  </a>
                  <div className="collapse mt-2  bg-light" id="collapseExample">
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomList'}> <a href='#' className='item-list'><small>All</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Active</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Draft</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Expried</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Featured</small> </a> </Link> 
                  </div>
               
              </li>
              <li>
               
                  <a
                    data-mdb-toggle="collapse"
                    href="#collapseExampleBooking"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExampleBooking">
                    <span><i class="bi bi-bag-check fs-4"></i></span>
                    <span>Booking</span>
                    <span><i className='fa fa-chevron-down arrow  arrowed'></i></span>
                  </a>
                  <div className="collapse mt-2  bg-light" id="collapseExampleBooking">
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </Link> 
                  <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </Link> 
                  </div>
               
              </li>
              <li>
                <Link to={'/adminDashboard/'}>
                  <a href="#">
                    <span><i class="bi bi-file-text fs-4" title='title'></i></span>
                    <span>Reviews</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={'/adminDashboard/'}>
                  <a href="#">
                    <span><i class="bi bi-person-fill fs-3"></i></span>
                    <span>Profile</span>
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className='col-md-9 col-lg-9 col-xl-10 col-xxl-10  col-auto py-3 '>
          <main className='row col overflow-auto'>
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <div className='d-none d-sm-block make-me-sticky'>
                  <h3>Booking</h3>
                </div>
                <div class=" d-lg-none d-xl-block d-md-none d-lg-block d-xl-none d-sm-none d-md-block" id="navbarSupportedContent">
                  <ToggleButton value="justify" key="justify" onClick={handleToggle}>
                    Toggle
                  </ToggleButton>
                </div>
                <div class="d-flex align-items-center">
                  <ul class="navbar-nav me-auto  mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link me-3 fw-bold " href="#">ghfg</a>
                    </li>
                  </ul>

                  {/* <a href="#" class="cart position-relative d-inline-flex m-2 me-4 " aria-label="View your shopping cart" >
                      <i class="zmdi zmdi-shopping-cart  zmdi-hc-2x"></i>
                      <span class="cart-basket d-flex align-items-center justify-content-center">
                        
                      </span>
                    </a> */}
                  <div>
                    <div class="dropdown me-1">
                      <a
                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href='#'
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >

                        <img
                          src={img1}
                          class="rounded-circle"
                          height="40"
                          alt="Avatar"
                          loading="lazy"
                        />

                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end py-4 px-3"
                        aria-labelledby="navbarDropdownMenuAvatar"
                      >
                        <li>
                          <Link to='/dashboard/profile' className='dropdown-item d-flex'>
                            <i class="bi bi-person-circle fs-5 me-2"></i>
                            <a class="my-1 text-dark" href="#">Profile</a>
                          </Link>
                        </li>
                        <li>
                          <span className='dropdown-item d-flex'> <i class="bi bi-box-arrow-left fs-5 me-2"></i> <a class="my-1 text-dark" href="#"> LogOut</a> </span>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </nav>
            <div className='mb-5' onClick={() => setToggler(false)} >
              <Outlet></Outlet>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
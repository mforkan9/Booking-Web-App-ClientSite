/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link , NavLink, Outlet } from 'react-router-dom';
import img1 from './profile-user.png'
import './Admin.scss'

const Admin = () => {
  const [toggler, setToggler] = useState(false)

  const handleToggle = () => {
    setToggler(current => !current)
  }


  return (
    <div className=' container-fluid'>
      <div className='row '>
        <div  className={toggler ? 'col-auto  col-md-10 col-lg-3 col-xl-2 px-0 offcanvas show sidebar'  : ' col-auto col-md-3 col-lg-3 col-xl-2  px-0 col-xxl-2  d-none d-sm-block d-sm-none d-md-block sidebar '}>
          <div className='d-flex  flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 sticky' >
            <div className='text-dark d-flex'>
              <Link  to={'/'}>
              <h3>START<span>HOTEL</span></h3>
              </Link>
              <button type="button" class="btn-close text-reset mx-3 my-3 d-lg-none  d-md-none  d-xl-none d-sm-none " onClick={handleToggle}></button>
            </div>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  text-dark' id='menu'>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/'}>
                  <a href="#">
                    <span><i class="bi bi-speedometer2 fs-4"></i></span>
                    <span>Dashboard</span>
                  </a>
                </NavLink>
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
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Create</small> </a> </NavLink> 
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/roomList'}> <a href='#' className='item-list'><small>All</small> </a> </NavLink> 
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/roomActive'}> <a href='#' className='item-list'><small>Active</small> </a> </NavLink> 
                  {/* <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Draft</small> </a> </Link>  */}
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/roomExpried'}> <a href='#' className='item-list'><small>Booked</small> </a> </NavLink> 
                  {/* <Link to={'/adminDashboard/roomAdd'}> <a href='#' className='item-list'><small>Featured</small> </a> </Link>  */}
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
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/bookings'}> <a href='#' className='item-list'><small>All</small> </a> </NavLink> 
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/pendingbookings'}> <a href='#' className='item-list'><small>Pending</small> </a> </NavLink> 
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/approvedbookings'}> <a href='#' className='item-list'><small>Approved</small> </a> </NavLink> 
                  <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/cancelbookings'}> <a href='#' className='item-list'><small>Canceled</small> </a> </NavLink> 
                  </div>
               
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/guest'}>
                  <a href="#">
                    <span><i class="bi bi-people fs-4"></i></span>
                    <span>Guest List</span>
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/reviews/'}>
                  <a href="#">
                    <span><i class="bi bi-file-text fs-4" title='title'></i></span>
                    <span>Reviews</span>
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/galleryManage'}>
                  <a href="#">
                    <span><i class="bi bi-images fs-4"></i></span>
                    <span>Gallery Manage</span>
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? 'activeDashitem' : undefined} to={'/adminDashboard/users/userlist'}>
                  <a href="#">
                    <span><i class="bi bi-person-fill fs-3"></i></span>
                    <span>Profile</span>
                  </a>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
        <div  className=' col-md-9 col-lg-9 col-xl-10 col-xxl-10  col-12 p-0'>
          <main className=''>
            <nav className="navbar navbar-expand-lg navbar-light py-3 stick" >
              <div class="container-fluid">
                <div className='d-none d-sm-block d-sm-none d-md-block '>
                  
                </div>
                <div class=" d-lg-none d-xl-block d-md-none d-lg-block d-xl-none" id="navbarSupportedContent">
                  <i class="bi bi-list fs-1 fw-bold text-dark ripple" role={'button'} onClick={handleToggle}></i>
                </div>
                <div class="d-flex align-items-center">
                  <ul class="navbar-nav me-auto  mb-lg-0">
                    {/* <li class="nav-item">
                      <a class="nav-link me-3 fw-bold " href="#">ghfg</a>
                    </li> */}
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
                          <NavLink to='/adminDashboard/users/userlist' className='dropdown-item d-flex'>
                            <i class="bi bi-person-circle fs-5 me-2"></i>
                            <a class="my-1 text-dark" href="#">Profile</a>
                          </NavLink>
                        </li>
                        <li onClick={() => window.location.reload()}>
                          <span className='dropdown-item d-flex'> <i class="bi bi-box-arrow-left fs-5 me-2"></i> <a class="my-1 text-dark" href="#"> LogOut</a> </span>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </nav>
            <div className=' p-3 ' onClick={() => setToggler(false)}>
              <Outlet></Outlet>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
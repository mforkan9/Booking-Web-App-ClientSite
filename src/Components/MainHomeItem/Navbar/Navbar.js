/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'



const Navbar = () => {

  
  return (
    <div className='navStyle'>
      <nav class="navbar navbar-expand-lg navbar-light" style={{boxShadow:'none'}}>
        <div class="container">
          <a class=" logo" href="#">
            <span>START</span>
            HOTEL
            </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars text-light"></i>
          </button>

          <div class="collapse navbar-collapse listStyle" id="navbarNav" >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
              <Link to={'/'}> <a class="" aria-current="page" href="#">Home</a> </Link> 
              </li>
              <li class="nav-item">
              <Link to={'/roomList'}><a class="" href="#">Room <span> <i className='fa fa-angle-down'></i> </span> </a> </Link>  
              </li>
              <li class="nav-item">
                <a class="" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <Link to={'/adminDashboard'}><a class="" href='#'>ADMIN</a></Link>
              </li>
            </ul>
            <button type="button" class="btn btn-outline-warning " data-mdb-ripple-color="dark">Book Now</button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
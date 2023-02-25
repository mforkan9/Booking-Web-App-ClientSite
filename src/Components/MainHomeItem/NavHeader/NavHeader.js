/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavHeader.scss'

const NavHeader = () => {
    return (
        <div className='top-bar'>
          <div className='container'>
            <div className='row mx-aurto'>
                <div className='col-md-8 col-lg-8 col-xl-8 col-8'>
                    <div className='info'>
                        <ul className='list-unstyled list-inline my-2 mb-0'>
                            <li className='list-inline-item me-4'>
                                <span className='me-2'>
                                <i class="zmdi zmdi-pin"></i>
                                </span>
                                2nd floor,Bonani,Dhaka
                            </li>
                            <li className='list-inline-item'>
                                <span className='me-2'>
                                    <i class="zmdi zmdi-phone">
                                        </i></span>
                                +123 4567
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-xl-4 col-4 text-end '>
                    <div className='links text-dark my-2'>
                        <ul className='list-unstyled list-inline'>
                            <li className='list-inline-item me-3'>
                                <a href="#">
                                    <span>
                                    <i class="zmdi zmdi-facebook  text-dark"></i>  
                                    </span>
                                </a>
                            </li>
                            <li className='list-inline-item me-3'>
                            <a href="#">
                                    <span>
                                    <i class="zmdi zmdi-twitter  text-dark"></i> 
                                    </span>
                                </a>
                            </li>
                            <li className='list-inline-item me-3'>
                            <a href="#">
                                    <span>
                                    <i class="zmdi zmdi-pinterest  text-dark"></i> 
                                    </span>
                                </a>
                            </li>
                            <li className='list-inline-item '>
                            <a href="#">
                                    <span>
                                    <i class="zmdi zmdi-instagram  text-dark"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    );
};

export default NavHeader;
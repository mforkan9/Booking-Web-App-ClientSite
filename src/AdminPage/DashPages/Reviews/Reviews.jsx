/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Reviews.scss'

const Reviews = () => {
    return (
        <div className='my-4 container'>
            <h4>Reviews</h4>
            <div className='my-4 reviewsSection'>
                <div className='reviewsTab container'>
                    <nav class="nav">
                        <NavLink   className={({ isActive }) => isActive ? 'border-bottom border-3 border-primary' : undefined} to={'/adminDashboard/reviews/'}>
                            <a class="nav-link mx-2" href="#">All Reviesw</a>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'border-bottom border-3 border-primary' : undefined} to={'/adminDashboard/reviews/published'}> 
                        <a class="nav-link mx-2"  href="#">Published</a>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'border-bottom border-3 border-primary' : undefined} to={'/adminDashboard/reviews/deleted'}> 
                        <a class="nav-link mx-2"  href="#">Deleted</a>
                        </NavLink>

                    </nav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
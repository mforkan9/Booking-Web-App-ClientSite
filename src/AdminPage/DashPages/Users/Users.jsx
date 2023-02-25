/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Users.scss'

const Users = () => {
    return (
        <div className='my-4 container'>
            <h4>Users</h4>
            <div className='my-4 usersSection'>
                <div className='reviewsTab container'>
                    <nav class="nav">
                        <NavLink   className={({ isActive }) => isActive ? 'border-bottom border-3 border-warning' : undefined} to={'/adminDashboard/users/userlist'}>
                            <a class="nav-link mx-2" href="#"> Users</a>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'border-bottom border-3 border-warning' : undefined} to={'/adminDashboard/users/addUser'}> 
                        <a class="nav-link mx-2"  href="#">Add User</a>
                        </NavLink>
                        {/* <NavLink className={({ isActive }) => isActive ? 'border-bottom border-3 border-primary' : undefined} to={'/adminDashboard/reviews/deleted'}> 
                        <a class="nav-link mx-2"  href="#">Deleted</a>
                        </NavLink> */}

                    </nav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Users;
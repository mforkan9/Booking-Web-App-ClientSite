/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../../../Firebase/firebase.init';
import './Navbar.scss'



const Navbar = () => {
  const [user, loading, error] = useAuthState(Auth)
  
  const logOut = () =>{
    signOut(Auth)
  }


  return (
    <div className='navStyle '>
      <nav class="navbar navbar-expand-lg navbar-light " style={{ boxShadow: 'none' }}>
        <div class="container">
          <Link to={'/'}>
          <a class=" logo" href="#">
            <span>START</span>
            HOTEL
          </a>
          </Link>
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
                <NavLink className={({ isActive }) => isActive ? 'activeClassName' : undefined} to={'/'}> <a aria-current="page" href="#">Home</a> </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'activeClassName' : undefined} to={'/roomList'}><a class="" href="#">Rooms</a> </NavLink>
              </li>
              {/* <li class="nav-item">
              <Link  to={'/login'}><a class="" href="#">login</a> </Link>  
              </li> */}
              <li class="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'activeClassName' : undefined} to={'/features'}><a class="" href="#">Features</a></NavLink>
              </li>
              {/* <li class="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'activeClassName' : undefined} to={'/adminlogin'}><a class="" href="#">About</a></NavLink>
              </li> */}
              <li class="nav-item">
                <Link to={'/adminDashboard'}><a class="" href='#'>ADMIN</a></Link>
              </li>
            </ul>
            {
              user?.email ?

                <div class="dropdown drop-style ">
                  <a
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar2"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL}
                      sx={{ width: 56, height: 56 }}
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-lg-end"
                    aria-labelledby="navbarDropdownMenuAvatar2"
                  >
                    <MenuList>
                    <Link to={'/client/'}>
                      <MenuItem className='drop-nav'>
                        <ListItemIcon>
                          <i class="bi bi-person-fill text-primary  fs-4"></i>
                        </ListItemIcon>
                        <ListItemText>My Profile</ListItemText>
                      </MenuItem>
                      </Link>
                      <MenuItem className='drop-nav'>
                        <ListItemIcon>
                        <i class="bi bi-gear-fill text-success fs-5"></i>
                        </ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                      </MenuItem>
                      {/* <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>

                      </MenuItem> */}
                      <Divider />
                      <MenuItem className='drop-nav' 
                        onClick={async () => {
                          const success = await logOut();
                          if (success) {
                            alert('You are sign out');
                          }
                        }}>
                        <ListItemIcon>
                        <i class="bi bi-box-arrow-right text-warning fs-5"></i>
                        </ListItemIcon>
                        <ListItemText>LogOut</ListItemText>
                      </MenuItem>
                    </MenuList>

                    {/* <li className='d-flex '>
                      <Link to={'/client'} className=''> <a class="dropdown-item" >
                          <span><i class="bi bi-person  fs-5"></i></span>
                          My profile
                        </a></Link>
                      </li>
                      <li className='d-flex '>
                      <Link to={'/user'} className=''> <a class="dropdown-item" >
                          <span><i class="bi bi-person  fs-5"></i></span>
                          My pr
                        </a></Link>
                      </li>
                      <li className='d-flex '>
                      <Link to={'/user'} className=''> <a class="dropdown-item" >
                          <span><i class="bi bi-person  fs-5"></i></span>
                          My p
                        </a></Link>
                      </li>
                 */}

                  </div>
                </div>
                :
                <Link to={'/login'}> <button type="button" class="btn btn-outline-warning " data-mdb-ripple-color="dark">Login Now</button></Link>

            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
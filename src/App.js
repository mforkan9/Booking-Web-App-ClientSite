import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import Admin from './AdminPage/AdminDash/Admin';
import BookingApproved from './AdminPage/DashPages/Bookings/BookingApproved/BookingApproved';
import BookingCancel from './AdminPage/DashPages/Bookings/BookingCancel/BookingCancel';
import BookingList from './AdminPage/DashPages/Bookings/BookingList/BookingList';
import BookingPending from './AdminPage/DashPages/Bookings/BookingPending/BookingPending';
import GalleryManage from './AdminPage/DashPages/GalleryManage/GalleryManage';
import GuestDetails from './AdminPage/DashPages/Guest/GuestDetails/GuestDetails';
import GuestList from './AdminPage/DashPages/Guest/GuestList/GuestList';
import MainDash from './AdminPage/DashPages/MainDashboard/MainDash';
import AllReviews from './AdminPage/DashPages/Reviews/AllReviews/AllReviews';
import DeleteReviews from './AdminPage/DashPages/Reviews/DeleteReviews/DeleteReviews';
import PublishedReviews from './AdminPage/DashPages/Reviews/PublishedReviews/PublishedReviews';
import Reviews from './AdminPage/DashPages/Reviews/Reviews';
import RoomActive from './AdminPage/DashPages/Room/RoomActive/RoomActive';
import RoomAdd from './AdminPage/DashPages/Room/RoomAdd/RoomAdd';
import RoomEdit from './AdminPage/DashPages/Room/RoomEdit/RoomEdit';
import RoomExpried from './AdminPage/DashPages/Room/RoomExpried/RoomExpried';
import RoomList from './AdminPage/DashPages/Room/RoomList/RoomList';
import RoomOverview from './AdminPage/DashPages/Room/RoomOverview/RoomOverview';
import './App.css';
import Client from './ClientPage/ClientDash/Client';
import ClientBooking from './ClientPage/ClientDashPages/ClientBooking/ClientBooking';
import ClientDashboard from './ClientPage/ClientDashPages/ClientDashboard/ClientDashboard';
import ClientProfile from './ClientPage/ClientDashPages/ClientProfile/ClientProfile';
import Features from './Components/Features/Features';
import Home from './Components/Home/Home';
import Login from './Components/LoginPage/Login/Login';
import PrivateAuth from './Components/PrivateAuth/PrivateAuth';
import Reservation from './Components/Reservation/Reservation';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import RoomListing from './Components/RoomList/RoomListing';
import Auth from './Firebase/firebase.init';
import EmailVerified from './SharedComponent/EmailVerified/EmailVerified';
import useToken from './SharedComponent/Hooks/useToken';
import { createContext, useEffect, useState } from 'react';
import AOS from 'aos';
import Users from './AdminPage/DashPages/Users/Users';
import AddUser from './AdminPage/DashPages/Users/AddUser/AddUser';
import AdminLogin from './SharedComponent/Hooks/AdminLogin';
import AdminPrivateAuth from './SharedComponent/Hooks/AdminPrivateAuth';
import UserList from './AdminPage/DashPages/Users/UserList/UserList';

export const AdminContext = createContext()

function App() {
  const [user] = useAuthState(Auth)
  const [token] = useToken(user)
  const [isAdmin,setIsAdmin] = useState(false)

  useEffect(() => {
    AOS.init()
}, [])



  return (
    <AdminContext.Provider  value={[isAdmin,setIsAdmin]}>
      <Routes>
        <Route path='/' element={<Home />} exect />
        <Route path='/roomDetails/:id' element={<RoomDetails />} />
        <Route path='/roomList' element={<RoomListing />} />
        <Route path='/features' element={<Features />} />
        <Route path='/roomReservation/:id' element={
          <PrivateAuth>
            <Reservation></Reservation>
          </PrivateAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/verify' element={<EmailVerified />} />

        <Route path='/client' element={
          <PrivateAuth>
            <Client></Client>
          </PrivateAuth>
        }>
          <Route path='/client/' exect element={<ClientDashboard />} />
          <Route path='/client/myprofile' exect element={<ClientProfile />} />
          <Route path='/client/mybooking' exect element={<ClientBooking />} />

        </Route>

        <Route path='/adminDashboard' element={
          <AdminPrivateAuth>
            <Admin />
          </AdminPrivateAuth>
        }>
          <Route path='/adminDashboard/' exect element={<MainDash />} />
          <Route path='/adminDashboard/roomAdd' element={<RoomAdd />} />
          <Route path='/adminDashboard/roomList' element={<RoomList />} />
          <Route path='/adminDashboard/roomActive' element={<RoomActive />} />
          <Route path='/adminDashboard/roomExpried' element={<RoomExpried />} />
          <Route path='/adminDashboard/roomEdit/:id' element={<RoomEdit />} />
          <Route path='/adminDashboard/roomList/roomOverview/:id' element={<RoomOverview />} />


          <Route path='/adminDashboard/bookings' element={<BookingList />} />
          <Route path='/adminDashboard/cancelbookings' element={<BookingCancel />} />
          <Route path='/adminDashboard/approvedbookings' element={<BookingApproved />} />
          <Route path='/adminDashboard/pendingbookings' element={<BookingPending />} />

          <Route path='/adminDashboard/guest' element={<GuestList />} />
          <Route path='/adminDashboard/guestDetails/:email' element={<GuestDetails />} />

          <Route path='/adminDashboard/galleryManage' element={<GalleryManage />} />

          <Route path='/adminDashboard/reviews' element={<Reviews />}>
              <Route path='/adminDashboard/reviews/' exect element={<AllReviews />}/>
              <Route path='/adminDashboard/reviews/published' element={<PublishedReviews />}/>
              <Route path='/adminDashboard/reviews/deleted' element={<DeleteReviews />}/>
          </Route>
          <Route path='/adminDashboard/users' element={<Users />}>
              <Route path='/adminDashboard/users/userlist' exect element={<UserList />}/>
              <Route path='/adminDashboard/users/addUser' element={<AddUser />}/>
              {/* <Route path='/adminDashboard/reviews/deleted' element={<DeleteReviews />}/> */}
          </Route>
        </Route>

      </Routes>
    </AdminContext.Provider>



  );
}

export default App;

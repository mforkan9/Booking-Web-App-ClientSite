import { Route, Routes } from 'react-router-dom';
import Admin from './AdminPage/AdminDash/Admin';
import MainDash from './AdminPage/DashPages/MainDashboard/MainDash';
import RoomAdd from './AdminPage/DashPages/Room/RoomAdd/RoomAdd';
import RoomList from './AdminPage/DashPages/Room/RoomList/RoomList';
import './App.css';
import Home from './Components/Home/Home';
import Reservation from './Components/Reservation/Reservation';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import RoomListing from './Components/RoomList/RoomListing';
  

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} exect />
        <Route path='/roomDetails' element={<RoomDetails />} />
        <Route path='/roomList' element={<RoomListing />} />
        <Route path='/roomReservation' element={<Reservation />} />
        <Route path='/adminDashboard' element={<Admin />}>
          <Route path='/adminDashboard/' exect element={<MainDash/>}/>
          <Route path='/adminDashboard/roomAdd' element={<RoomAdd/>}/>
          <Route path='/adminDashboard/roomList' element={<RoomList/>}/>
        </Route>
      </Routes>
    </div>



  );
}

export default App;

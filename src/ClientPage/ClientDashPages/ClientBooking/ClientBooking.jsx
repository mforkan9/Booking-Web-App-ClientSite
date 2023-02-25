import { CircularProgress, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Auth from '../../../Firebase/firebase.init';
import './ClientBooking.scss'

const ClientBooking = () => {
    const [user] = useAuthState(Auth)
    const [clientBooked, setClientBooked] = useState([])
    const [error, setError] = useState('')
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    const [totalData, setTotalData] = useState(0)
    const [dataLimit, setDataLimit] = useState(3)
    const [cancelSuccess, setCancelSuccess] = useState(false)
    const [cancelSpinner, setCancelSpinner] = useState(false)


    const handlePageChange = (event, value) => {
        setActivePage(value)
    }


    useEffect(() => {

        const FetchData = async () => {
            const res = await fetch(`http://localhost:8000/api/v1/client/findUserByToken/${user.email}?page=${activePage}&limit=${dataLimit}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${user.accessToken}`
                }
            })
            const result = await res.json()
            console.log(result);
            setClientBooked(result?.booking?.bookedId)

            setTotalData(result?.totalCount)
            const pageNumber = result?.totalCount
            const count = Math.ceil(pageNumber / dataLimit)
            setPage(count)

        }
        FetchData().catch(err => console.log(err))

    }, [user, activePage, dataLimit,cancelSuccess])

    

    const bookingCancel = async (id,roomId) =>{
        setCancelSpinner(true)
       const fetchData = await fetch(`http://localhost:8000/api/v1/booking/cancelBooking/${id}?email=${user.email}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({roomId})
        })
      
        setCancelSuccess(fetchData.ok)
        setCancelSpinner(false)
    }


    return (
        <div className='px-1 client-book'>
            <h2 className='mb-4'>My Booking</h2>
            <div className='card border'>
                <div className='card-header'>
                    <h4>Booked</h4>
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <tbody>
                                {
                                    clientBooked?.map(booking =>

                                        <tr>
                                            <td className='date-list'>
                                                <div className='date'>
                                                    <h3 className='mb-1'>{`${new Date(booking?.checkIn).getDate()}`}</h3>
                                                    <span>{`${new Date(booking?.checkIn).toLocaleDateString('en-US', { month: "long" })}`}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <h3><Link to={`/roomDetails/${booking.bookedFor._id}`}><span className='text-dark'>{booking?.bookedFor?.roomType} Room R-{booking.bookedFor.roomNumber}</span></Link></h3>
                                                <ul className='list-unstyled'>
                                                    <li><span className='fw-bold'>Booking Date: </span>{`${new Date(booking?.createdAt).toLocaleDateString()} at ${new Date(booking.createdAt).toLocaleTimeString()}`}</li>
                                                    <li><span className='fw-bold'>Booking Details:</span> Adult {booking?.adult} children {booking?.children}</li>
                                                    <li><span className='fw-bold'>CheckIn:</span>{booking?.checkIn}</li>
                                                    <li><span className='fw-bold'>CheckOut:</span>{booking?.checkOut}</li>
                                                    <li><span className='fw-bold'>Price:</span>{booking?.roomTotalPrice}</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <p className={`my-5 badge ${booking?.status === 'approved' ? 'badge-success' : booking?.status === 'canceled' ? 'text-danger' : 'bg-warning text-dark'} fs-6`}>{booking?.status}</p>
                                            </td>
                                            {booking?.status === 'pending' && <td>
                                                <p className='badge bg-danger ripple fs-6 my-5 px-4 py-2' role={'button'} onClick={() => bookingCancel(booking?._id,booking?.bookedFor?._id)}>{cancelSpinner && <CircularProgress className='me-2' color='info' size={15}></CircularProgress>}Cancel</p>
                                            </td>}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination count={page} onChange={handlePageChange} variant="outlined" color="primary" />

                </div>
            </div>
        </div>
    );
};

export default ClientBooking;
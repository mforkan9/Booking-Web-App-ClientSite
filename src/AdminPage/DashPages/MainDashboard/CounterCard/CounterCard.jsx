import React, { useEffect, useState } from 'react';
import './CounterCard.scss'

const CounterCard = () => {
    const [allBooking,setAllBooking] = useState(0)
    const [allRoom,setAllRoom] = useState(0)
    const [allGuest,setAllGuest] = useState(0)
    const [allReviews,setAllReviews] = useState(0)
    
    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/booking/allBooking`)
        .then(res => res.json())
        .then(data => setAllBooking(data.totalData))

        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/createRoom`)
        .then(res => res.json())
        .then(data => setAllRoom(data.totalData))

        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/client/allClient`)
        .then(res => res.json())
        .then(data => setAllGuest(data.totalCount))

        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/review/getAllReviews`)
        .then(res => res.json())
        .then(data => setAllReviews(data.total))
    }, [])

    
    return (
        <div className='counter-card'>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-xl-3 col-6 mb-3'>
                    <div className='card gradiant-1'>
                        <div className='card-body d-flex align-items-center'>
                            <div className='me-auto '>
                                <h2 className='fw-bold mb-0'>{allBooking}</h2>
                                <span>Bookings</span>
                            </div>
                            <div>
                                <i class="bi bi-bookmark fs-1 fw-bold"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-6 mb-3'>
                    <div className='card gradiant-2'>
                        <div className='card-body d-flex align-items-center'>
                            <div className='me-auto '>
                                <h2 className='fw-bold mb-0'>{allRoom}</h2>
                                <span className=''>Shedule Room</span>
                            </div>
                            <div>
                                <i class="bi bi-calendar2-check fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-6 mb-3'>
                    <div className='card gradiant-3'>
                        <div className='card-body d-flex align-items-center'>
                            <div className='me-auto '>
                                <h2 className='fw-bold mb-0'>{allGuest}</h2>
                                <span>Guest</span>
                            </div>
                            <div>
                                <i class="bi bi-person-fill fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 col-6 mb-3'>
                    <div className='card gradiant-4'>
                        <div className='card-body d-flex align-items-center'>
                            <div className='me-auto '>
                                <h2 className='fw-bold mb-0'>{allReviews}</h2>
                                <span>Reviews</span>
                            </div>
                            <div>
                                <i class="bi bi-chat-left-text fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterCard;
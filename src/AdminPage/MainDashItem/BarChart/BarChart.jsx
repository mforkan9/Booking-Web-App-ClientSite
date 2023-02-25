import React, { useEffect, useState } from 'react';
import useFetch from '../../../SharedComponent/Hooks/useFetch';
import './BarChart.scss'

const BarChart = () => {
    const [approvedData,setApprovedData] = useState(0)
    const [pendingData,setPendingData] = useState(0)
    const [canceledData,setCanceledData] = useState(0)

    // const {data} = useFetch(`http://localhost:8000/api/v1/booking/allBooking`)

    // console.log(data)

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/booking/statusBooking?status=approved`)
            .then(res => res.json())
            .then(data =>setApprovedData(data.totalData))
        fetch(`http://localhost:8000/api/v1/booking/statusBooking?status=pending`)
            .then(res => res.json())
            .then(data =>setPendingData(data.totalData))
        fetch(`http://localhost:8000/api/v1/booking/statusBooking?status=canceled`)
            .then(res => res.json())
            .then(data =>setCanceledData(data.totalData))
    }, [])
    return (
        <div className='card progress-card'>
            <div className='card-header border-0 pb-0 mb-0'>
                <h5>Booked Room</h5>
            </div>
            <div className="card-body">
                <div class="progress">
                    <div class="progress-bar progress-1 bg-success" role="progressbar" style={{ width: `${pendingData}%` }} aria-valuenow={55} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-2 bg-success" role="progressbar" style={{ width: `${approvedData}%` }} aria-valuenow={55} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-3 bg-success" role="progressbar" style={{ width: `${canceledData}%` }} aria-valuenow={55} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='d-flex mt-4 align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <span className='marker mark-1'></span>
                        <div>
                            <p className='status'>Pending</p>
                            <span className='result'>{pendingData}</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <span className='marker mark-2'></span>
                        <div>
                            <p className='status'>Approved</p>
                            <span className='result'>{approvedData}</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <span className='marker mark-3'></span>
                        <div>
                            <p className='status'>Canceled</p>
                            <span className='result'>{canceledData}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarChart;
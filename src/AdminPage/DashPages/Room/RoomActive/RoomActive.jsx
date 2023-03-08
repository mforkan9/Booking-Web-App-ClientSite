import { Pagination } from '@mui/material';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const RoomActive = () => {
    const [allActiveData, setAllActiveData] = useState([])
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    const [totalData, setTotalData] = useState(0)
    const [dataLimit, setDataLimit] = useState(5)
    const [filterData, setFilterData] = useState('')

    useEffect(() => {
        fetch(`https://start-hotel-practice-project.onrender.com/api/v1/room/roomFindByStatus?status=${'Active'}&page=${activePage}&limit=${dataLimit}&&filter=${filterData}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllActiveData(data.data)
                setTotalData(data.totalData)
                const pageNumber = data.totalData
                const count = Math.ceil(pageNumber / dataLimit)
                setPage(count)

            })
    }, [activePage, dataLimit, filterData])

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }

    const navigate = useNavigate();
    const handleOnClick  = useCallback((id) => navigate(`/adminDashboard/roomList/roomOverview/${id}`, {replace: true}), [navigate])

    return (
        <div className='my-4'>
        <h4>Room Active list</h4>
        <div className='list-table container my-3'>
            <div class="row mb-3 py-4">
                <div class="col-auto me-auto">
                    Show
                    <select onChange={(e) => setDataLimit(e.target.value)} className='mx-2'>
                        <option selected value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    entries
                </div>
                <div class="col-auto">
                    <input class="form-control me-2" type="text" placeholder="Search Type" onChange={(e) => setFilterData(e.target.value)} />
                </div>
            </div>

            <div className='table-responsive mb-3' >
                <table class="table align-middle mb-4 my-4 bg-white table-hover">
                    <thead class="bg-light">
                        <tr className='text-center'>
                            <th>Img</th>
                            <th>#</th>
                            <th>Type</th>
                            <th>Feature</th>
                            <th>Meal</th>
                            <th>Capcity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Rent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allActiveData?.map(item =>


                                <tr className='text-center'>
                                    <td onClick={() => handleOnClick(item?._id)} role={'button'}>
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={item?.roomImage}
                                                alt=""
                                                style={{ width: '55px', height: '55px' }}
                                                class="rounded-circle"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        {item.roomNumber}
                                    </td>
                                    <td className={filterData ? 'text-primary' : ''}>{item?.roomType}</td>
                                    <td>{item?.roomFeature}</td>
                                    <td>{item?.roomMeal}</td>
                                    <td>{item?.roomBedCapacity}</td>
                                    <td className='fs-6'>
                                        <span className={`badge ${item?.status === 'Active' ? 'badge-success': 'text-bg-danger'} rounded-pill d-inline`}>{item?.status}</span>
                                    </td>

                                    <td>{item?.roomCancelCharge}</td>
                                    <td>$ {item?.ratePerNight}</td>
                                    {/* <td>
                                        <div className='d-flex' >
                                           <Link to={`/adminDashboard/roomEdit/${item._id}`}><i class="bi bi-pencil-square z-3 fs-5 mx-2 text-primary" role={'button'}></i></Link> 
                                            <i class="bi bi-trash3 fs-5 text-danger" onClick={() => handleDelete(item._id)} role={'button'}></i>
                                        </div>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div class="row mb-3">
                <div class="col-auto me-auto">Showing 1 to {dataLimit} of {totalData}</div>
                <div class="col-auto">
                    <div className='mb-4'>
                        <Pagination count={page} onChange={handlePageChange} variant="outlined" color="primary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RoomActive;
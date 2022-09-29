import { Pagination } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './RoomList.scss'

const RoomList = () => {
    const [allData, setAllData] = useState([])
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    const [totalData, setTotalData] = useState(0)
    const [dataLimit, setDataLimit] = useState(5)
    const [filterData, setFilterData] = useState('')
    const [deletedSuccess,setDeletedSuccess] = useState(false)
 


    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/room/createRoom?page=${activePage}&limit=${dataLimit}&&filter=${filterData}`)
            .then(res => res.json())
            .then(data => {
                setAllData(data.data)
                setTotalData(data.totalData)
                const pageNumber = data.totalData
                const count = Math.ceil(pageNumber / dataLimit)
                setPage(count)

            })
    }, [activePage, dataLimit, filterData,deletedSuccess])

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }

    const handleDelete = async (id) => {
        const procced = window.confirm('Are You Sure Delete this Item')
        if (procced) {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/room/deleteRoom/${id}`, {
                    method: 'DELETE'
                })
                const result =  response
                setDeletedSuccess(result.ok)
                setTimeout(() => {
                    setDeletedSuccess(false)
                }, 1000);
                console.log(result.ok);
            } catch (error) {
                console.log(error);
            }
        }
    }

    console.log(deletedSuccess)


    return (
        <div className='my-4'>
            <h4>Room listing</h4>
            <div className='list-table container my-3'>
                <div class="row mb-3">
                    <div class="col-auto me-auto"></div>
                    <div class="col-auto my-3">
                        <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark">Add New <span><i class="bi bi-plus-circle-fill fs-6 ms-2"></i></span></button>
                    </div>
                </div>
                <div class="row mb-3">
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
                    <table class="table align-middle mb-4 my-4 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>Img</th>
                                <th>#</th>
                                <th>Type</th>
                                <th>Feature</th>
                                <th>Meal</th>
                                <th>Capcity</th>
                                <th>Status</th>
                                <th>Cancel</th>
                                <th>Rent</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map(item =>


                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src={item.roomImage}
                                                    alt=""
                                                    style={{ width: '55px', height: '55px' }}
                                                    class="rounded-circle"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            {item.roomNumber}
                                        </td>
                                        <td>{item.roomType}</td>
                                        <td>{item.roomFeature}</td>
                                        <td>{item.roomMeal}</td>
                                        <td>{item.roomBedCapacity}</td>
                                        <td>
                                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>

                                        <td>{item.roomCancelCharge}</td>
                                        <td>$ {item.ratePerNight}</td>
                                        <td>
                                            <div className='d-flex' >
                                                <i class="bi bi-pencil-square  fs-5 mx-2 text-primary" role={'button'}></i>
                                                <i class="bi bi-trash3 fs-5 text-danger" onClick={() => handleDelete(item._id)} role={'button'}></i>
                                            </div>
                                        </td>
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

export default RoomList;
import { Pagination } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GuestList = () => {
    const [allGuest, setAllGuest] = useState([])
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    const [totalData, setTotalData] = useState(0)
    const [dataLimit, setDataLimit] = useState(5)
    const [filterData, setFilterData] = useState('')
    const [deletedSuccess,setDeletedSuccess] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/client/allClient?&page=${activePage}&limit=${dataLimit}&filter=${filterData}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllGuest(data.data)
                setTotalData(data.totalCount)
                const pageNumber = data.totalCount
                const count = Math.ceil(pageNumber / dataLimit)
                setPage(count)

            })
    }, [activePage, dataLimit, filterData,deletedSuccess])

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }

    const handleDelete = async (id) =>{
        const procced = window.confirm('Are You Sure Delete this Item')
        if (procced) {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/client/deleteClient/${id}`, {
                    method: 'DELETE'
                })
                const result =  response
                setDeletedSuccess(result.ok)
                setTimeout(() => {
                    setDeletedSuccess(false)
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='my-4'>
        <h4>Guest list</h4>
        <div className='list-table container my-4'>
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
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                            {/* <th>Action</th>
                            <th>Capcity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Rent</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allGuest?.map(item =>


                                <tr className='text-center'>
                                    {/* <td>
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={item?.roomImage}
                                                alt=""
                                                style={{ width: '55px', height: '55px' }}
                                                class="rounded-circle"
                                            />
                                        </div>
                                    </td> */}
                                    <td>
                                        {item.userName}
                                    </td>
                                    <td>
                                        {item.contactNumber}
                                    </td>
                                    <td className={filterData ? 'text-primary' : ''}><Link to={`/adminDashboard/guestDetails/${item.email}`}>{item?.email}</Link></td>
                                    {/* <td>{item?.roomFeature}</td>
                                    <td>{item?.roomMeal}</td>
                                    <td>{item?.roomBedCapacity}</td>
                                    <td className='fs-6'>
                                        <span className={`badge ${item?.status === 'Active' ? 'badge-success': 'text-bg-danger'} rounded-pill d-inline`}>{item?.status}</span>
                                    </td>

                                    <td>{item?.roomCancelCharge}</td>
                                    <td>$ {item?.ratePerNight}</td> */}
                                    <td >
                                       <i class="bi bi-trash3 fs-5 text-danger " onClick={() => handleDelete(item._id)} role={'button'}></i>
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

export default GuestList;
import { Pagination, Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../../../SharedComponent/Hooks/useFetch';
import Spineer from '../../../../SharedComponent/Spinner/Spineer';
import './AllReviews.scss'

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    //const [dataLimit, setDataLimit] = useState(4)
    const [updateSuccess, setUpdateSuccess] = useState(false)

    const dataLimit = 4

    const url = (`http://localhost:8000/api/v1/review/getAllReviews?&page=${activePage}&limit=${dataLimit}`)

   // const { data, isPending } = useFetch(url,updateSuccess)

    //console.log(data)

    // useEffect(() => {
    //     if (data?.status === 'success') {
    //         console.log(data);
    //         setAllReviews(data?.data)
    //         const pageNumber = data?.total
    //         const count = Math.ceil(pageNumber / dataLimit)
    //         setPage(count)
    //     }
    // },[data,dataLimit])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAllReviews(data?.data)
            const pageNumber = data?.total
            const count = Math.ceil(pageNumber / dataLimit)
            setPage(count)
        })
    }, [url,updateSuccess])

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }

    const handleStatusUpdate = async(id,status) =>{
        const response = await fetch(`http://localhost:8000/api/v1/review/updateReview/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status})
        })

        const result =  response.ok
        setUpdateSuccess(result)
        setTimeout(() => {
           setUpdateSuccess(false) 
        }, 1000);
    }


    return (
        <div className='container'>
            {/* {
                isPending && <Spineer></Spineer>
            } */}
            {
                allReviews.map(review =>

                    <div className='row my-4 mb-4 review-bx border-bottom'>
                        <div className='col-md-4 col-lg-4 col-12'>
                            <div className='d-flex justify-content-center gap-3'>
                                <div className='img  text-center '>
                                    <i class="bi bi-person-circle"></i>
                                </div>
                                <div className='info'>
                                    <span className='fs-16 text-primary'>{review?.status}</span>
                                    <h4>{review.name}</h4>
                                    <span className='fs-12 mb-0'>Posted on {`${new Date(review.createdAt).toLocaleDateString()}`}</span>
                                    <p className='fs-12'>{`${new Date(review.createdAt).toLocaleTimeString()}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-6 col-12'>
                            <div>
                                <Rating value={5}></Rating>
                            </div>
                            <p className='text-muted'>{review.description}</p>
                        </div>
                        <div className=' col-md-2 col-lg-2 col-12  d-flex justify-content-center align-items-center'>
                            <div className=' d-flex gap-3 py-3 px-3'>
                                <div className='review-icon'>
                                    <i title='Publish' class="bi bi-check-circle-fill fs-1 text-success ripple" role={'button'} onClick={() => handleStatusUpdate(review._id,'published')}></i>
                                </div>
                                <div className=' review-icon'>
                                    <i title='Delete' class="bi bi-x-circle-fill fs-1 text-danger" role={'button'} onClick={() => handleStatusUpdate(review._id,'deleted')}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='mb-3'>
                <Pagination count={page} shape="rounded" onChange={handlePageChange} color='info' />
            </div>
        </div>
    );
};

export default AllReviews;
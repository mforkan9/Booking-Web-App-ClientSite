import { Pagination, Rating } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../../../SharedComponent/Hooks/useFetch';
import Spineer from '../../../../SharedComponent/Spinner/Spineer';
import './PublishedReviews.scss'

const PublishedReviews = () => {
    const [publishedReviews, setPublishedReviews] = useState([])
    const [page, setPage] = useState()
    const [activePage, setActivePage] = useState(1)
    const [dataLimit, setDataLimit] = useState(4)
    const [updateSuccess, setUpdateSuccess] = useState(false)

    const url = (`http://localhost:8000/api/v1/review/getReviewsByStatus?status=published`)

    const { data, isPending } = useFetch(url)

    useEffect(() => {
        if (data?.status === 'success') {
            setPublishedReviews(data?.data)
            const pageNumber = data?.totalPublished
            const count = Math.ceil(pageNumber / dataLimit)
            setPage(count)
        }
    })

    console.log(data);

    const handlePageChange = (event, value) => {
        setActivePage(value)
    }
    return (
            <div className='container'>
            {
                isPending && <Spineer></Spineer>
            }
            {
               publishedReviews.map(review =>

                    <div className='row my-4 mb-4 review-publish-bx border-bottom'>
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
                        <div className=' col-md-8 col-lg-8 col-12'>
                            <div>
                                <Rating value={5}></Rating>
                            </div>
                            <p className='text-muted'>{review.description}</p>
                        </div>
                        {/* <div className=' col-md-2  d-flex justify-content-center align-items-center'>
                            <div className=' d-flex gap-3 py-3 px-3'>
                                <div className='review-icon'>
                                    <i class="bi bi-check-circle-fill fs-1 text-success" ></i>
                                </div>
                                <div className=' review-icon'>
                                    <i class="bi bi-x-circle-fill fs-1 text-danger" ></i>
                                </div>
                            </div>
                        </div> */}
                    </div>
                )
            }
            <div className='mb-3'>
                <Pagination count={page} shape="rounded" onChange={handlePageChange} color='info' />
            </div>
        </div>
       
    );
};

export default PublishedReviews;
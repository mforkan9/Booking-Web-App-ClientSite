import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../../../SharedComponent/Hooks/useFetch';
import Spineer from '../../../SharedComponent/Spinner/Spineer';
import img1 from './user.png'

const TestimonialBlock = () => {
    const [testimonial, setTestimonial] = useState([])
    // const url = (`http://localhost:8000/api/v1/review/getReviewsByStatus?status=published`)
    // const { data, isPending } = useFetch(url)

    // useEffect(() => {
    //     if (data?.status === 'success') {
    //         setTestimonial(data?.data)
    //     }
    // })

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/review/getReviewsByStatus?status=published`)
          .then(res => res.json())
          .then(data => setTestimonial(data?.data))
      }, [])


    return (
        <div className='container ' id='Reviews' style={{ marginTop: '100px' }}>
            <div className='col-md-12  mb-5'>
                <h2 style={{ fontSize: '46px', fontFamily: 'serif', fontWeight: '800', color: 'black' }}>Our <span style={{ color: '#ffcb05' }}>Guests Say</span> </h2>
                <p className='fs-5  '>Testimonial Lorem ipsum dolor sit amet consectetur</p>

            </div>
            <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                <div class="carousel-inner ">
                    { 
                     testimonial.length <= 0 && <Spineer></Spineer>
                    }
                    {
                        testimonial.map((review, i) =>

                            <div key={i}  className={i === 0 ? "carousel-item active" : "carousel-item"}>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-lg-8">
                                        <h5 class="mb-3">{review.name}</h5>
                                        <p class="text-muted">
                                            <i class="fas fa-quote-left pe-2"></i>
                                            {review.description}
                                        </p>
                                    </div>
                                </div>
                                <img class="rounded-circle shadow-1-strong mb-4"
                                    src={img1} alt="avatar"
                                    style={{ width: "100px" }} />
                                <div>
                                    <Rating value={5}></Rating>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                    data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default TestimonialBlock;
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Auth from '../../../Firebase/firebase.init';
import './ClientDashboar.scss'

const ClientDashboard = () => {
    const [user] = useAuthState(Auth)
    const [activity, setActivity] = useState([])
    const [reviewSuccess, setReviewSuccess] = useState(false)
    const [totalBooking, setTotalBooking] = useState(0)
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(`https://start-hotel-practice-project.onrender.com/api/v1/client/findUserByToken/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${user.accessToken}`
                }
            })
            const result = await res.json()
            console.log(result);
            setActivity(result.profileData.activity)
            //setClientBooked(result?.booking?.bookedId)

             setTotalBooking(result?.totalCount)
            // const pageNumber = result?.totalCount
            // const count = Math.ceil(pageNumber / dataLimit)
            // setPage(count)

        }
        FetchData().catch(err => console.log(err))

    }, [user,reviewSuccess])


    const onSubmit = async(formData) =>{
        const reviewsData = {...formData,email:user.email}
        console.log(reviewsData)
        const result = await fetch(`https://start-hotel-practice-project.onrender.com/api/v1/review/postReviews`,{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(reviewsData)
        })
        console.log(result);
        setReviewSuccess(result.ok)
       if (result.ok) {
         toast('Send Review Successfully')
       }else{
        toast(<p className='text-danger'>Send Error</p>)
       }
       
    }



    return (
        <div className='px-2 client-dashboard  '>
            <h2>Booking Dash</h2>
            <div className='row mb-4 mt-4'>
                <div className='col-md-4 col-lg-4 col-12 mb-3 '>
                    <div className='card border'>
                        <div className='py-2 mx-auto'>
                            <div className='d-flex '>
                                <span><i class="fa fa-briefcase fs-1 text-warning text-center py-3" aria-hidden="true"></i></span>
                                <div className='ms-4'>
                                    <h2 className='mb-0 fw-bold text-dark'>{totalBooking} <small>+</small></h2>
                                    <p className='text-muted'> Booking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-12 mb-3'>
                    <div className='card border'>
                        <div className='py-2 mx-auto'>
                            <div className='d-flex '>
                                <span><i class="fa fa-heart fs-1 text-warning text-center py-3" aria-hidden="true"></i></span>
                                <div className='ms-4'>
                                    <h2 className='mb-0 fw-bold text-dark'>400</h2>
                                    <p className='text-muted'>WishList</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 col-12'>
                    <div className='card border'>
                        <div className='py-2 mx-auto'>
                            <div className='d-flex '>
                                <span><i class="fa fa-star fs-1 text-warning text-center py-3" aria-hidden="true"></i></span>
                                <div className='ms-4'>
                                    <h2 className='mb-0 fw-bold text-dark'>{activity.length} <small>+</small></h2>
                                    <p className='text-muted'>Activities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-7 mb-4'>
                    <div className='card border'>
                        <div className='card-header'>
                            <h4>Recent Activites</h4>
                        </div>
                        <div className=''>
                            {
                                [...activity].reverse().slice(0,5).map(data =>
                                    <div class="row  g-0 py-3 px-3 align-items-center border-bottom">
                                        <div class="col-8 col-sm-6 col-md-8 px-2">
                                          <span className='align-middle text-dark fw-bold'>{data.text}</span>
                                        </div>
                                        <div class="col-4 col-md-4 text-end">
                                            <span><small>{`${new Date(data.date).toLocaleTimeString()}`} at </small>{`${new Date(data.date).toLocaleDateString()}`}</span>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='card border'>
                        <div className='card-header'>
                            <h4>Reviews</h4>
                        </div>
                        <div className='card-body '>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=' mb-4'>
                                    <TextField required {...register("name")} id="outlined-basic" fullWidth className='' label="Name" variant="outlined" placeholder='Name' />
                                </div>
                                <div className='mb-3'>
                                    <TextField required {...register("description")} id="outlined-basic" fullWidth rows={4} multiline className='' placeholder='Description' label="Description" variant="outlined" />
                                </div>
                                <button type='submit' className='btn bg-warning fw-bold'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ClientDashboard;
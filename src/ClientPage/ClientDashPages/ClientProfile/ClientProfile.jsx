import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../../../Firebase/firebase.init';
import useToken from '../../../SharedComponent/Hooks/useToken';
import './ClientProfile.scss'
import ProfileEdit from './ProfileEdit';
import img1 from './user-image-with-black-background.png'

const ClientProfile = () => {
    const [user] = useAuthState(Auth)
    const [clientInfo, setClientInfo] = useState({})
    const [error, setError] = useState('')
    const [token] = useToken(user)


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
            setClientInfo(result?.profileData)

        }
        FetchData()

    }, [user,token])

    return (
        <div className='px-2 client-profile'>
            <h2 >My Profile</h2>
            <div className='card border mt-4'>
                <div className='card-header'>
                    <h4>Profile</h4>
                </div>
                <div className='card-body'>
                    <div className='row  container'>
                        <div className='col-12 col-md-5 col-lg-4 mb-5'>
                            <img src={img1} style={{ width: '100%' }} alt="Profile" />
                        </div>
                        <div className='col-12  col-md-7 col-lg-8 '>
                            <ul className='list-unstyled my-5 '>
                                <li><span className='fw-bold lh-lg'>Name:</span>{clientInfo?.userName}</li>
                                <li><span className='fw-bold lh-lg'>Email:</span>{clientInfo?.email}</li>
                                <li><span className='fw-bold lh-lg'>Phone:</span>{clientInfo?.contactNumber}</li>
                                <li><span className='fw-bold lh-lg'>Address:</span>{clientInfo?.address}</li>
                                <li><span className='fw-bold lh-lg'>Country:</span>{clientInfo?.country}</li>
                                <button className='btn text-dark mt-4 bg-warning' data-bs-toggle="modal" data-bs-target="#editModalToggle">Edit Profile</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="editModalToggle" aria-hidden="true" aria-labelledby="editModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <ProfileEdit></ProfileEdit>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;
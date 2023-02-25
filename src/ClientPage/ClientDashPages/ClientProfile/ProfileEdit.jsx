import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../../../Firebase/firebase.init';
import useToken from '../../../SharedComponent/Hooks/useToken';

const ProfileEdit = () => {
    const [user] = useAuthState(Auth)
    const [token] = useToken(user)
    const [updateSuccess,setUpdateSuccess] = useState(false)


    const initialState = {
        userName: '' || token?.userName,
        contactNumber: '' || token?.contactNumber,
        address: '' || token?.address,
        country: '' || token?.country
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INPUT':
                return {
                    ...state,
                    [action.payload.name] : action.payload.value
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer,initialState)

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        fetch(`http://localhost:8000/api/v1/client/profileUpdate/${user.email}`,{
            method:'PATCH',
            headers:{
                'authorization': `Bearer ${user.accessToken}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(state)
        })
        .then(res => setUpdateSuccess(res.ok))
       
    }

    return (
        <div className='text-dark'>
            <form>
                <div>
                    {updateSuccess && <p className='text-success'>Update Successfully</p>}
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-12 mb-3'>
                        <label for="name" className='fw-bold'>UseName</label>
                        <input type="text" name='userName' id="name" value={token.userName} readOnly   placeholder='User Name' className='form-control rounded-1 p-2 bg-light border' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-12 mb-3'>
                        <label for="email" className='fw-bold'>Email</label>
                        <input type="email" id="email" name='email' value={token.email} readOnly  placeholder='Email' className='form-control rounded-1 p-2 bg-light border' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-12 mb-3'>
                        <label for="phone" className='fw-bold'>Phone</label>
                        <input type="tel" id="phone" name='contactNumber' onChange={(e) => dispatch({ type: 'INPUT', payload:{name:e.target.name,value:e.target.value}})}  placeholder='Phone' className='form-control rounded-1 p-2 bg-light border' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-12 mb-3'>
                        <label for="address" className='fw-bold'>Address</label>
                        <input type="text" id="address" name='address' onChange={(e) => dispatch({ type: 'INPUT', payload:{name:e.target.name,value:e.target.value}})} placeholder='Address' className='form-control rounded-1 p-2 bg-light border' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-12 mb-3'>
                        <label for="country" className='fw-bold'>Country</label>
                        <input type="text" id="country" name='country' onChange={(e) => dispatch({ type: 'INPUT', payload:{name:e.target.name,value:e.target.value}})} placeholder='Country' className='form-control rounded-1 p-2 bg-light border' />
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-warning text-dark ' type='submit' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
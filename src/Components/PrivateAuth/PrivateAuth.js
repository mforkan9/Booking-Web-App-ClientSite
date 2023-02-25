import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Navigate, useLocation } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import Auth from '../../Firebase/firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import EmailVerified from '../../SharedComponent/EmailVerified/EmailVerified';
import Spineer from '../../SharedComponent/Spinner/Spineer';

const PrivateAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(Auth);

    const location = useLocation()


    if (loading) {
        return <Spineer></Spineer>
        
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div>
            <EmailVerified></EmailVerified>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default PrivateAuth;
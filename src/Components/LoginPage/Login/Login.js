import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../../Firebase/firebase.init';
import useToken from '../../../SharedComponent/Hooks/useToken';
import LoginForm from '../Form/LoginForm/LoginForm';
import RegisterForm from '../Form/RegisterForm/RegisterForm';
import './Login.scss'

const Login = () => {
    const [formToggle, setFormToggle] = useState(false)
    const handleFormToggle = () => {
        setFormToggle(current => !current)
    }
    
    const [signInWithGoogle,guser] = useSignInWithGoogle(Auth)
    const [user, loading, error] = useAuthState(Auth)



    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
   
    

    //  if (!(user?.emailVerified)) {
    //     return navigate('/verify', { replace: true })
    //    } else{
    //      navigate(from, { replace: true })
    //    }

    if (user) {
        navigate(from, { replace: true });
    }


console.log(user)


    return (
        <div className=''>
            <section class="vh-100 bg-light" >
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black my-5" style={{ borderRadius: '25px' }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10  col-lg-6 col-xl-6 col-12 order-2 order-lg-1">
                                            <div class="text-center">

                                                <button type="button" class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-facebook-f fs-5"></i>
                                                </button>

                                                <button onClick={handleGoogleSignIn } type="button" class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-google fs-5"></i>
                                                </button>

                                                <button type="button" class="btn btn-link btn-floating mx-1">
                                                    <i class="fab fa-github fs-5"></i>
                                                </button>
                                            </div>
                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign {formToggle ? 'Up' : 'in'}</p>
                                            {
                                                formToggle ?

                                                    <RegisterForm></RegisterForm>
                                                    :
                                                    <LoginForm></LoginForm>

                                            }
                                            <div className=''>
                                                {
                                                    formToggle ?

                                                        <p class="mb-0 text-center">
                                                            Already have an account? <span role={'button'} class="text-primary fw-bold" onClick={handleFormToggle}>Sign In</span>
                                                        </p>
                                                        :
                                                        <p class="mb-0 text-center">
                                                            Don't have an account? <span role={'button'} class="text-primary fw-bold" onClick={handleFormToggle}>Sign Up</span>
                                                        </p>

                                                }
                                            </div>
                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
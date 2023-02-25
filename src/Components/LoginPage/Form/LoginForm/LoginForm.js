import { async } from '@firebase/util';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Auth from '../../../../Firebase/firebase.init';

const LoginForm = () => {
    const [passShow, setPassShow] = useState(false)
    const handleToggleShow = () => {
        setPassShow(current => !current)
    }
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [ signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(Auth)
        
   const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(Auth)


    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(email, password).then(() =>{
            navigate(from, { replace: true })
        })

    }

    const resetPassword = async() =>{
        const resetEmail = email;
        if (email) {
           await sendPasswordResetEmail(resetEmail)
           toast('Sent Email..Please check your email') 
        }else{
            toast('Please Provide an Email')
        }
    }

    let loginError;
    if (error) {
        loginError = <p className='text-danger'>{error?.message}</p>
    }


    return (
        <div>
            <div className='text-center'>
                {loginError}
            </div>
            <form className="login-form mx-5 " onSubmit={handleLogin}>

                <div class="d-flex flex-row align-items-center mb-5">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <TextField

                            id="outlined-error-helper-text2"
                            label="Email"
                            placeholder='example@gmail.com'
                            required
                            type={'email'}
                            onBlur={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <FormControl sx={{ m: 0, width: '26ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={passShow ? 'text' : 'password'}
                                onBlur={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                label="Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            className='show'
                                            onClick={handleToggleShow}
                                            edge="end"
                                        >
                                            {passShow ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>
                <div class="form-check d-flex justify-content-center mb-4">
                    <label class="form-check-label" for="form2Example3">
                       <span onClick={resetPassword} role={'button'} className='text-primary'>Reset Password?</span>
                    </label>
                </div>

                <div class="d-flex justify-content-center mx-4 mb-5 mb-lg-5">
                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                </div>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LoginForm;
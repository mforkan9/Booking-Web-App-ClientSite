import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../../../Firebase/firebase.init'
import useToken from '../../../../SharedComponent/Hooks/useToken';
import './RegisterForm.scss'

const RegisterForm = () => {
    const [passShow, setPassShow] = useState(false)

    const handleToggleShow = () => {
        setPassShow(current => !current)
    }

    //navigate
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";


    //react-firebase-hook
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(Auth, { sendEmailVerification: true })
    const [updateProfile, updating, error2] = useUpdateProfile(Auth)



    //State
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const EmailValidate = (e) => {
        const email = e.target.value
        const regx = (/^\S+[a-zA-Z0-9]+@\S+\.\S+$/g)
        if (regx.test(email)) {
            setEmailError('')
            setEmail(email)
        }
        else {
            setEmailError('Please Provide A valid Email')
        }
    }

    const PasswordValidate = (e) => {
        const password = e.target.value
        const regx = (/[^!@#$%^&*][a-zA-Z0-9]{6,16}$/g)
        if (!(password.length > 6)) {
            setPasswordError('Password must be 6 char.')
        } else if (regx.test(password)) {
            setPasswordError('')
            setPassword(password)
        }
        else {
            setPasswordError("Don't Provide Special Symbol")
        }
    }

    const confirmPasswordValidate = (e) => {
        const confirmPassword = e.target.value
        if (confirmPassword !== password) {
            setConfirmPasswordError('Provide Confirm Password')
        } else {
            setConfirmPasswordError('')
        }
    }


    const handleRegister = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: userName })
       // navigate(from, { replace: true })

    }

    // if (!(user?.user?.emailVerified)) {
    //     return navigate('/verify', { replace: true })
    //    } else{
    //      navigate(from, { replace: true })
    //    }



    let registerError;
    if (error) {
        registerError = <p className='text-danger'>{error?.message}</p>
    }


    return (
        <div>
            <div className='text-center  mb-4'>
                {registerError}
            </div>
            <form class=" mx-5 " onSubmit={handleRegister}>

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <TextField

                            id="outlined-error-helper-text1"
                            label="UserName"
                            placeholder='User name'
                            required
                            type={'text'}
                            onChange={(e) => setUserName(e.target.value)}
                            helperText="Incorrect entry."
                        />

                    </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <TextField
                            error={emailError ? emailError : ''}
                            id="outlined-error-helper-text2"
                            label="Email"
                            placeholder='example10@gmail.com'
                            required
                            type={'email'}
                            onBlur={EmailValidate}
                            helperText={emailError ? emailError : ''}
                        />

                    </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0 pass-wrapper">
                        <FormControl
                            sx={{ m: 0, width: '26ch' }}
                            variant="outlined"

                            error={passwordError ? passwordError : ''}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-password"
                                type={passShow ? 'text' : 'password'}
                                placeholder='Password'
                                label="Password"
                                required
                                onBlur={PasswordValidate}
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
                            <p className='text-danger'>{passwordError}</p>
                        </FormControl>
                    </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">

                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0 pass-wrapper">
                        <FormControl sx={{ m: 0, width: '26ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={passShow ? 'text' : 'password'}
                                onBlur={confirmPasswordValidate}
                                placeholder='Confirm Password'
                                label="Confirm Password"
                                required
                            // endAdornment={
                            //     <InputAdornment position="end">
                            //         <IconButton
                            //             className='show'
                            //             onClick={handleToggleShow}
                            //             edge="end"
                            //         >
                            //             { passShow ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                            //         </IconButton>
                            //     </InputAdornment> 
                            // }  
                            />
                            <p className='text-danger'>{confirmPasswordError}</p>
                        </FormControl>
                    </div>
                </div>

                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                </div>




                <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-5">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                </div>

            </form>
        </div>
    );
};

export default RegisterForm;
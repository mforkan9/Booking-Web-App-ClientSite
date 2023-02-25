import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Auth from '../../Firebase/firebase.init';

const EmailVerified = () => {
    const [user, loading, error] = useAuthState(Auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(Auth);

    return (
        <div className='row'>
                  <div className='card text-center col-md-6 mx-auto my-5 px-5 py-5'>
                <div className='mb-4'>
                    <h4 className='mb-4 fw-bold'>Please Verify Your Email</h4>
                    <p className='mb-0'>Your are Almost there! we sent an email</p>
                    <p className='fw-bold'>{user.email}</p>
                    <p className='mb-0'>Just click on the link in that email to complete your SignUp.</p>
                    <p className='mb-5'> If you don't see it, you may need to your <strong>Spam folder</strong></p>
                    <p>Still can't find the email?</p>
                    <button type="button" className='btn btn-success mb-4' 
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent Email')
                    }}>Resend Email</button>
                 <p><Link to={'/login'}>Back to Login</Link></p> 

                 <p>After Verified Email !please reload page</p>
                </div>
              
            </div>
        </div>
    );
};

export default EmailVerified;
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../App';



const AdminLogin = () => {
    const { register, handleSubmit } = useForm()
    const value = useContext(AdminContext)
     const [isAdmin, setIsAdmin] = value
    const [err, setErr] = useState('')


    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleAdmin = (data) => {
        fetch(`http://localhost:8000/api/v1/admin/findUser`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.isAdmin) {
                    setIsAdmin(data.isAdmin)
                    setErr('')
                } else {
                    setErr(data?.message)
                }
            })
    }

    if (isAdmin) {
        navigate(from, { replace: true });
    }

    return (
        <div className=''>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '800px', width: '100%' }}>
                <div className='row'>
                    <div className='col-md-12  border mx-auto p-5 row'>
                        <div className='col-md-12  mx-auto'>
                            <div className='text-center mb-5'>
                                <h2 className='fw-bold text-dark'>Welcome to <span className='text-warning'>STARTHOTEL</span></h2>
                                <h5 className='text-muted'>Admin Dashboard</h5>
                                <p className='text-danger'>{err}</p>
                            </div>
                            <form onSubmit={handleSubmit(handleAdmin)}>

                                <div className='mb-4'>
                                    <h5>Email</h5>
                                    <input  {...register('email')} class="form-control form-control-lg" type="text" defaultValue={'demo@adminstarthotel.com'} placeholder="email@gmail.com" aria-label=".form-control-lg example" />
                                </div>
                                <div>
                                    <button type="submit" className='btn btn-success  w-100'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
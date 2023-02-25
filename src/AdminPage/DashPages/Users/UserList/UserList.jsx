import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [allAdmin, setAllAdmin] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/admin/getAllUser')
            .then(res => res.json())
            .then(data => setAllAdmin(data.data))
    }, [])

    return (
        <div>
            <div className='list-table container my-4'>
                <div className='table-responsive mb-3 py-3' >
                    <table class="table align-middle mb-4 my-4 bg-white table-hover">
                        <thead class="bg-light">
                            <tr className='text-center'>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Action</th>
                                {/* <th>Action</th>
                            <th>Capcity</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Rent</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAdmin?.map(item =>


                                    <tr className='text-center'>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item?.email}</td>
                                        <td >
                                            <i class="bi bi-trash3 fs-5 text-danger " role={'button'}></i>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
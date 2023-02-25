import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminContext } from '../../App';

const AdminPrivateAuth = ({ children }) => {
    const value = useContext(AdminContext)
    const [isAdmin] = value


    const location = useLocation()


    if (!isAdmin) {
        return <Navigate to="/adminlogin" state={{ from: location }} replace />;
    }

    return children
};

export default AdminPrivateAuth;
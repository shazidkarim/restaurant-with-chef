/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/home';
    if (loding) {
        return <div className='text-center mt-4'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
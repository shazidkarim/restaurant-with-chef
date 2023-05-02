/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>some errror ocured</h1>
            <h2 className='text-xl text-center text-red-500'>{error.message}</h2>
        </div>
    );
};

export default ErrorPage;
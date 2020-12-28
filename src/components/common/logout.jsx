import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../store/auth';

const Logout = () => {
    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(logoutSuccess());
        window.location = '/';
    }, []);

    return null;
}

export default Logout;
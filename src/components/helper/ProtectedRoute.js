import React, { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { KEYS } from '../../constants/localStorage';
import useLocalStorage from '../../hooks/useLocalStorage';
import useResetStore from './useResetStore';

export const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }) => {
    const [ resetStore ] = useResetStore();

    const dispatch = useDispatch();
    const [ userLocal ] = useLocalStorage(KEYS.USER);
  
    const setLogin = useCallback(() => dispatch({ type: 'setLogin' }), [dispatch]);
    const setUser = useCallback((data) => dispatch({ type: 'setUser', payload: data }), [dispatch]);

    const [ value ] = useLocalStorage(KEYS.LOGIN);

    if (value === null || value === false || value === '' || value === 'undefined' || !value) {
        // clear the redux-store
        resetStore();
        return <Navigate to={redirectPath} replace />;
    }

    setLogin();
    setUser(userLocal);

    return children;
};
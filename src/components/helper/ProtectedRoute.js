import React, { useCallback, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { KEYS } from '../../constants/localStorage';

import useLocalStorage from '../../hooks/useLocalStorage';
import useResetStore from './useResetStore';

export const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ resetStore ] = useResetStore();
    const [ value ] = useLocalStorage(KEYS.LOGIN);

    // if user login is deleted from localStorage
    const localStorageHandler = useCallback((e) => {
      const { isTrusted, key, oldValue, newValue } = e;
      if(
        isTrusted && key === 'login' 
        && (newValue === null || newValue === 'false') 
        && oldValue === "true") {
        
        console.info('User session no longer valid, proceeding with logout!');
        
        resetStore();
        window.removeEventListener('storage', localStorageHandler);
        localStorage.clear();
        navigate(redirectPath);

      }
    }, [resetStore, navigate, redirectPath]);

    // listen to change in localStorage
    useEffect(() => {
      window.addEventListener('storage', localStorageHandler);
      return () => {
        window.removeEventListener('storage', localStorageHandler);
      }
    }, [localStorageHandler])

    const setLogin = useCallback(() => dispatch({ type: 'setLogin' }), [dispatch]);

    if (value === null || value === false) {
        // clear the redux-store
        resetStore();
        localStorage.clear();
        return <Navigate to={redirectPath} replace />;
    }

    setLogin();
    return children;
};
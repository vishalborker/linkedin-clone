import React from 'react';

import { KEYS } from '../../constants/localStorage';
import useLocalStorage from '../../hooks/useLocalStorage';

import { Navigate } from 'react-router-dom';

export const NoLoginRequired = ({
    redirectPath = '/feed',
    children,
  }) => {
    const [ value ] = useLocalStorage(KEYS.LOGIN);

    const isLoggedIN = (value) => {
        return value === true || value === "true";    
    }

    if (isLoggedIN(value)) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KEYS } from '../constants/localStorage';
import useLocalStorage from './useLocalStorage';

function useUser() {
  const dispatch = useDispatch();
  const [ , setUserLocal ] = useLocalStorage(KEYS.USER);
  const [ userEmail ] = useLocalStorage(KEYS.EMAIL);

  const getUserDispatch = useCallback((data) => dispatch({ type: 'GET_USER', payload: data }), [dispatch]);
  const userData = useSelector(state => state.user.user);

  // sets local user data
  useEffect(() => {
    if (userData)
      setUserLocal(userData);
  }, [setUserLocal, userData])

  useEffect(() => {
    if(userEmail)
      getUserDispatch(userEmail);
  }, [getUserDispatch, userEmail]);

  return [userData];
}

export default useUser;
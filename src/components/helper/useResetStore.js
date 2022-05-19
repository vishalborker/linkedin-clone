import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function useResetStore() {
  const dispatch = useDispatch();
  const setLogout = useCallback(() => dispatch({ type: 'setLogout' }), [dispatch]);
  const removeUser = useCallback(() => dispatch({ type: 'REMOVE_USER' }), [dispatch]);

  const resetStore = () => {
    setLogout();
    removeUser();
  }
  
  return [ resetStore ];
}

export default useResetStore
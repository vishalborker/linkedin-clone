import { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
    const [ value, setValue ] = useState(() => {
    let currentValue;

    try {
        currentValue = JSON.parse(localStorage.getItem(key));

        console.log({currentValue});
    } catch(exception) {
        currentValue = defaultValue;
    }

    return currentValue;
  });

  const notEmpty = (value) => {
    return value !== 'undefined' && value !== undefined && value !== null && value !== 'null';
  }

  useEffect(() => {
    if (notEmpty(value)) {
      localStorage.setItem(key, JSON.stringify(value));
    } 
  }, [value, key]);

  return [ value, setValue ];
}

export default useLocalStorage
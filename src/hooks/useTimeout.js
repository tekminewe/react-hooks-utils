import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  })

  useEffect(() => {
    const timer = setTimeout(callbackRef.current, delay);
    return () => {
      clearTimeout(timer);
    }
  }, [delay]);
};

export default useTimeout;

import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  })

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    if(delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  },[callback])
}

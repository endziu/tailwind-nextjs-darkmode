import { useState, useEffect } from 'react'

export default function useStickyState(key) {
  return function(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);

      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }
}
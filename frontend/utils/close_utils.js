import { useEffect } from 'react';

export const closeOnEscape = (setBoolean) => {
  const checkForEscape = (e) => {
    if (e.keyCode === 27) {
      setBoolean(false);
    }
  };

  useEffect(() => {
   document.addEventListener("keydown", checkForEscape);
   return () => document.removeEventListener("keydown", checkForEscape);
  }, []);
}

export const closeOnOutsideClick = (ref, setBoolean) => {
  const checkOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setBoolean(false);
      e.stopImmediatePropagation();
    }
  };

  useEffect(() => {
   document.addEventListener("click", checkOutside);
   return () => document.removeEventListener("click", checkOutside);
  }, []);
}

import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const current = observerRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [callback, options]);

  return observerRef;
};

export default useIntersectionObserver;

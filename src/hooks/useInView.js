import { useEffect, useRef, useState } from 'react';

const supportsObserver = () => typeof window !== 'undefined' && 'IntersectionObserver' in window;

/**
 * Adds `data-visible` once an element scrolls into view, then stops observing.
 * When IntersectionObserver is unavailable the content starts visible, so the
 * page never depends on JS to be readable.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => !supportsObserver());

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

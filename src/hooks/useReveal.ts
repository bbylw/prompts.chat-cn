import { useLayoutEffect } from 'react';

/**
 * Reveals every [data-reveal] element once, as it enters the viewport.
 * The class that hides them is only added here, so nothing is ever hidden without JS.
 */
export function useReveal() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const root = document.documentElement;
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
}

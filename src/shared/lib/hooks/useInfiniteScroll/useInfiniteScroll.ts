import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (!callback || !wrapperElement || !triggerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    setTimeout(() => {
      observer.observe(triggerElement);
    }, 1500);

    return () => {
      if (triggerElement) observer.unobserve(triggerElement);
    };
  }, [callback, triggerRef, wrapperRef]);
}

import { MutableRefObject, useCallback, useRef } from "react";

/**
 * Фукнция не вызывается, пока не пройдёт n мс бездействия
 * @param callback Функция, которая вызывается через delay мс бездействия
 * @param delay Интервал бездействия в мс
 * @returns
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },

    [callback, delay]
  );
}

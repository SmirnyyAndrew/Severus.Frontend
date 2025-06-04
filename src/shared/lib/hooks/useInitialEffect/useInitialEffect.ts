import { useEffect } from "react";

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (!__IS_STORYBOOK__) callback();
  }, []);
}

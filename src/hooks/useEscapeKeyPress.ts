import { useCallback, useEffect } from "react";

export function useEscapeKeyPress(action: VoidFunction) {
  const escFunction = useCallback((event: any) => {
    if (event.key === "Escape") {
      return action();
    }
  }, []);

  return useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
}

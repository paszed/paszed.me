import { useEffect, useState } from "react";

export function useSearchNavigation(length: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [length]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          setSelectedIndex((index) =>
            Math.min(index + 1, Math.max(length - 1, 0)),
          );

          break;

        case "ArrowUp":
          event.preventDefault();

          setSelectedIndex((index) =>
            Math.max(index - 1, 0),
          );

          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
  }, [length]);

  return {
    selectedIndex,
    setSelectedIndex,
  };
}

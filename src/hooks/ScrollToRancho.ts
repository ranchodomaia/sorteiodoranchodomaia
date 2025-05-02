import { useCallback } from "react";

const useScrollToRancho = () => {
  const scrollToRancho= useCallback(() => {
    const ranchoElement = document.getElementById("rancho");
    if (ranchoElement) {
        ranchoElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return scrollToRancho;
};

export default useScrollToRancho;

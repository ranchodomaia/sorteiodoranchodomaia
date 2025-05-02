import { useCallback } from "react";

const useScrollToForm = () => {
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return scrollToForm;
};

export default useScrollToForm;

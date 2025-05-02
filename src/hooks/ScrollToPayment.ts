import { useCallback } from "react";

const useScrollToPayment = () => {
  const scrollToPayment= useCallback(() => {
    const paymentElement = document.getElementById("payment");
    if (paymentElement) {
        paymentElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return scrollToPayment;
};

export default useScrollToPayment;

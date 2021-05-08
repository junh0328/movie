import { useState } from "react";

const useHandleScroll = () => {
  const [scrolling, setScrolling] = useState<Boolean>(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrolling(false);
    } else if (window.scrollY > 30) {
      setScrolling(true);
    }
  };

  return { scrolling, setScrolling, handleScroll };
};

export default useHandleScroll;

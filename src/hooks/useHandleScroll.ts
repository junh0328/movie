import { useEffect, useState } from "react";

export default function useHandleScroll() {
  const [scrolling, setScrolling] = useState<Boolean>(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrolling(false);
    } else if (window.scrollY > 30) {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrolling]);

  return { scrolling, setScrolling, handleScroll };
}

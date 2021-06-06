import { useCallback, useEffect, useState } from 'react';

export default function handleWidth() {
  const [dropDownView, setDropdownView] = useState<boolean>(false);

  const handleSize = useCallback(() => {
    if (window.innerWidth < 1080) {
      setDropdownView(true);
    } else {
      setDropdownView(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
  }, [dropDownView]);

  return { dropDownView, setDropdownView, handleWidth };
}

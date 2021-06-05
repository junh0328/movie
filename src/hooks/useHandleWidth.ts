import { useCallback, useEffect, useState } from 'react';

export default function handleWidth() {
  const [dropDownView, setDropdownView] = useState<boolean>(false);

  const handleSize = useCallback(() => {
    if (window.innerWidth < 1080) {
      console.log('상태 값 변화 : ', dropDownView);
      setDropdownView(true);
    } else {
      setDropdownView(false);
      console.log('상태 값 변화 : ', dropDownView);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
  }, [dropDownView]);

  return { dropDownView, setDropdownView, handleWidth };
}

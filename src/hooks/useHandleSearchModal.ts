import { useEffect, useState } from 'react';

export default function useHandleSearchModal() {
  // 스크롤링 상태여부를 반환할 state
  const [scrolling, setScrolling] = useState<boolean>(false);

  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  const onScroll = () => {
    console.log(scrollTop, clientHeight, scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight && scrolling) {
      setScrolling(true);
      console.log('도달!', scrolling);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [scrolling]);

  return { scrolling, setScrolling, onScroll };
}

/* 다 합친 후에 없앨 hook */

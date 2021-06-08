import { useEffect, useState } from 'react';

export default function useHandleSearchModal() {
  // 스크롤 이벤트를 통해 page 수를 관리할 state
  const [page, setPage] = useState<number>(1);
  // 스크롤링 상태여부를 반환할 state
  const [scrolling, setScrolling] = useState<boolean>(false);

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !scrolling) {
      setScrolling(true);
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [scrolling]);

  return { page, scrolling, setScrolling, onScroll };
}

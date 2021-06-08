export default function useHandleSearchModal() {
  function scrollToBottom() {
    const x = document.getElementsByClassName('css-1w1xy1c')[0] as HTMLDivElement;
    if (x) {
      // console.log('x 가 있습니다.');
      x.addEventListener('scroll', onScroll);
    } else {
      console.log('x 가 없습니다');
    }

    function onScroll() {
      const whatIwant = x.scrollTop;
      const whatIneed = x.scrollHeight;
      const whatifeel = x.clientHeight;

      // const scrollHeight = document.documentElement.scrollHeight;
      // const scrollTop = document.documentElement.scrollTop;
      // const clientHeight = document.documentElement.clientHeight;

      // console.log('scrollTop: ', whatIwant, '\nscrollHeight: ', whatIneed, '\nclientHeight: ', whatifeel);

      if (whatIwant + whatifeel >= whatIneed) {
        setTimeout(() => {
          console.log('scrolled!');
        }, 3000);
      }
    }
    // alert('더이상 불러올 수 없습니다');
  }
  return { scrollToBottom };
}

/*
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

*/

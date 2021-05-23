import { useState, useRef, useEffect } from 'react';

const PADDINGS = 110;

export const useSliding = (elementWidth: number, countElements: number) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const newContainerWidth = wrapperRef.current.clientWidth - PADDINGS;

      setContainerWidth(newContainerWidth);

      console.log(newContainerWidth);
      console.log(elementWidth);
      setTotalInViewport(Math.floor(newContainerWidth / elementWidth));
      console.log('111');
    }
  }, [wrapperRef.current]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  console.log(totalInViewport);

  return { handlePrev, handleNext, slideProps, wrapperRef, hasPrev, hasNext };
};

export const useSizeElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.clientWidth);
    }
  }, [elementRef.current]);

  return { width, elementRef };
};

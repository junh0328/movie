import React from 'react';
import styled from '@emotion/styled';
import ControlButton from './ControlButton';
import { useSizeElement, useSliding } from './hooks';
import SliderContext from './context';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  position: relative;
`;
const SliderWrapper = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
`;

// Reference - https://codesandbox.io/s/ly4525156l
function SliderContainer(props: Props) {
  const { children } = props;

  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, wrapperRef, hasNext, hasPrev } = useSliding(
    width,
    React.Children.count(children),
  );

  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <Wrapper>
        <Slider>
          <SliderWrapper ref={wrapperRef} {...slideProps}>
            {children}
          </SliderWrapper>
        </Slider>
        {hasPrev && <ControlButton direction="prev" onClick={handlePrev} />}
        {hasNext && <ControlButton direction="next" onClick={handleNext} />}
      </Wrapper>
    </SliderContext.Provider>
  );
}

export default SliderContainer;

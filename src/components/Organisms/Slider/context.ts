import React from 'react';

const SliderContext = React.createContext<{
  elementRef?: React.RefObject<HTMLDivElement>;
}>({});

export default SliderContext;

import React from 'react';
import HeaderRight from './HeaderRight';
// index.tsx 또는 App.tsx 에서 적용한 부분을 다시 적용해야하는 부분들이 있음
import 'antd/dist/antd.css';

const desc = {
  component: HeaderRight,
  title: 'Molecules/HeaderRight',
};

export const Default = (): JSX.Element => {
  return <HeaderRight />;
};

export default desc;
